export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    const totalMemory = calculateMemoryConsumption(array, auxiliaryArray, animations);
    console.log(`Memory complexity: ${totalMemory} MB`);
    localStorage.setItem('totalMemory2', JSON.stringify(totalMemory));
    const totalTime = calculateTotalTime(animations) / 1000;
    console.log(`merge sort takes ${totalTime} second`);
    localStorage.setItem('totalTime2', JSON.stringify(totalTime));
    return animations;
}

function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {

        animations.push([i, j]);

        animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIdx) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}
function calculateTotalTime(animations) {
    const timePerOperation = 5;

    let totalTime = 0;
    for (const operation of animations) {
        if (operation.length === 2) {

            totalTime += timePerOperation;
        } else if (operation.length === 3) {

            totalTime += timePerOperation;
        }
    }

    return totalTime;
}
function calculateMemoryConsumption(mainArray, auxiliaryArray, animations) {

    const mainArrayMemory = mainArray.length * getElementSize(mainArray[0]);
    const auxiliaryArrayMemory = auxiliaryArray.length * getElementSize(auxiliaryArray[0]);

    const animationMemory = animations.length * getElementSize(animations[0]);


    const totalMemory = (mainArrayMemory + auxiliaryArrayMemory + animationMemory) / (1024 * 1024);
    return totalMemory;
}

function getElementSize(element) {

    return 8;
}

