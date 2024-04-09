import React from 'react';
import './ui.css'
import bubbleSort from './photo/bubble.jpg';
import selectionSort from './photo/selection.jpg';
import insertionSort from './photo/insertion.jpg';
import mergeSort from './photo/merge.jpg';
import quickSort from './photo/quick.jpg';
import shellSort from './photo/shell.jpg';

function Flow() {
    return (
        <div>
            <nav>
                <a href=""></a>
                <a class="page1" href="/">Home</a>
                <a href="/algo">Algorithm</a>

                <a href="/visualization">Visualization</a>

                <a href="/links">Useful links</a>




            </nav>
            <header><h1>Sorting algorithms flowchart</h1></header>
            <section>
                <details><summary>Bubble sort</summary>
                    <img src={bubbleSort} alt="Bubble sort" />
                    <a href={bubbleSort} class="download" download="bubble.jpg"> <button>Download</button></a>

                </details>

            </section>
            <section>
                <details><summary>Selection sort</summary>
                    <img src={selectionSort} alt="selection sort" />
                    <a href={selectionSort} class="download" download="selection.jpg">
                        <button>Download</button></a>
                </details>
            </section>
            <section><details><summary>Insertion Sort</summary>
                <img src={insertionSort} alt="Insertion Sort" />
                <a href={insertionSort} class="download" download="insertion.jpg">
                    <button>Download</button></a>
            </details></section>
            <section><details><summary>Merge sort</summary>
                <img src={mergeSort} alt="Merge sort" />
                <a href={mergeSort} class="download" download="merge.jpg"> <button>Download</button></a>
            </details></section>
            <section><details><summary>Quick sort</summary><img src={quickSort} alt="Quick Sort" />
                <a href={quickSort} class="download" download="quick.jpg"> <button>Download</button></a>

            </details></section>
            <section><details><summary>Shell Sort</summary><img src={shellSort} alt="Shell SOrt" />
                <a href={shellSort} class="download" download="shell.jpg">
                    <button>Download</button></a>
            </details></section>


        </div>
    );
}
export default Flow