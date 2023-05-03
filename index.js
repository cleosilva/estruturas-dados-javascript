import BinarySearchTree from "./estruturas-dados/BinarySearchTree.js";

const tree = new BinarySearchTree();

tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)


const total = 0;

const printNode = (value) => console.log(value)
//const somaNode = (value) => {total += value}

// tree.inOrderTraverse(printNode)
// console.log("-----------")
// tree.preOrderTraverse(printNode)
// console.log("-----------")
// tree.postOrderTraverse(printNode)

console.log(tree.search(1))
console.log(tree.search(8))
