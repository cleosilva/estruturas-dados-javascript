import HashTable from "./estruturas-dados/HashTable.js";
import { HashTableSeparateChaining } from "./estruturas-dados/HashTableSeparateChaining.js";

const hash = new HashTableSeparateChaining()


hash.put('Ygritte', 'ygritte@email.com')
hash.put('Jonathan', 'jonathan@email.com')
hash.put('Jamie', 'jamie@email.com')
hash.put('Jack', 'jack@email.com')
hash.put('Jasmine', 'jasmine@email.com')
hash.put('Jake', 'jake@email.com')
hash.put('Nathan', 'nathan@email.com')
hash.put('Athelstan', 'athelstan@email.com')
hash.put('Sue', 'sue@email.com')
hash.put('Aethelwulf', 'wulf@email.com')
hash.put('Sargeras', 'sar@email.com')

console.log(hash.get('Jamie'))

console.log(hash.isEmpty())
console.log(hash.size())
console.log(hash.getTable())



hash.remove('Jonathan')
console.log(hash.toString())