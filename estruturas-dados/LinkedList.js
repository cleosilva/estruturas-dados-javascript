import { defaultEquals } from "../utils/util.js";
import { Node } from "./models/linked-list-models.js";

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);
    let current;
    // primeiro cenário: a lista está vazia
    if (this.head == null) {
      this.head = node;
    } else {
      // segundo cenário: a lista tem elementos
      current = this.head;
      while (current.next != null) {
        // obtém o último item
        current = current.next;
      }
      // atribui o novo elemento a next para criar a ligação
      current.next = node;
    }
    this.count++;
  }
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      // current faz referência ao primeiro elemento da lista
      let current = this.head;
      // primeiro cenário: remover o primeiro index da lista, o index 0
      if (index === 0) {
        // basta apontar o head para o segundo elemento da lista
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    // se o index não for válido retorna undefined.
    return undefined;
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      // você pode usar node ou current
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }
  // inserindo elemento em qualquer posição
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        // adiciona na primeira posição
        const current = this.head;
        node.next = current; // definindo o valor de node.next para current
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1); // percorrendo até a posição desejada e atribuindo o valor a previous
        const current = previous.next;
        node.next = current; // node.next aponta para current
        previous.next = node; // previous.next aponta para node
      }
      this.count++; // atualiza o tamanho da lista
      return true;
    }
    return false;
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        // verificamos se o elemento que estamos procurando é o elemento no nó current
        return i; // retorna a posição do elemento
      }
      current = current.next; // se não for o elemento itera para o próximo
    }
    return -1; // se não for encontrado retorna -1
  }

  remove(elemnet) {
    const index = this.indexOf(elemnet);
    return this.removeAt(index);
  }

  size() {
    return this.count;
  }
  
  isEmpty() {
    return this.size() === 0;
  }

  getHead(){
    return this.head;
  }

  toString() {
    if (this.head == null) {
      return "";
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString}, ${current.element}`;
      current = current.next;
    }
    return objString;
  }
}
