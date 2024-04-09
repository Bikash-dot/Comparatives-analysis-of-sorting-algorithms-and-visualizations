import { randomIntfromInterval } from "../SortingVisualizer/SortingVisualizer.jsx";

export function getQuickSortAnimations(array) {
    let animations = [];
    let helperArray = array.slice();
    doQuickSort(helperArray, 0, helperArray.length - 1, animations);
    array = helperArray;
    const totalMemory4 = calculateSpaceComplexity(helperArray, animations);
    console.log(`Space complexity: ${totalMemory4} MB`);
    localStorage.setItem('totalMemory4', JSON.stringify(totalMemory4));
    const totalTime = calculateTotalTime(animations) / 1000;
    console.log(` quick sort takes ${totalTime} second`);
    localStorage.setItem('totalTime4', JSON.stringify(totalTime));
    return animations;
}

function doQuickSort(helperArray, startIdx, endIdx, animations) {
    let pivotIdx;
    if (startIdx === endIdx) return;
    if (startIdx < endIdx) {
        pivotIdx = partitionArray(helperArray, startIdx, endIdx, animations);
        doQuickSort(helperArray, startIdx, pivotIdx - 1, animations);
        doQuickSort(helperArray, pivotIdx + 1, endIdx, animations);
    }
}

function partitionArray(helperArray, startIdx, endIdx, animations) {
    let pivotIdx = randomIntfromInterval(startIdx, endIdx);

    animations.push(["comparison1", pivotIdx, endIdx]);
    animations.push(["swap", pivotIdx, helperArray[endIdx]]);
    animations.push(["swap", endIdx, helperArray[pivotIdx]]);
    animations.push(["comparison2", pivotIdx, endIdx]);
    swapEleInArray(helperArray, pivotIdx, endIdx);

    let lti = startIdx;

    for (let i = startIdx; i < endIdx; ++i) {
        animations.push(["comparison1", i, endIdx]);
        animations.push(["comparison2", i, endIdx]);
        if (helperArray[i] <= helperArray[endIdx]) {
            animations.push(["comparison1", i, lti]);
            animations.push(["swap", i, helperArray[lti]]);
            animations.push(["swap", lti, helperArray[i]]);
            animations.push(["comparison2", i, lti]);
            swapEleInArray(helperArray, i, lti);
            lti++;
        }
    }
    animations.push(["comparison1", lti, endIdx]);
    animations.push(["swap", endIdx, helperArray[lti]]);
    animations.push(["swap", lti, helperArray[endIdx]]);
    animations.push(["comparison2", lti, endIdx]);

    swapEleInArray(helperArray, lti, endIdx);
    return lti;
}

function swapEleInArray(helperArray, firstIdx, secondIdx) {
    let temp = helperArray[firstIdx];
    helperArray[firstIdx] = helperArray[secondIdx];
    helperArray[secondIdx] = temp;
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
