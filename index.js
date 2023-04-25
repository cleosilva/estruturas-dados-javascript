import DoublyLinkedList from "./estruturas-dados/DoublyLinkedList.js";
import LinkedList from "./estruturas-dados/LinkedList.js";

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.insert(19, 0);
doublyLinkedList.insert(25, 1);
//doublyLinkedList.removeAt(2)

//console.log('Index: ',doublyLinkedList.indexOf(25))
//console.log('Index: ',doublyLinkedList.getTail())

//doublyLinkedList.clear()
console.log(doublyLinkedList.toString())
console.log(doublyLinkedList.inverseToString())
