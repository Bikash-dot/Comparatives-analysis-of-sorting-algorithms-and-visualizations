export function getShellSortAnimations(array) {
    let animations = [];
    let helperArray = array.slice();
    shellSort(helperArray, animations);
    const totalMemory = calculateSpaceComplexity(helperArray, animations);
    console.log(`Space complexity: ${totalMemory} MB`);
    localStorage.setItem('totalMemory6', JSON.stringify(totalMemory));
    const totalTime = calculateTotalTime(animations) / 1000;
    console.log(`shell sort takes ${totalTime} second`);
    localStorage.setItem('totalTime6', JSON.stringify(totalTime));
    return animations;
}

function shellSort(helperArray, animations) {
    const length = helperArray.length;
    let gap = Math.floor(length / 2);

    while (gap > 0) {
        for (let i = gap; i < length; i++) {
            let temp = helperArray[i];
            let j = i;

            animations.push(["comparison1", j - gap, j]);
            animations.push(["comparison2", j - gap, j]);

            while (j >= gap && helperArray[j - gap] > temp) {
                animations.push(["overwrite", j, helperArray[j - gap]]);
                helperArray[j] = helperArray[j - gap];
                j -= gap;

                if (j >= gap) {
                    animations.push(["comparison1", j - gap, j]);
                    animations.push(["comparison2", j - gap, j]);
                }
            }

            animations.push(["overwrite", j, temp]);
            helperArray[j] = temp;
        }

        gap = Math.floor(gap / 2);
    }
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