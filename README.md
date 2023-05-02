## Estrutura de dados em JavaScript

* [StackArray](https://github.com/cleosilva/estruturas-dados-javascript/blob/main/estruturas-dados/StackArray.js): classe Stack baseada em array. As pilhas obedecem ao princípio de **LIFO**(Last In First Out, isto é, o último a entrar é o primeiro a sair). A adição de novos itens ou a remoção de itens existentes ocorrem na mesma extremidade.
</br>

* [Stack](https://github.com/cleosilva/estruturas-dados-javascript/blob/main/estruturas-dados/Stack.js): classe Stack baseada em objeto. Ao trabalhar com um conjunto de dados devemos analisar qual tipo de pilha iremos utilizar. Trabalhar com pilhas baseadas em array é mais fácil, porém se array tiver um volume grande de dados demorará mais para iterar pelos elementos. Desse modo, podemos criar uma estrutura de pilhas usando um objeto, e assim, acessar diretamente o elemento, usando menos memória. 
</br>

* [Queue](https://github.com/cleosilva/estruturas-dados-javascript/blob/main/estruturas-dados/Queue.js): uma fila é coleção ordenada de itens baseada em **FIFO**(First In FirstOut, isto é, o primeiro que entra é o primeiro que sai). A adição de novos elementos de uma fila é feita na cauda (tail) e a remoção na frente.
</br>

* [Deque](https://github.com/cleosilva/estruturas-dados-javascript/blob/main/estruturas-dados/Deque.js): a estrutura de dados de deque, também conhecida com **filas de duas pontas**(double-ended queue), é uma fila especial que nos permite inserir e remover elementos do final ou da frente da fila.
</br>

* [LinkedList](https://github.com/cleosilva/estruturas-dados-javascript/blob/main/estruturas-dados/LinkedList.js): os arrays são a estrutura de dados mais utilizadas para armazenar elementos, No entanto, ela apresenta algumas desvantagens: o tamanho do array é fixo em algumas linguagens e inserir ou remover elementos no início ou no meio do array, é custoso, pois os elementos têm de sofrer um deslocamento(apesar de JavaScript ter métodos que farão isso, é isso que acontece internamente também). As listas ligadas armazenam uma coleção sequencial de elementos; no entanto, de modo diferente dos arrays, nas listas ligadas os elementos não são posicionados de forma contínua na memória. Cada elemento é constituído de um nó que armazena o elemento, além de uma referência(também conhecido como ponteiro ou ligação) que aponta para o próprio elemento. Uma das vantagens da lista ligada em relação ao array é que não é necessário deslocar os elementos quando eles são adicionados ou removidos.
</br>

* [DoublyLinkedList](https://github.com/cleosilva/estruturas-dados-javascript/blob/main/estruturas-dados/DoublyLinkedList.js): a diferença entre uma lista duplamente ligada e uma lista ligada comum é que, nessa última, fazemos ligação somente de um nó para o próximo, enquanto, em uma lista duplamente ligada, temos uma ligação dupla: uma para o próximo elemento e outra para o elemento anterior.
</br>

* [Set](https://github.com/cleosilva/estruturas-dados-javascript/blob/main/estruturas-dados/Set.js): Um conjunto(set) é uma coleção não ordenada de itens, composta de elementos únicos (isto é, não podem ser repetidos). Essa estrutura usa o mesmo conceito matemático dos conjuntos finitos, porém aplicados a uma estrutura de dados em ciência da computação. Podemos pensar também em conjuntos como um array sem elementos repetidos e sem o conceito de ordem.
</br>

* [Dictionary](https://github.com/cleosilva/estruturas-dados-javascript/blob/main/estruturas-dados/Dictionary.js): Um dicionário é usado para armazenar pares [chave, valor], em que a chave pode ser usada para encontrar um elemento em particular.
</br>

* [HashTable](https://github.com/cleosilva/estruturas-dados-javascript/blob/main/estruturas-dados/HashTable.js): O hashing consiste em encontrar um valor em uma estrutura de dados o mais rápido possível. Quando usamos uma função de hash, já sabemos em que posição o valor se encontra, portanto, podemos simplesmente o acessar. Uma função de hash é uma função que, dada uma key, devolve o endereço em que o valor está na tabela.
<strong>Dictionary Vs HashTable</strong>: As duas classes são muito parecidas. A diferença está no fato de que, na classe Dictionary, armazenamos o Value Pair na propriedade key de table (depois de ter sido transformada em string); na classe HashTable, geramos um número a partir da key (hash) e armazenamos o ValuePair na posição (ou propriedade) hash.
**Tratando colisões da HashTable**: 
* [Separate Chaining](https://github.com/cleosilva/estruturas-dados-javascript/blob/main/estruturas-dados/HashTableSeparateChaining.js): consiste em criar uma lista ligada para cada posição da tabela e armazenar os elementos. É a técnica mais simples, no entanto, ela exige memória extra, além daquela ocupada pela instância de HashTable.
* [Linear Sondagem](https://github.com/cleosilva/estruturas-dados-javascript/blob/main/estruturas-dados/HashTableLinearProbing.js): É chamada linear porque a colisão é tratada de modo que os valores serão armazenados diretamente na tabela, e não em uma estrutura de dados separada. Ao adicionar um elemento se a position estiver ocupada iteramos adicionando position + 1 até que uma posição livre seja encontrada.
</br>



#### Referências:
* GRONER, Loiane. Estrutura de dados e algoritmos com JavaScript. 2ª Edição. São Paulo: Novatec, 2018.

Em contrução 🚧 

