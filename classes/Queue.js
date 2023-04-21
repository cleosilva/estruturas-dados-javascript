class Queue {
    constructor(){
        this.count = 0;
        this.lowestCount = 0; // controla o primeiro elemento da fila
        this.items = {};
    }

    enqueue(element){
        this.items[this.count] = element;
        this.count++
    }

    dequeue(){
        if (this.isEmpty()){
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;

    }

    // para saber o elemento que está na frente da fila
    peek(){
        if (this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount]
    }

    isEmpty(){
        return this.size() === 0;
    }

    size(){
        return this.count - this.lowestCount;
    }
    clear(){
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    toString(){
        if (this.isEmpty()){
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++){
            objString = `${objString}, ${this.items[i]}`    
        }
        return objString
    }
}

export default Queue;



