export function getSelectionSortAnimations(array) {
    let animations = [];
    let helperArray = array.slice();
    selectionSort(helperArray, animations);
    const totalMemory = calculateSpaceComplexity(helperArray, animations);
    console.log(`Space complexity: ${totalMemory} MB`);
    localStorage.setItem('totalMemory5', JSON.stringify(totalMemory));
    const totalTime = calculateTotalTime(animations) / 1000;
    console.log(`selection sort takes ${totalTime} second`);
    localStorage.setItem('totalTime5', JSON.stringify(totalTime));
    return animations;
}

function selectionSort(helperArray, animations) {
    const length = helperArray.length;
    for (let i = 0; i < length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            animations.push(["comparison1", j, minIndex]);
            animations.push(["comparison2", j, minIndex]);
            if (helperArray[j] < helperArray[minIndex]) {
                minIndex = j;
            }
        }
        animations.push(["swap", i, helperArray[minIndex]]);
        animations.push(["swap", minIndex, helperArray[i]]);
        swap(helperArray, i, minIndex);
    }
}

function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
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
function calculateSpaceComplexity(helperArray, animations) {

    let space = 0;

    space += helperArray.length * getElementSize(helperArray[0]);


    space += animations.length * getElementSize(animations[0]);


    const spaceInMB = space / (1024 * 1024);

    return spaceInMB;
}

function getElementSize(element) {

    return 8;
}