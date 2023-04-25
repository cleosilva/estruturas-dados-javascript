import LinkedList from "./estruturas-dados/LinkedList.js";

const linkedList = new LinkedList();

linkedList.push(15);
linkedList.push(10);
linkedList.push(20);
linkedList.push(12);



//linkedList.removeAt()
linkedList.insert(22, 5)
console.log(linkedList.toString())
console.log('índice: ',linkedList.indexOf(20));

//linkedList.remove(20);
console.log(linkedList.toString())
console.log(linkedList.isEmpty())
console.log(linkedList.getHead())



