import React, { memo } from "react";
import { getBubbleSortAnimations } from '../sortingAlgorithms/bubble.js';
import './SortingVisualizer.css';


function View() {

    const unstoredArray = localStorage.getItem('unsortedArray');
    const array1 = unstoredArray ? JSON.parse(unstoredArray) : null;
    const array = [...array1].sort((a, b) => a - b);
    const totalTime = localStorage.getItem('totalTime');
    const time = totalTime ? JSON.parse(totalTime) : null;
    const totalTime2 = localStorage.getItem('totalTime2');
    const time2 = totalTime ? JSON.parse(totalTime2) : null;
    const totalTime3 = localStorage.getItem('totalTime3');
    const time3 = totalTime ? JSON.parse(totalTime3) : null;
    const totalTime4 = localStorage.getItem('totalTime4');
    const time4 = totalTime ? JSON.parse(totalTime4) : null;
    const totalTime5 = localStorage.getItem('totalTime5');
    const time5 = totalTime ? JSON.parse(totalTime5) : null;
    const totalTime6 = localStorage.getItem('totalTime6');
    const time6 = totalTime ? JSON.parse(totalTime6) : null;

    const totalMemory = localStorage.getItem('totalMemory');
    const memory = totalTime ? JSON.parse(totalMemory) : null;
    const totalMemory2 = localStorage.getItem('totalMemory2');
    const memory2 = totalTime ? JSON.parse(totalMemory2) : null;
    const totalMemory3 = localStorage.getItem('totalMemory3');
    const memory3 = totalTime ? JSON.parse(totalMemory3) : null;
    const totalMemory4 = localStorage.getItem('totalMemory4');
    const memory4 = totalTime ? JSON.parse(totalMemory4) : null;
    const totalMemory5 = localStorage.getItem('totalMemory5');
    const memory5 = totalTime ? JSON.parse(totalMemory5) : null;
    const totalMemory6 = localStorage.getItem('totalMemory6');
    const memory6 = totalTime ? JSON.parse(totalMemory6) : null;

    const handleDownloadClick = () => {
        const data = {
            unstoredArray: array,
            Sorted_array: array1,
            Bubble_Time: time,
            Merge_Time: time2,
            Inserton_Time: time3,
            Quick_Time: time4,
            Selection_Time: time5,
            Shell_Time: time6,
            Bubble_memory: memory,
            Merge_memory: memory2,
            Insertion_memory: memory3,
            Quick_memory: memory4,
            Selection_memory: memory5,
            Shell_memory: memory6
        };


        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });

        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'sorting_data.json';
        document.body.appendChild(a);


        a.click();


        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };



    if (!array) {
        return (
            <div>
                <h1>Array Not Available</h1>
            </div>
        );
    }

    const arrayString = array.join(', ');
    const arrayString2 = array1.join(', ');
    return (
        <div className="container" >
            <div className="header">
                <h1>Sorted and Unsorted Arrays</h1>
                <a href="/visualization" style={{ display: 'inline-block', position: 'fixed', top: 0, left: 50 }}>
                    <button style={{ marginLeft: -50 }}>Visualization</button>
                </a>
            </div>
            <div className="content">
                <div className="array-section">
                    <h4>Bubble Sort</h4>
                    <div className="array">
                        <h6>Unsorted Array</h6>
                        {arrayString2}
                        <h6>Sorted Array</h6>
                        {arrayString}
                    </div>
                </div>
                <div className="info-section">
                    <h4>Performance Metrics</h4>
                    <p>Time complexity: {time} Sec</p>
                    <p>Space complexity: {memory} MB</p>
                </div>
            </div><br />
            <div className="content">
                <div className="array-section">
                    <h4>Merga Sort</h4>
                    <div className="array">
                        <h6>Unsorted Array</h6>
                        {arrayString2}
                        <h6>Sorted Array</h6>
                        {arrayString}
                    </div>
                </div>
                <div className="info-section">
                    <h4>Performance Metrics</h4>
                    <p>Time complexity: {time2} Sec</p>
                    <p>Space complexity: {memory2} MB</p>
                </div>
            </div><br />
            <div className="content">
                <div className="array-section">
                    <h4>Insertion Sort</h4>
                    <div className="array">
                        <h6>Unsorted Array</h6>
                        {arrayString2}
                        <h6>Sorted Array</h6>
                        {arrayString}
                    </div>
                </div>
                <div className="info-section">
                    <h4>Performance Metrics</h4>
                    <p>Time complexity: {time3} Sec</p>
                    <p>Space complexity: {memory3} MB</p>
                </div>
            </div><br />
            <div className="content">
                <div className="array-section">
                    <h4>Quick Sort</h4>
                    <div className="array">
                        <h6>Unsorted Array</h6>
                        {arrayString2}
                        <h6>Sorted Array</h6>
                        {arrayString}
                    </div>
                </div>
                <div className="info-section">
                    <h4>Performance Metrics</h4>
                    <p>Time complexity: {time4} Sec</p>
                    <p>Space complexity: {memory4} MB</p>
                </div>
            </div><br />
            <div className="content">
                <div className="array-section">
                    <h4>Selection Sort</h4>
                    <div className="array">
                        <h6>Unsorted Array</h6>
                        {arrayString2}
                        <h6>Sorted Array</h6>
                        {arrayString}
                    </div>
                </div>
                <div className="info-section">
                    <h4>Performance Metrics</h4>
                    <p>Time complexity: {time5} Sec</p>
                    <p>Space complexity: {memory5} MB</p>
                </div>
            </div><br />
            <div className="content">
                <div className="array-section">
                    <h4>Shell Sort</h4>
                    <div className="array">
                        <h6>Unsorted Array</h6>
                        {arrayString2}
                        <h6>Sorted Array</h6>
                        {arrayString}
                    </div>
                </div>
                <div className="info-section">
                    <h4>Performance Metrics</h4>
                    <p>Time complexity: {time6} Sec</p>
                    <p>Space complexity: {memory6} MB</p>
                </div>
            </div>
            <button onClick={handleDownloadClick}>Download Data</button>

        </div>
    );
}


export default View