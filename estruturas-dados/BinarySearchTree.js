import { Node } from "./models/Node.js";
import { Compare, defaultCompare } from '../utils/util.js'

export default class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.root = null; // nó da raiz do tipo node
    }
    insert(key) {
        if (this.root == null) { // se a árvore está vazia, basta apontar o root para o node
            this.root = new Node(key);
        } else {
            this.insertNode(this.root, key)
        }
    }
    insertNode(node, key) {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) { // compara se o valor de key é menor que o root (raiz)
            if (node.left == null){
                node.left = new Node(key)
            } else {
                this.insertNode(node.left, key)
            }
        } else {
            if (node.right == null){
                node.right = new Node(key);
            } else {
                this.insertNode(node.right, key)
            }
        }
    }
    /**
     * recebe uma função callback, a qual pode ser usada para executar a ação desejada
     * quando visitamos o nó (esse padrão é conhecido como visitor)
     * @see https://en.wikipedia.org/wiki/Visitor_pattern 
    */
    inOrderTraverse(callback) { // ordena a árvore
        this.inOrderTraverseNode(this.root, callback);
    }
    inOrderTraverseNode(node, callback) {
        if (node != null) { // verifica se o node passado não é null
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback);
    }
    // a diferença é que o pré-ordem visita o node primeiro
    preOrderTraverseNode(node, callback) {
        if (node != null) {
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback)
        }
    }
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback);
    }
    postOrderTraverseNode(node, callback) {
        if (node != null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key)
        }
    }
    min() {
        return this.minNode(this.root);
    }
    minNode(node){
        let current = node;
        while (current != null && current.left != null){
            current = current.left;
        }
        return current;
    }
    max() {
        return this.maxNode(this.root);
    }
    maxNode(node){
        let current = node;
        while (current != null && current.right != null){
            current = current.right;
        }
        return current; 
    }
    search(key) {
        return this.searchNode(this.root, key);
    }
    searchNode(node, key) {
        if(node == null){
            return false;
        }
        if(this.compareFn(key, node.key) === Compare.LESS_THAN) { // se for menor que o nó atual procure à esquerda
            return this.searchNode(node.left, key);
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN){ // se form maior procure à direita
            return this.searchNode(node.right, key)
        } else { // caso contrário a chave que estamos procurando é igual a chave do nó
            return true;
        }
    }
    remove(key){
        this.root = this.removeNode(this.root, key);
    }
    removeNode(node, key){
        if(node == null){ // se for null é pq a key não existe
            return null;
        }
        if(this.compareFn(key, node.key) === Compare.LESS_THAN){
            node.left = this.removeNode(node.left, key); // se a key for menor que o nó atual, passamos para o próximo nó à esquerda da árvore
            return node;
        } else if(this.compareFn(key, node.key) === Compare.BIGGER_THAN){
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            // key é igual a node.key
            // caso 1
            if(node.left == null && node.right == null){ // o nó é uma folha, ou seja, o último item da árvore
                node = null; // neste caso, basta atribuir null ao nó
                return node; // devemos também atribuir null ao pai, fazemos isso devolvendo o valor null
            }
            // caso 2
            // removando o nó com filho à esquerda ou à direita
            if(node.left == null){ // possui filho à direita
                node = node.right; // desse modo, devemos apontar o ponteiro do pai ao filho à direita
                return node;
            } else if(node.right == null){ // possui filho à esquerda
                node = node.left; // desse modo, devemos apontar o ponteiro do pai ao filho à equerda
                return node;
            }
            // caso 3
            // removendo nó com dois filhos
            const aux = this.minNode(node.right); // depois que encontrar o nó que queremos remover, precisamos encontrar o no mínimoda subárvore
            node.key = aux.key; // atualizamos o valor do nó com a key do nó mínimo
            node.right = this.removeNode(node.right, aux.key); // removemos o nó mínimo da subárvore, pois ele foi transferido para o lugar do nó removido
            return node; // devolve a referênci do nó atualizado
        }
    }
}