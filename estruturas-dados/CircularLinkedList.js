import LinkedList from './LinkedList.js';
import { defaultEquals } from '../utils/util.js';
import { Node } from "./models/linked-list-models.js";

/**
 * Lista ligada Circular
 */

export default class CircularLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals){
        super(equalsFn)
    }

    push(element){ // inserindo elemento na ordem
        const node = new Node(element);
        let current;
        if(this.head == null){
            this.head = node; 
        } else {
            current = this.getElementAt(this.size());
            current.next = node;
        }

        // setando o node.next ao head para ter uma lista circular
        node.next = this.head;
        this.count++;
    }

    insert(element, index) {
        if (index >=0 && index <= this.count){
            const node = new Node(element);
            let current = this.head; // atribuindo head a variável current
            if(index === 0){ // inserindo a primeira posição com a lista vazia
                if(this.head == null){
                    this.head = node;
                    node.next = this.head; // neste caso o último elemento apontará para si mesmo, pois ele também é o head
                } else { // inserindo na primeira posição e a lista já tem elementos
                    node.next = current; 
                    current = this.getElementAt(this.size()); // obtendo a referência do último elemento
                    this.head = node; // head recebe o novo nó
                    current.next = this.head; // o último elemento atualizado aponta para novo nó que agora é head
                }
            } else { // mesma lógica da linkedList
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    removeAt(index) {
        if (index >= 0 && index <= this.count){
            let current = this.head;
            if (index === 0){
                if (this.size() === 1){
                    this.head = undefined;
                } else {
                    const removed = this.head;
                    current = this.getElementAt(this.size()); // obtendo a referência do último nó
                    this.head = this.head.next; 
                    current.next = this.head; // fazemos referência entre o último elemento e o novo head;
                    current = removed;
                }
            } else {
                // não há necessidade de atualizar o último elemento da lista circular
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }

}