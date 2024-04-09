// App.css - Move your CSS styles here

// In your React component file (e.g., App.js)

import React from 'react';
import './ui.css'// Import your CSS styles

function New() {
    return (
        <div>
            <nav>
                <a href="/algo">Algorithm</a>
                <a href="/flow">Flowchart</a>
                <a href="/links">Useful links</a>
                <a href="/visualization">Visualization</a>

            </nav>
            <main style={{ textAlign: 'left' }} >
                <h1 >Introduction</h1>
                <p>Sorting algorithms play a vital role in the realm of computer science and programming. They are essentially
                    a set of clear and methodical instructions designed to meticulously arrange elements within a collection,
                    be it an array or a list. The primary objective of these algorithms is to impose order, either in ascending
                    or descending fashion, based on a defined criterion – often numeric or lexicographic.</p><br />

                <h2>Most commonly used sorting algorithm</h2><br />

                <h3>Bubble sort</h3>
                <p>Bubble Sort is a simple sorting algorithm that iterates through a collection, compares adjacent elements,
                    and swaps them if they are in the wrong order. This process is repeated until the entire collection is
                    sorted. While easy to understand, Bubble Sort is less efficient for large datasets, having a time
                    complexity of O(n^2). It's often used for educational purposes rather than in practical applications.</p><br />
                <h4>pseudo code for Bubble sort</h4>
                <code>for each i from 0 to n-1:<br />
                    for each j from 0 to n-i-1:<br />
                    if collection[j] {'>'} collection[j+1]:<br />
                    swap(collection[j], collection[j+1])<br />
                </code><br />
                <h3>Merge Sort</h3>
                <p>Merge Sort is a highly efficient and stable sorting algorithm. It follows a divide-and-conquer approach,
                    dividing the unsorted collection into n sub-lists, each with one element. These sub-lists are then
                    recursively merged to produce new sorted sub-lists until only one remains.

                    Known for its effectiveness with large datasets, Merge Sort's time complexity is O(n log n). Its stability
                    and ability to handle diverse data make it a popular choice in various applications, especially where
                    stable sorting and consistent performance are crucial.</p><br />
                <h4>pseudo code for Merge Sort</h4>
                <code>
                    merge_sort(collection):<br />
                    if length of collection{'<'}= 1:<br />
                    return collection<br />

                    mid = length of collection / 2<br />
                    left = merge_sort(first half of collection)<br />
                    right = merge_sort(second half of collection)<br />

                    return merge(left, right)<br />

                    merge(left, right):<br />
                    result = empty array<br />
                    while left is not empty and right is not empty:<br />
                    append smallest of left[0] and right[0] to result<br />

                    append remaining elements of left to result<br />
                    append remaining elements of right to result<br />

                    return result<br />
                </code><br />

                <h3>Selection Sort</h3>
                <p>Selection Sort is a straightforward and in-place sorting algorithm. It divides the input into a sorted and an
                    unsorted region. In each iteration, it finds the minimum element from the unsorted region and swaps it with
                    the first element of the unsorted region.</p><br />
                <h4>pseudo code for Selection Sort</h4>
                <code>selection_sort(collection):<br />
                    for each i from 0 to length of collection - 1:<br />
                    min_index = i<br />
                    for each j from i+1 to length of collection:<br />
                    if collection[j]{'<'} collection[min_index]:<br />
                    min_index = j<br />

                    swap(collection[i], collection[min_index])<br />
                </code><br />

                <h3>Insertion Sort</h3>
                <p>Insertion Sort is a simple and efficient sorting algorithm that builds the final sorted array one element
                    at a time. It is particularly useful for small datasets or nearly sorted data.
                </p><br />
                <h4>pseudo code for Insertion Sort</h4>
                <code>
                    insertion_sort(collection):<br />
                    for each i from 1 to length of collection:<br />
                    key = collection[i]<br />
                    j = i - 1
                    <br />
                    while j {'>'}= 0 and collection[j] {'>'} key:<br />
                    collection[j + 1] = collection[j]<br />
                    j = j - 1<br />

                    collection[j + 1] = key<br />
                </code><br />
                <h3>Quick Sort</h3>
                <p>Quick Sort is an efficient, in-place, and comparison-based sorting algorithm. It works by selecting a
                    'pivot' element from the array and partitioning the other elements into two sub-arrays according to
                    whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.</p><br />
                <h4>pseudo code for Quick Sort</h4>
                <code>
                    quick_sort(collection, low, high):<br />
                    if low {'<'} high: <br />
                    pivot_index = partition(collection, low, high)<br />
                    quick_sort(collection, low, pivot_index - 1)<br />
                    quick_sort(collection, pivot_index + 1, high)<br />

                    partition(collection, low, high):<br />
                    pivot = collection[high]<br />
                    i = low - 1<br />

                    for j from low to high - 1:<br />
                    if collection[j]{'<'}= pivot:<br />
                    i = i + 1<br />
                    swap(collection[i], collection[j])<br />

                    swap(collection[i + 1], collection[high])<br />
                    return i + 1<br />
                </code><br />
                <h3>Shell Sort</h3>
                <p>Shell Sort is an in-place comparison sorting algorithm. It starts by sorting pairs of elements far apart
                    from each other, then progressively reduces the gap between elements to be compared. The final pass
                    involves comparing adjacent elements, resulting in a sorted array.</p><br />
                <h4>Pseudo code for Shell Sort</h4>
                <code>
                    shell_sort(collection):<br />
                    n = length of collection<br />
                    gap = n / 2<br />

                    while gap{'>'} 0:<br />
                    for i from gap to n - 1:<br />
                    temp = collection[i]<br />
                    j = i<br />

                    while j {'>'}= gap and collection[j - gap] {'>'} temp:<br />
                    collection[j] = collection[j - gap]<br />
                    j = j - gap<br />

                    collection[j] = temp<br />

                    gap = gap / 2<br />
                </code>
            </main>
        </div>
    );
}

export default New;
