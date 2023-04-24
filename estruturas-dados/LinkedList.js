import { defaultEquals } from "../utils/util.js";
import { Node } from "./models/linked-list-models.js";

export default class LinkedList {
    constructor(equalsFn = defaultEquals){
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    push(element){
        const node = new Node(element);
        let current;
        // primeiro cenário: a lista está vazia
        if(this.head == null){
            this.head = node;
        } else { // segundo cenário: a lista tem elementos
            current = this.head;
            while (current.next != null) { // obtém o último item
                current = current.next;
            }
            // atribui o novo elemento a next para criar a ligação
            current.next = node;
        }
        this.count++;
    }
}

