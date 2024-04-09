export function getInsertionSortAnimations(array) {
    let animations = [];
    let helperArray = array.slice();
    insertionSort(helperArray, animations);
    const totalMemory = calculateSpaceComplexity(helperArray, animations);
    console.log(`Space complexity: ${totalMemory} MB`);
    localStorage.setItem('totalMemory3', JSON.stringify(totalMemory));
    const totalTime = calculateTotalTime(animations) / 1000;
    console.log(`insertion sort takes ${totalTime} second`);
    localStorage.setItem('totalTime3', JSON.stringify(totalTime));
    return animations;
}

function insertionSort(helperArray, animations) {
    const length = helperArray.length;
    for (let i = 1; i < length; i++) {
        let position = helperArray[i];
        let j = i - 1;
        animations.push(["comparison1", j, i]);
        animations.push(["comparison2", j, i]);
        while (j >= 0 && helperArray[j] > position) {
            animations.push(["overwrite", j + 1, helperArray[j]]);
            helperArray[j + 1] = helperArray[j];
            j = j - 1;
            if (j >= 0) {
                animations.push(["comparison1", j, i]);
                animations.push(["comparison2", j, i]);
            }
        }
        animations.push(["overwrite", j + 1, position]);
        helperArray[j + 1] = position;
    }
}
function calculateTotalTime(animations) {
    // You may need to adjust these values based on the actual time taken for each animation step
    const timePerComparison = 5; // in milliseconds
    const timePerSwap = 5; // in milliseconds

    let totalTime = 0;
    for (const [operation] of animations) {
        if (operation === 'comparison1' || operation === 'comparison2') {
            totalTime += timePerComparison;
        } else if (operation === 'swap') {
            totalTime += timePerSwap;
        }

    }

    return totalTime;
}

function calculateSpaceComplexity(helperArray, animations) {
    // Calculate space complexity for helperArray and animations
    let space = 0;

    // Space for helperArray
    space += helperArray.length * getElementSize(helperArray[0]);

    // Space for animations array
    space += animations.length * getElementSize(animations[0]);

    // Convert to MB
    const spaceInMB = space / (1024 * 1024);

    return spaceInMB;
}

function getElementSize(element) {
    // Assuming each element occupies 8 bytes (an approximation)
    // You might need to adjust this based on the actual size of your data
    return 8; // Adjust this value based on your data types
}