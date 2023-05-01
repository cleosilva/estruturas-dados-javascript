import { defaultToString } from "../utils/util.js";
import { ValuePair } from "./models/value-pair.js";

/**
 * Usando charCodeAt da String de javascript
 * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt}
 */

export default class HashTable {
    constructor(toStrFn = defaultToString){
        this.toStrFn = toStrFn;
        this.table = {};
    }
    loseloseHashCode(key) {
        if (typeof key === 'number') {
            return key;
        }
        const tableKey = this.toStrFn(key); // transformando key em string
        let hash = 0; // armazenará a soma (contador)
        for (let i = 0; i < tableKey.length; i++){
            hash += tableKey.charCodeAt(i); // somando o valor ASCII na variável hash
        }
        return hash % 37; // para trabalhar com números menores 
    }
    hashCode(key) {
        return this.loseloseHashCode(key);
    }
    put(key, value) {
        if (key != null && value != null){ // verifica se key e value são válidos
            const position = this.hashCode(key); // devemos encontrar uma posição na tabela usando o método hashCode
            this.table[position] = new ValuePair(key, value); // criamos uma instância de ValuePair
            return true;
        }
        return false;
    }
    get(key) {
        const valuePair = this.table[this.hashCode(key)]; // obtemos a posição de key
        return valuePair == null ? undefined : valuePair.value; // se ela existir retorna seu valor
    }
    remove(key) {
        const hash = this.hashCode(key); // pegando a posição que queremos deletar
        const valuePair = this.table[hash]; // armazenando valuePair na variável
        if (valuePair != null) {
            delete this.table[hash]; // caso não seja null deleta
            return true;
        }
        return false;
    }
    isEmpty(){
        return this.size() === 0;
    }
    size(){
        return Object.keys(this.table).length;
    }
    toString() {
        if ( this.isEmpty()) {
            return '';
        }
        const keys = Object.keys(this.table);
        let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
        for (let i = 1; i < keys.length; i++){
            objString = `${objString}, {${keys[i]} => ${this.table[keys[i]].toString()}}`
        }
        return objString;
    }
}