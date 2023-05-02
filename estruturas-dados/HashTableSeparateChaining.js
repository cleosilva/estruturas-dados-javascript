import { defaultToString } from "../utils/util.js";
import LinkedList from './LinkedList.js'
import { ValuePair } from "./models/value-pair.js";

/**
 * Tratando colisões com Encadeamento separado
 */
export class HashTableSeparateChaining {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }
    loseloseHashCode(key) {
        if (typeof key === 'number'){
            return key;
        }
        const tableKey = this.toStrFn(key);
        let hash = 0;
        for (let i = 0; i < tableKey.length; i++){
            hash += tableKey.charCodeAt(i);
        }
        return hash % 37;
    }
    hashCode(key) {
        return this.loseloseHashCode(key);
    }
    put(key, value) {
        if (key != null && value != null){
            const position = this.hashCode(key)
            if (this.table[position] == null){ // verificando se a posição na qual tentamos adicionar o valor já contém outros valores
                this.table[position] = new LinkedList(); // primeira vez que adicionamos um elemento
            }
            this.table[position].push(new ValuePair(key, value));
            return true;
        }
        return false;
    }
    get(key) {
        const position = this.hashCode(key);
        const linkedList = this.table[position];// verifica se há valor na posição desejada. Para isso, acessamos linkedlist na position do hash
        if (linkedList != null && !linkedList.isEmpty()){ // se há valor significa que é uma instância de LinkedList
            let current = linkedList.getHead(); // pegamos o head da linkedList
            while (current != null) {
                if (current.element.key === key){ // element é uma instância de ValuePair, então temos key e value
                    return current.element.value;
                }
                current = current.next;
            }
        }
        return undefined;
    }
    remove(key) {
        const position = this.hashCode(key);
        const linkedList = this.table[position];
        if (linkedList != null && !linkedList.isEmpty()){
            let current = linkedList.getHead();
            while (current != null) {
                if(current.element.key === key){
                    linkedList.remove(current.element)
                    if(linkedList.isEmpty()) { // se a lista estiver vazia deletamos esta posição
                        delete this.table[position]
                    }
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }
    isEmpty() {
        return this.size() === 0;
    }
    size() {
        let count = 0;
        Object.values(this.table).forEach(linkedList => {
            count += linkedList.size();
        });
        return count;
    }
    clear() {
        this.table = {};
    }
    getTable() {
        return this.table;
    }
    toString() {
        if (this.isEmpty()) {
          return '';
        }
        const keys = Object.keys(this.table);
        let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
        for (let i = 1; i < keys.length; i++) {
          objString = `${objString},{${keys[i]} => ${this.table[
            keys[i]
          ].toString()}}`;
        }
        return objString;
      }
}