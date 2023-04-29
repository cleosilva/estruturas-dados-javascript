import Set from './estruturas-dados/Set.js'

const setA = new Set();

setA.add(1)
setA.add(2)

const setB = new Set();

setB.add(1)
setB.add(2)
setB.add(3)

const setC = new Set();

setC.add(2)
setC.add(3)
setC.add(4)

console.log(setA.isSubsetOf(setB));
console.log(setA.isSubsetOf(setC));








