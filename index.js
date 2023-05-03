import { MaxHeap, MinHeap } from "./estruturas-dados/Heap.js";

const heap = new MaxHeap();

heap.heapify([2,4,1,5,6])

// for (let i = 1; i < 10; i++) {
//     heap.insert(i)
// }

console.log('Extract Minimun ', heap)