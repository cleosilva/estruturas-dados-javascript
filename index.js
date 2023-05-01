
import Dictionary from "./estruturas-dados/Dictionary.js"

const dictionary = new Dictionary()

dictionary.set('Gandalf', 'gandalf@email.com')
dictionary.set('John', 'johnsnow@email.com')
dictionary.set('Tyrion', 'tyrion@email.com')

// console.log(dictionary.hasKey('Gandalf'))

// dictionary.remove('Gandalf')
// console.log(dictionary.hasKey('Gandalf'))


// //console.log(dictionary)
// console.log(dictionary.get('John'))

// console.log(dictionary.keyValues())
// console.log(dictionary.keys())
// console.log(dictionary.values())

dictionary.forEach((k,v) => {console.log('forEach: ', `key: ${k}, value: ${v}` )})

console.log(dictionary.size())
console.log(dictionary.isEmpty())
//console.log(dictionary.clear())

console.log(dictionary.toString())



