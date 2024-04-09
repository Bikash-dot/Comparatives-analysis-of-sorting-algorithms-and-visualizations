import React from 'react';
import { getMergeSortAnimations } from '../sortingAlgorithms/merge.js';
import { getBubbleSortAnimations } from '../sortingAlgorithms/bubble.js';
import { getInsertionSortAnimations } from '../sortingAlgorithms/insertion.js';
import { getQuickSortAnimations } from '../sortingAlgorithms/quick.js';
import { getSelectionSortAnimations } from '../sortingAlgorithms/selection.js';
import { getShellSortAnimations } from '../sortingAlgorithms/shell.js';
import './SortingVisualizer.css';

const ANIMATION_SPEED_MS = 5;






const PRIMARY_COLOR = 'turquoise';


const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            NUMBER_OF_ARRAY_BARS: 300, // Default array size
        };
    }
    componentDidMount() {
        this.resetArray();
    }
    resetArray(partiallySorted = false) {
        const array = partiallySorted
            ? this.generatePartiallySortedArray()
            : this.generateRandomArray();

        this.setState({ array });
    }

    generateRandomArray() {
        const { NUMBER_OF_ARRAY_BARS } = this.state;
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntfromInterval(5, 500));
        }
        return array;
    }

    generatePartiallySortedArray() {
        const { NUMBER_OF_ARRAY_BARS } = this.state;
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            if (Math.random() < 0.8) {
                array.push(i);
            } else {
                array.push(randomIntfromInterval(5, 500));
            }
        }
        return array;
    }

    handlePartiallySortedButtonClick = () => {
        this.resetArray(true);
    };
    handleInputChange = (event) => {
        const inputArray = event.target.value
            .split(',')
            .map((num) => parseInt(num, 10))
            .filter((num) => !isNaN(num));

        this.setState({ array: inputArray });
    };


    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }

    }
    bubbleSort() {

        const animations = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange =
                animations[i][0] === "comparison1" ||
                animations[i][0] === "comparison2";
            const arrayBars = document.getElementsByClassName("array-bar1");
            if (isColorChange === true) {
                const color =
                    animations[i][0] === "comparison1"
                        ? SECONDARY_COLOR
                        : PRIMARY_COLOR;
                const [, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                const [, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    insertionSort() {

        const animations = getInsertionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange =
                animations[i][0] === "comparison1" ||
                animations[i][0] === "comparison2";
            const arrayBars = document.getElementsByClassName("array-bar2");
            if (isColorChange === true) {
                const color =
                    animations[i][0] === "comparison1"
                        ? SECONDARY_COLOR
                        : PRIMARY_COLOR;
                const [, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                const [, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }
    quickSort() {

        const animations = getQuickSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange =
                animations[i][0] === "comparison1" ||
                animations[i][0] === "comparison2";
            const arrayBars = document.getElementsByClassName("array-bar4");
            if (isColorChange === true) {
                const color =
                    animations[i][0] === "comparison1"
                        ? SECONDARY_COLOR
                        : PRIMARY_COLOR;
                const [, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                const [, barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }

        }

    }
    selectionSort() {
        const animations = getSelectionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange =
                animations[i][0] === "comparison1" || animations[i][0] === "comparison2";
            const arrayBars = document.getElementsByClassName("array-bar3");
            if (isColorChange) {
                const color =
                    animations[i][0] === "comparison1"
                        ? SECONDARY_COLOR
                        : PRIMARY_COLOR;
                const [, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                const [, barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }
    shellSort() {
        const animations = getShellSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange =
                animations[i][0] === "comparison1" || animations[i][0] === "comparison2";
            const arrayBars = document.getElementsByClassName("array-bar5");
            if (isColorChange) {
                const color =
                    animations[i][0] === "comparison1"
                        ? SECONDARY_COLOR
                        : PRIMARY_COLOR;
                const [, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                const [, barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }





    async runSortingAlgorithms() {
        await Promise.all([this.shellSort(), this.quickSort(), this.selectionSort(), this.insertionSort(), this.bubbleSort(), this.mergeSort()]);

        console.log('Sorting completed!');
        const times = [
            'totalTime',
            'totalTime2',
            'totalTime3',
            'totalTime4',
            'totalTime5',
            'totalTime6'
        ].map(key => {
            const totalTime = localStorage.getItem(key);
            return totalTime ? JSON.parse(totalTime) : null;
        });

        // Find the maximum time taken among all sorting algorithms
        const maxTime = Math.max(...times);

        // Wait for the maximum time
        await new Promise(resolve => setTimeout(resolve, maxTime * 1000));
        // Redirect to another page
        window.location.href = "/view"; // Replace "/your-target-page" with the actual target page URL
    }

    handleButtonClick = () => {
        this.runSortingAlgorithms();
        // window.location.href = "/view";
    };
    handleSliderChange = (event) => {
        this.setState({ NUMBER_OF_ARRAY_BARS: parseInt(event.target.value, 10) });
    };


    render() {
        const { array, NUMBER_OF_ARRAY_BARS } = this.state;
        localStorage.setItem('unsortedArray', JSON.stringify(array));
        return (

            <div className="array-container">
                <a href="/" style={{ display: 'inline-block', position: 'fixed', top: 0, left: 50 }}>
                    <button style={{ marginLeft: -50 }}>Home</button>
                </a>


                <br />
                {array.map((value, idx) => (
                    <div className="array-bar" key={idx}
                        style={{ height: `${value}px` }}>
                    </div>))}
                <br />
                <h4>Merge sort</h4><br />
                {array.map((value, idx) => (
                    <div className="array-bar1" key={idx}
                        style={{ height: `${value}px` }}>
                    </div>))}<br />
                <h4>Bubble sort</h4><br />
                {array.map((value, idx) => (
                    <div className="array-bar2" key={idx}
                        style={{ height: `${value}px` }}>
                    </div>))}<br />
                <h4>Insertion Sort</h4> <br />
                {array.map((value, idx) => (
                    <div className="array-bar3" key={idx}
                        style={{ height: `${value}px` }}>
                    </div>))}<br />
                <h4>Selection Sort</h4> <br />
                {array.map((value, idx) => (
                    <div className="array-bar4" key={idx}
                        style={{ height: `${value}px` }}>
                    </div>))}<br />
                <h4>Quick Sort</h4><br />
                {array.map((value, idx) => (
                    <div className="array-bar5" key={idx}
                        style={{ height: `${value}px` }}>
                    </div>))}<br />
                <h4>Shell Sort</h4> <br />




                <div>
                    <label>
                        Enter Array (comma-separated values):
                        <input type="text" onChange={this.handleInputChange} />
                    </label>
                    <div>
                        <label>
                            NUMBER_OF_ARRAY_BARS:
                            <input
                                type="range"
                                min="10"
                                max="600"
                                value={NUMBER_OF_ARRAY_BARS}
                                onChange={this.handleSliderChange}
                            />
                        </label>
                        <span>{NUMBER_OF_ARRAY_BARS}</span>
                    </div>

                    <button onClick={() => this.resetArray()}>Generate New Array</button>
                    <button onClick={() => this.handlePartiallySortedButtonClick()}>Partially sorted</button>
                </div>

                <button onClick={() => this.mergeSort()}>MergeSort</button>
                <button onClick={() => this.bubbleSort()}>BubbleSort</button>
                <button onClick={() => this.insertionSort()}>InsertionSort</button>
                <button onClick={() => this.selectionSort()}>SelectionSort</button>
                <button onClick={() => this.quickSort()}>QuickSort</button>
                <button onClick={() => this.shellSort()}>ShellSort</button>
                <button onClick={() => this.handleButtonClick()}>Sort</button>


            </div>



        );
    }


}
export function randomIntfromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}