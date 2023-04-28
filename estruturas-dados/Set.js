/**
 * Implementação da nossa própria classe Set
 * Operação em conjuntos
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
    

} 