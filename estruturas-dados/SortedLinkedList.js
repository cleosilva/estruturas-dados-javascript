import LinkedList from './LinkedList.js';
import { defaultCompare, defaultEquals, Compare } from '../utils/util.js';

/**
 * Lista Ligada Ordenada
 */

export default class SortedLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
        super(equalsFn);
        this.compareFn = compareFn;
    }

    push(element) {
        if (this.isEmpty()){
            super.push(element);
        }
        const index = this.getIndexNextSortedElement(element);
        super.insert(element, index);
    }

    insert(element, index = 0) { // como não a inserção em qualquer índice passamos um valor default ao index
        if (this.isEmpty()) { // se a lista estiver vazia
            return super.insert(element, 0); // chame o método insert de LinkedList passando zero como index
        }

        const pos = this.getIndexNextSortedElement(element);
        return super.insert(element, pos);
    }

    getIndexNextSortedElement(element) {
        let current = this.head;
        let i = 0;
        for(; i < this.size() && current; i++){
            const comp = this.compareFn(element, current.element);
            if (comp === Compare.LESS_THAN) {
                return i;
            }
            current = current.next;
        }
        return i;
    }

    toString() {
        return super.toString();
    }
}