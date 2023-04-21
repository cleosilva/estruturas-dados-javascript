import Stack from "./classes/Stack.js";

function decimalToBinary(decNumber){
    const remStack = new Stack();

    let number = decNumber;
    let rem;
    let binaryString = '';

    // enquanto o resultado da divisão não for zero
    while (number > 0){
        // pegamos o resto da divisão por 2
        rem = Math.floor(number % 2);
        // fazemos o push desse valor na Stack 
        remStack.push(rem);
        // atualizamos o número que será divido por 2
        number = Math.floor(number / 2);
    }

    console.log('obsevando rem', remStack)

    while (!remStack.isEmpty()){
        // pegamos os elementos da pilha e concatenamos em um string "binaryString"
        binaryString += remStack.pop().toString();
    }

    return binaryString;

}

console.log(decimalToBinary(233))
console.log(decimalToBinary(10))
