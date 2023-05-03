import { Compare, defaultCompare, swap } from '../utils/util.js';

export class MinHeap {
    constructor(compareFn = defaultCompare){
        this.compareFn = compareFn;
        this.heap = [];
    }
    getLeftIndex(index) {
        return 2 * index + 1;
    }
    getRightIndex(index){
        return 2 * index + 2;
    }
    getParentIndex(index){
        if(index === 0){
            return undefined;
        }
        return Math.floor((index - 1) / 2); // como estamos trabalhando com arrays procuramos o meio do array
    }
    insert(value) {
        if (value != null){
            this.heap.push(value);
            this.siftUp(this.heap.length - 1); // chama a função que faz a troca de valores deixando na ordem
            return true;
        }
        return false;
    }
    siftUp(index){
        let parent = this.getParentIndex(index);
        while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIGGER_THAN){
            swap(this.heap, parent, index); // faz a troca de valores
            index = parent;
            parent = this.getParentIndex(index);
        }
    }
    size() {
        return this.heap.length;
    }
    isEmpty() {
        return this.size() === 0;
    }
    findMinimun() {
        return this.isEmpty() ? undefined : this.heap[0]; // no heap mínimo o valor mínimo sempre estará localizado no primeiro índice do array.
    }
    extract() {
        if (this.isEmpty()){
            return undefined;
        }
        if (this.size() === 1){
            return this.heap.shift(); // se tiver apenas um elemento remove e devolve
        }
        const removedValue = this.heap.shift(); // guarda o primeiro elemento na variável
        this.siftDown(0); // faz a função de siftDown
        return removedValue;
    }
    siftDown(index) { // troca o elemento com seu filho menor ou maior
        let element = index;
        const left = this.getLeftIndex(index);
        const right = this.getRightIndex(index);
        const size = this.size();
        if (left < size && this.compareFn(this.heap[element], this.heap[left]) === Compare.BIGGER_THAN){
            element = left;
        }
        if (right < size && this.compareFn(this.heap[element], this.heap[right]) === Compare.BIGGER_THAN){
            element = right;
        }
        if (index !== element){
            swap(this.heap, index, element);
            this.siftDown(element);
        }
    }
}