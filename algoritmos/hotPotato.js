import Queue from './classes/Queue.js';

/**
 * Função que simula o jogo batata quente
 * @param {[string]} elementsList
 * @param {number} num 
 * @returns {string}
 */

export function hotPotato(elementsList, num) {
    const queue = new Queue();
    const elimitatedList = [];

    for (let i = 0; i < elementsList.length; i++){
        queue.enqueue(elementsList[i]);
    }

    while (queue.size() > 1){
        for (let i = 0; i < num; i++){
            queue.enqueue(queue.dequeue());
        }
        elimitatedList.push(queue.dequeue());
    }
    return {
        eliminated: elimitatedList,
        winner: queue.dequeue()
    }

}
