import Deque from "./classes/Deque.js";
import Queue from "./classes/Queue.js";
import hotPotato from "./hotPotato.js";


/*const queue = new Queue();

console.log(queue.isEmpty())

queue.enqueue("John");
queue.enqueue("Jack");
queue.enqueue("Camila");

console.log(queue)
console.log(queue.isEmpty())

console.log("Peek",queue.peek())
queue.dequeue()
queue.dequeue()

console.log(queue)*/


// testando classe Deque

/*const deque = new Deque();


//deque.addBack(6);
deque.addFront(5);
deque.addFront(7)

deque.addFront(6)

console.log("PeekFront", deque.peekFront())

console.log(deque)
console.log(deque.isEmpty())

deque.removeFront();
deque.removeFront();

//deque.removeBack();
console.log("PeekFront",deque.peekFront())
console.log(deque);
console.log("PeekBack",deque.peekBack())*/

const names = ["John", "Jack", "Camila", "Ingrid", "Carl"]

const playhotPotato = hotPotato(names, 7);
playhotPotato.eliminated.forEach(name => {
    console.log(`${name} was eliminated from the Hot Potato game`)
});

console.log(`The winner is ${playhotPotato.winner}`);
