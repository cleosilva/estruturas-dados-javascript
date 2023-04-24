/**
 * Pilha
 */
class Stack {
    constructor(){
        this.count = 0;
        this.items = {}
    }

    push(element){
        // objeto é um conjunto de pares chave e valor
        // this.count será a chave do objeto items e element o valor
        this.items[this.count] = element;
        // após o push é incrementando o valor de count
        this.count++;
    }

    size(){
        return this.count;
    }

    isEmpty(){
        return this.count === 0;
    }

    pop(){
        if (this.isEmpty()){
            return undefined;
        }
        this.count--;
        // armazena o valor do topo da pilha
        const result = this.items[this.count];
        // para objetos o JS fornece o operador delete
        delete this.items[this.count];
        return result;
    }

    peek(){
        if (this.isEmpty()){
            return undefined;
        }
        // para acessar o último elemento da pilha devemos decrementar 1
        return this.items[this.count -1]
    }

    clear(){
        this.items = {}
        this.count = 0
    }
    toString(){
        if (this.isEmpty()){
            return '';
        }
        let objString = `${this.items[0]}`
        for (let i = 1; i < this.count; i++){
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}

export default Stack;
