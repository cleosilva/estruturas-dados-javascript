/**
 * Implementação da nossa própria classe Set.
 * Operação em conjuntos
 * @function union - une os dois conjuntos
 * @function intersection - retorna os elementos comuns nos dois conjuntos
 * @function difference - retorna os elementos que estão somente em um dos conjuntos
 * @function isSubSet - retorna um subconjunto
 * 
 */
export default class Set {
    constructor(){
        this.items = {};
    }
    has(element){
        return Object.prototype.hasOwnProperty.call(this.items, element)
    }

    add(element) {
        // conjunto são compostos de elementos únicos, por isso devemos verificar se ele já existe
        if (!this.has(element)){
            // adicionando o elemento com chave e valor iguais
            this.items[element] = element;
            return true;
        }
        return false;
    }
    delete(element) {
        if (this.has(element)){
            delete this.items[element];
            return true;
        }

        return false;
    }
    clear() {
        this.items = {};
    }
    size() {
        return Object.keys(this.items).length;  

    }
    values() {
        return Object.values(this.items);
    }
    // Métodos de operação de conjuntos
    union(otherSet) {
        const unionSet = new Set();
        this.values().forEach(value => unionSet.add(value));
        otherSet.values().forEach(value => unionSet.add(value));
        return unionSet;
    }
    // esta implementação faz com iteramos pelo menor conjunto e verificamos os elementos comuns
    // menos iteração resulta em custo menor de processamento
    intersection(otherSet) {
        const intersectionSet = new Set();
        const values = this.values();
        const otherValues = otherSet.values();
        let biggerSet = values;
        let smallerSet = otherValues;
        if (otherValues.length - values.length > 0) {
            biggerSet = otherValues;
            smallerSet = values;
        }
        smallerSet.forEach(value => {
            if (biggerSet.includes(value)){
                intersectionSet.add(value)
            }
        })
        return intersectionSet;
    }
    difference(otherSet) {
        const differenceSet = new Set();
        this.values().forEach(value => {
            if(!otherSet.has(value)){
                differenceSet.add(value)
            }
        })

        return differenceSet;
    }
    isSubsetOf(otherSet) {
        if (this.size() > otherSet.size()) { // se a instância é maior, ela não é um subconjunto
            return false;
        }
        let isSubSet = true; // supomos que a instância atual é um subconjunto
        this.values().every(value => {
            if (!otherSet.has(value)){ // se houver algum elemento que não está presente, ele não é subconjunto
                isSubSet = false;
                return false;
            }
            return true;
        })
        return isSubSet;
    }

} 