

import React from 'react';
import './algo.css'
function Algo() {
    return (
        <div>
            <header>
                <h1>Algorithms</h1>
            </header>

            <main>
                <h5>Note: <em>These are concise versions of the sorting algorithms</em></h5>

                <section>
                    <details>
                        <summary><h2>Bubble Sort</h2></summary>
                        <details>
                            <summary>Algorithm</summary>
                            <pre>
                                for i from 0 to n-1:<br />
                                for j from 0 to n-i-1:<br />
                                if arr[j] `{'>'}`arr[j+1]:<br />
                                swap(arr[j], arr[j+1])<br />
                            </pre>
                        </details>
                        <details>
                            <summary>C programming</summary>
                            <pre><code>
                                {`#include<stdio.h>;

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(&arr[j], &arr[j + 1]);
            }
        }
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);

    bubbleSort(arr, n);

    printf("Sorted array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}`}
                            </code> </pre>
                        </details>
                        <details>
                            <summary>C++ programming</summary>
                            <pre><code>
                                {`#include<iostream>;

void swap(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);

    bubbleSort(arr, n);

    std::cout << "Sorted array: ";
    for (int i = 0; i < n; i++) {
        std::cout << arr[i] << " ";
    }

    return 0;
}`}
                            </code>  </pre>
                        </details>
                    </details>
                </section>

                <section>
                    <details>
                        <summary><h2>Selection Sort</h2></summary>
                        <details>
                            <summary>Algorithm</summary>
                            <pre>
                                for i from 0 to n-1:<br />
                                min_index = i<br />
                                for j from i+1 to n:<br />
                                if arr[j] `{'<'}`arr[min_index]:<br />
                                min_index = j<br />
                                swap(arr[i], arr[min_index])<br />
                            </pre>
                        </details>
                        <details>
                            <summary>C programming</summary>
                            <pre><code>
                                {`#include <stdio.h>

void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int min_index = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        // Swap arr[i] and arr[min_index]
        int temp = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = temp;
    }
}

int main() {
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr) / sizeof(arr[0]);

    selectionSort(arr, n);

    printf("Sorted array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}`}
                            </code></pre>
                        </details>
                        <details>
                            <summary>C++ programming</summary>
                            <pre><code>
                                {` #include<iostream>;
                        using namespace std;

                        void selectionSort(int arr[], int n) {
                            for (int i = 0; i < n - 1; i++) {
                                int min_index = i;
                                for (int j = i + 1; j < n; j++) {
                                    if (arr[j] < arr[min_index]) {
                                        min_index = j;
                                    }
                                }
                                // Swap arr[i] and arr[min_index]
                                swap(arr[i], arr[min_index]);
                            }
                        }

                        int main() {
                            int arr[] = {64, 25, 12, 22, 11};
                            int n = sizeof(arr) / sizeof(arr[0]);

                            selectionSort(arr, n);

                            cout << "Sorted array: ";
                            for (int i = 0; i < n; i++) {
                                cout << arr[i] << " ";
                            }
                            return 0;
                        }`}
                            </code></pre>
                        </details>
                    </details>
                </section>

                <section>
                    <details>
                        <summary><h2>Insertion Sort</h2></summary>
                        <details>
                            <summary>Algorithm</summary>
                            <pre>
                                for i from 1 to n-1:<br />
                                key = arr[i]<br />
                                j = i - 1<br />
                                while j `{'>'}`= 0 and arr[j] `{'>'}` key:<br />
                                arr[j+1] = arr[j]<br />
                                j = j - 1<br />
                                arr[j+1] = key<br />
                            </pre>
                        </details>
                        <details>
                            <summary>C programming</summary>
                            <pre><code>
                                {`#include <stdio.h>

void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

int main() {
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr) / sizeof(arr[0]);

    insertionSort(arr, n);

    printf("Sorted array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}`}
                            </code></pre>
                        </details>
                        <details>
                            <summary>C++ programming</summary>
                            <pre><code>
                                {`#include<iostream>
                        using namespace std;

                        void insertionSort(int arr[], int n) {
                            for (int i = 1; i < n; i++) {
                                int key = arr[i];
                                int j = i - 1;
                                while (j >= 0 && arr[j] > key) {
                                    arr[j + 1] = arr[j];
                                    j = j - 1;
                                }
                                arr[j + 1] = key;
                            }
                        }

                        int main() {
                            int arr[] = {64, 25, 12, 22, 11};
                            int n = sizeof(arr) / sizeof(arr[0]);

                            insertionSort(arr, n);

                            cout << "Sorted array: ";
                            for (int i = 0; i < n; i++) {
                                cout << arr[i] << " ";
                            }
                            return 0;
                        }`}
                            </code></pre>
                        </details>
                    </details>
                </section>

                <section>
                    <details>
                        <summary><h2>Merge Sort</h2></summary>
                        <details>
                            <summary>Algorithm</summary>
                            <pre>
                                merge_sort(arr):<br />
                                if length of arr `{'>'}` 1:<br />
                                mid = length of arr / 2<br />
                                left = merge_sort(first half of arr)<br />
                                right = merge_sort(second half of arr)<br />
                                merge(left, right)<br />

                                merge(left, right):<br />
                                result = empty array<br />
                                while left is not empty and right is not empty:<br />
                                append smaller of left[0] and right[0] to result<br />
                                append remaining elements of left and right to result<br />
                            </pre>
                        </details>
                        <details>
                            <summary>C programming</summary>
                            <pre><code>
                                {` #include<stdio.h>;
                        #include&lt;stdlib.h&gt;

                        void merge(int arr[], int l, int m, int r) {
                            int i, j, k;
                            int n1 = m - l + 1;
                            int n2 = r - m;

                            int L[n1], R[n2];

                            for (i = 0; i < n1; i++)
                                L[i] = arr[l + i];
                            for (j = 0; j < n2; j++)
                                R[j] = arr[m + 1 + j];

                            i = 0;
                            j = 0;
                            k = l;
                            while (i < n1 && j < n2) {
                                if (L[i] <= R[j]) {
                                    arr[k] = L[i];
                                    i++;
                                } else {
                                    arr[k] = R[j];
                                    j++;
                                }
                                k++;
                            }

                            while (i < n1) {
                                arr[k] = L[i];
                                i++;
                                k++;
                            }

                            while (j < n2) {
                                arr[k] = R[j];
                                j++;
                                k++;
                            }
                        }

                        void mergeSort(int arr[], int l, int r) {
                            if (l < r) {
                                int m = l + (r - l) / 2;

                                mergeSort(arr, l, m);
                                mergeSort(arr, m + 1, r);

                                merge(arr, l, m, r);
                            }
                        }

                        int main() {
                            int arr[] = {64, 25, 12, 22, 11};
                            int n = sizeof(arr) / sizeof(arr[0]);

                            mergeSort(arr, 0, n - 1);

                            printf("Sorted array: ");
                            for (int i = 0; i < n; i++) {
                                printf("%d ", arr[i]);
                            }
                            return 0;
                        }`}
                            </code></pre>
                        </details>
                        <details>
                            <summary>C++ programming</summary>
                            <pre><code>
                                {`#include #include<iostream>;
                        using namespace std;

                        void merge(int arr[], int l, int m, int r) {
                            int i, j, k;
                            int n1 = m - l + 1;
                            int n2 = r - m;

                            int L[n1], R[n2];

                            for (i = 0; i < n1; i++)
                                L[i] = arr[l + i];
                            for (j = 0; j < n2; j++)
                                R[j] = arr[m + 1 + j];

                            i = 0;
                            j = 0;
                            k = l;
                            while (i < n1 && j < n2) {
                                if (L[i] <= R[j]) {
                                    arr[k] = L[i];
                                    i++;
                                } else {
                                    arr[k] = R[j];
                                    j++;
                                }
                                k++;
                            }

                            while (i < n1) {
                                arr[k] = L[i];
                                i++;
                                k++;
                            }

                            while (j < n2) {
                                arr[k] = R[j];
                                j++;
                                k++;
                            }
                        }

                        void mergeSort(int arr[], int l, int r) {
                            if (l < r) {
                                int m = l + (r - l) / 2;

                                mergeSort(arr, l, m);
                                mergeSort(arr, m + 1, r);

                                merge(arr, l, m, r);
                            }
                        }

                        int main() {
                            int arr[] = {64, 25, 12, 22, 11};
                            int n = sizeof(arr) / sizeof(arr[0]);

                            mergeSort(arr, 0, n - 1);

                            cout << "Sorted array: ";
                            for (int i = 0; i < n; i++) {
                                cout << arr[i] << " ";
                            }
                            return 0;
                        }`}
                            </code></pre>
                        </details>
                    </details>
                </section>

                <section>
                    <details>
                        <summary><h2>Quick Sort</h2></summary>
                        <details>
                            <summary>Algorithm</summary>
                            <pre>
                                quick_sort(arr, low, high):<br />
                                if low `{'<'}` high:<br />
                                pivot_index = partition(arr, low, high)<br />
                                quick_sort(arr, low, pivot_index - 1)<br />
                                quick_sort(arr, pivot_index + 1, high)<br />

                                partition(arr, low, high):<br />
                                pivot = arr[high]<br />
                                i = low - 1<br />
                                for j from low to high - 1:<br />
                                if arr[j] `{'<'}`= pivot:<br />
                                i = i + 1<br />
                                swap(arr[i], arr[j])<br />
                                swap(arr[i + 1], arr[high])<br />
                                return i + 1<br />
                            </pre>
                        </details>
                        <details>
                            <summary>C programming</summary>
                            <pre><code>
                                {`#include <stdio.h>

void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr) / sizeof(arr[0]);

    quickSort(arr, 0, n - 1);

    printf("Sorted array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}`}
                            </code></pre>
                        </details>
                        <details>
                            <summary>C++ programming</summary>
                            <pre><code>
                                {`#include<iostream>;
                        using namespace std;

                        void swap(int& a, int& b) {
                            int temp = a;
                            a = b;
                            b = temp;
                        }

                        int partition(int arr[], int low, int high) {
                            int pivot = arr[high];
                            int i = low - 1;
                            for (int j = low; j <= high - 1; j++) {
                                if (arr[j] < pivot) {
                                    i++;
                                    swap(arr[i], arr[j]);
                                }
                            }
                            swap(arr[i + 1], arr[high]);
                            return i + 1;
                        }

                        void quickSort(int arr[], int low, int high) {
                            if (low < high) {
                                int pi = partition(arr, low, high);
                                quickSort(arr, low, pi - 1);
                                quickSort(arr, pi + 1, high);
                            }
                        }

                        int main() {
                            int arr[] = {64, 25, 12, 22, 11};
                            int n = sizeof(arr) / sizeof(arr[0]);

                            quickSort(arr, 0, n - 1);

                            cout << "Sorted array: ";
                            for (int i = 0; i < n; i++) {
                                cout << arr[i] << " ";
                            }
                            return 0;
                        }`}
                            </code></pre>
                        </details>
                    </details>
                </section>

                <section>
                    <details>
                        <summary><h2>Shell Sort</h2></summary>
                        <details>
                            <summary>Algorithm</summary>
                            <pre>
                                shell_sort(arr):<br />
                                n = length of arr<br />
                                gap = n / 2<br />
                                while gap `{'>'}` 0:<br />
                                for i from gap to n-1:<br />
                                temp = arr[i]<br />
                                j = i<br />
                                while j`{'>'}`= gap and arr[j - gap] `{'>'}` temp:<br />
                                arr[j] = arr[j - gap]<br />
                                j = j - gap<br />
                                arr[j] = temp<br />
                                gap = gap / 2<br />
                            </pre>
                        </details>
                        <details>
                            <summary>C programming</summary>
                            <pre><code>
                                {`#include<stdio.h>;
                        void shellSort(int arr[], int n) {
                            for (int gap = n / 2; gap > 0; gap /= 2) {
                                for (int i = gap; i < n; i++) {
                                    int temp = arr[i];
                                    int j;
                                    for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                                        arr[j] = arr[j - gap];
                                    }
                                    arr[j] = temp;
                                }
                            }
                        }

                        int main() {
                            int arr[] = {64, 25, 12, 22, 11};
                            int n = sizeof(arr) / sizeof(arr[0]);

                            shellSort(arr, n);

                            printf("Sorted array: ");
                            for (int i = 0; i < n; i++) {
                                printf("%d ", arr[i]);
                            }
                            return 0;
                        }`}
                            </code></pre>
                        </details>
                        <details>
                            <summary>C++ programming</summary>
                            <pre><code>
                                {` #include<iostream>;
                        using namespace std;

                        void shellSort(int arr[], int n) {
                            for (int gap = n / 2; gap > 0; gap /= 2) {
                                for (int i = gap; i < n; i++) {
                                    int temp = arr[i];
                                    int j;
                                    for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                                        arr[j] = arr[j - gap];
                                    }
                                    arr[j] = temp;
                                }
                            }
                        }

                        int main() {
                            int arr[] = {64, 25, 12, 22, 11};
                            int n = sizeof(arr) / sizeof(arr[0]);

                            shellSort(arr, n);

                            cout << "Sorted array: ";
                            for (int i = 0; i < n; i++) {
                                cout << arr[i] << " ";
                            }
                            return 0;
                        }`}
                            </code></pre>
                        </details>
                    </details>
                </section>

                <section>
                    <details>
                        <summary><h2>Heap Sort</h2></summary>
                        <details>
                            <summary>Algorithm</summary>
                            <pre>
                                heap_sort(arr):<br />
                                build_max_heap(arr)<br />
                                for i from n-1 to 0:<br />
                                swap(arr[0], arr[i])<br />
                                max_heapify(arr, 0, i)<br />

                                build_max_heap(arr):<br />
                                n = length of arr<br />
                                for i from n/2 - 1 to 0:<br />
                                max_heapify(arr, i, n)<br />

                                max_heapify(arr, i, n):<br />
                                largest = i<br />
                                left = 2*i + 1<br />
                                right = 2*i + 2<br />
                                if left `{'<'}`n and arr[left] `{'>'}` arr[largest]:<br />
                                largest = left<br />
                                if right `{'<'}` n and arr[right] `{'>'}`arr[largest]:<br />
                                largest = right<br />
                                if largest != i:<br />
                                swap(arr[i], arr[largest])<br />
                                max_heapify(arr, largest, n)<br />
                            </pre>
                        </details>
                        <details>
                            <summary>C programming</summary>
                            <pre><code>
                                {`#include <stdio.h>

void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void maxHeapify(int arr[], int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest])
        largest = left;

    if (right < n && arr[right] > arr[largest])
        largest = right;

    if (largest != i) {
        swap(&arr[i], &arr[largest]);
        maxHeapify(arr, n, largest);
    }
}

void buildMaxHeap(int arr[], int n) {
    for (int i = n / 2 - 1; i {'}'}= 0; i--)
        maxHeapify(arr, n, i);
}

void heapSort(int arr[], int n) {
    buildMaxHeap(arr, n);

    for (int i = n - 1; i > 0; i--) {
        swap(&arr[0], &arr[i]);
        maxHeapify(arr, i, 0);
    }
}

int main() {
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr) / sizeof(arr[0]);

    heapSort(arr, n);

    printf("Sorted array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}`}
                            </code></pre>
                        </details>
                        <details>
                            <summary>C++ programming</summary>
                            <pre><code>
                                {`#include <iostream>;
                        using namespace std;

                        void swap(int& a, int& b) {
                            int temp = a;
                            a = b;
                            b = temp;
                        }

                        void maxHeapify(int arr[], int n, int i) {
                            int largest = i;
                            int left = 2 * i + 1;
                            int right = 2 * i + 2;

                            if (left < n && arr[left] > arr[largest])
                                largest = left;

                            if (right < n && arr[right] > arr[largest])
                                largest = right;

                            if (largest != i) {
                                swap(arr[i], arr[largest]);
                                maxHeapify(arr, n, largest);
                            }
                        }

                        void buildMaxHeap(int arr[], int n) {
                            for (int i = n / 2 - 1; i >= 0; i--)
                                maxHeapify(arr, n, i);
                        }

                        void heapSort(int arr[], int n) {
                            buildMaxHeap(arr, n);

                            for (int i = n - 1; i > 0; i--) {
                                swap(arr[0], arr[i]);
                                maxHeapify(arr, i, 0);
                            }
                        }

                        int main() {
                            int arr[] = {64, 25, 12, 22, 11};
                            int n = sizeof(arr) / sizeof(arr[0]);

                            heapSort(arr, n);

                            cout << "Sorted array: ";
                            for (int i = 0; i < n; i++) {
                                cout << arr[i] << " ";
                            }
                            return 0;
                        }`}
                            </code></pre>
                        </details>
                    </details>
                </section>
            </main>

        </div>
    );
}

export default Algo;
