import DoublyLinkedList from "./estruturas-dados/DoublyLinkedList.js";


const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.insert(5, 0);
doublyLinkedList.insert(10, 1);
doublyLinkedList.insert(8, 2);
doublyLinkedList.insert(11, 1);


doublyLinkedList.removeAt(0)



console.log(doublyLinkedList.toString())