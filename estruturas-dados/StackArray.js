export default class StackArray {
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        return this.items.pop();
    }

    peek(){
        return this.items[this.items.length - 1];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    clear(){
        return this.items = [];
    }

    size(){
        return this.items.length
    }
}

