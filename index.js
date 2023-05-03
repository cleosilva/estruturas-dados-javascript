import { MinHeap } from "./estruturas-dados/MinHeap.js";

const heap = new MinHeap();

for (let i = 1; i < 10; i++) {
    heap.insert(i)
}

console.log('Extract Minimun ', heap.extract())