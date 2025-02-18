export function getBubbleSortAnimations(array) {
    let animations = [];
    let helperArray = array.slice();

    bubbleSort(helperArray, animations);
    const totalMemory = calculateMemoryConsumption(helperArray, animations);
    console.log(`Memory required: ${totalMemory.toFixed(2)} MB`);
    localStorage.setItem('totalMemory', JSON.stringify(totalMemory));
    const totalTime = calculateTotalTime(animations) / 1000;
    console.log(`Bubble sort takes ${totalTime} second`);
    localStorage.setItem('totalTime', JSON.stringify(totalTime));
    return animations;
}

function bubbleSort(helperArray, animations) {
    const length = helperArray.length;
    let x = length - 1;
    while (x > 0) {
        let swapped = false;
        for (let i = 0; i < x; ++i) {
            animations.push(["comparison1", i, i + 1]);
            animations.push(["comparison2", i, i + 1]);
            if (helperArray[i] > helperArray[i + 1]) {
                swapped = true;
                animations.push(["swap", i, helperArray[i + 1]]);
                animations.push(["swap", i + 1, helperArray[i]]);
                swap(helperArray, i, i + 1);
            }
        }
        if (!swapped) break;
        x--;
    }
}

function swap(helperArray, firstIndex, secondIndex) {
    let temp = helperArray[firstIndex];
    helperArray[firstIndex] = helperArray[secondIndex];
    helperArray[secondIndex] = temp;
}

function calculateTotalTime(animations) {

    const timePerComparison = 5;
    const timePerSwap = 5;

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
function calculateMemoryConsumption(helperArray, animations) {
    const helperArrayMemory = helperArray.length * getElementSize(helperArray[0]);
    const animationMemory = animations.length * getElementSize(animations[0]);

    const totalMemory = (helperArrayMemory + animationMemory) / (1024 * 1024);

    return totalMemory;
}

function getElementSize(element) {

    return 8;
}

