import { defaultToString } from '../utils/util.js';
import { ValuePair } from './models/value-pair.js'

export default class HashTableLinearProbing {
    constructor(toStrFn = defaultToString){
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
            const position = this.hashCode(key); // obtendo o hashCode da position
            if(this.table[position] == null) { // verificando se a position está vazia
                this.table[position] = new ValuePair(key, value) // se estiver vazia basta adicionar
            } else {
                let index = position + 1;
                while (this.table[index] != null){ // se estiver ocupada devemos encontrar a próxima position vazia
                    index++;
                }
                this.table[index] = new ValuePair(key, value); // então adicionamos o valor desejado
            }
            return true;
        }
        return false;
    }
    get(key) {
        const position = this.hashCode(key);
        if (this.table[position] != null){ // verifica se a key existe
            if (this.table[position].key === key){ // position é igual a key?
                return this.table[position].value // se sim, basta devolver o valor
            }
            // a key não é igual a position
            let index = position + 1; 
            while (this.table[index] != null && this.table[index].key !== key){ // enquanto a key for diferente, acrescenta 1
                index++;
            }
            if (this.table[index] != null && this.table[index].key === key){ // quando a key for igual, devolve o valor
                return this.table[index].value;
            }
        }
        return undefined;
    }
    remove(key) {
        const position = this.hashCode(key);
        if (this.table[position] != null) {
            if (this.table[position].key === key) {
                delete this.table[position];
                this.verifyRemoveSideEffect(key, position); // move os elementos uma position atrás
                return true;
            }
            let index = position + 1;
            while (this.table[index] != null && this.table[index].key !== key){
                index++;
            }
            if (this.table[index] != null && this.table[index].key === key){
                delete this.table[index];
                this.verifyRemoveSideEffect(key, index);
                return true;
            }
        }
        return false;
    }
    verifyRemoveSideEffect(key, removedPosition) {
        const hash = this.hashCode(key);
        let index = removedPosition + 1;
        while (this.table[index] != null){
            const posHash = this.hashCode(this.table[index].key);
            if (posHash <= hash || posHash <= removedPosition){
                this.table[removedPosition] = this.table[index];
                delete this.table[index];
                removedPosition = index
            }
            index++;
        }
    }
    isEmpty() {
        return this.size() === 0;
      }
      size() {
        return Object.keys(this.table).length;
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