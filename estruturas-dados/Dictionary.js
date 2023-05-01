import { defaultToString } from '../utils/util.js';
import { ValuePair } from './models/value-pair.js';

/**
 * Implementação da nossa própria classe Map
 */
export default class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }
    hasKey(key) {
        return this.table[this.toStrFn(key)] != null;
    }
    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }
    remove(key) {
        if (this.hasKey(key)) {
            // usamos o operador delete de javascript para remover key transformada em String do objeto table
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }
    get(key) {
        const valuePair = this.table[this.toStrFn(key)]; // obtém o objeto armazenado na propriedade key
        return valuePair == null ? undefined : valuePair.value; // se o objeto existir devolvemos seu valor, se não, undefined
    }
    keyValues(){
        return Object.values(this.table);
    }
    keys() {
        return this.keyValues().map(valuePair => valuePair.key);
    }
    values() {
        return this.keyValues().map(valuePair => valuePair.value);
    }
    forEach(callbackFn) {
        const valuePairs = this.keyValues(); // obtemos o array 
        for (let i = 0; i < valuePairs.length; i++){
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value); // iteramos por cada valor e chamamos a função que passada por parâmetro
            if(result === false){ // caso devolva false paramos a execução
                break;
            }
        }
    }
    size() {
        return Object.keys(this.table).length;
    }
    isEmpty() {
        return this.size() === 0;
    }
    clear() {
        this.table = {}
    }
    toString() {
        if (this.isEmpty()){
            return '';
        }
        const valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`; // adicionando o primeiro valor na string, usando o método da classe ValuePair
        for (let i = 1; i < valuePairs.length; i++){
            objString = `${objString}, ${valuePairs[i].toString()}`
        }
        return objString;
    }
}