# Teoria sobre Javascript

## toLocaleString()
Retorna uma string com uma formatação baseado em um idioma(primeiro argumento) e opções (segundo argumento).

```js
// number.toLocaleString(locale, {options});
// locale -> código do idioma (undefined utiliza o valor padrão do browser)
// options -> opções de formatação

let myNum = 3.14932;
console.log(myNum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
console.log(myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"}));
console.log(myNum.toLocaleString(undefined, {style: "percent"}));
console.log(myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"}));
// -----------------------------------------------

```

Mais informações: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString

## Spread operator
Permite que iteráveis, como por exemplo um array ou string, tenhmk seus elementos expandidos em varios argumentos.

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let maximum = Math.max(numbers) -> gera um erro pois essa função aceita apenas múltiplos argumentos (x, y, z) e não um array ([x, y, z])
let maximum = Math.max(...numbers);
console.log(maximum); 

let class1 = ["Bob Esponja", "Patrick", "Lula Molusco"];
let class2 = ["Sandy", "Senhor Sirigueijo", "Plankton"];
// class1.push(class2) -> adiciona o array inteiro class2 como um elemento ao final de class1
class1.push(...class2) // Adiciona cada elemento do array class2 separadamente ao final de class1
console.log(class1)
// -----------------------------------------------

// Usando rest parameters em funções -> representa um número infinito de parametros que podem ser passado para uma função
// 100 e 1 são argumentos fixos, porém o resto é considerado como rest parameter
console.log(sum(100, 1, 5, 6, 7, 8, 9))
function sum(x, y, ...numbers) {
    let total = 0; 
    for(let number of numbers) total +=number;
    return total + x + y;
}
// -----------------------------------------------

```

## Funções

### CallBack function
Uma função callback X é passada como argumento de outra função Y, isso permite que a função X só vai executar ao final (ou quando chamada) da função Y. Isso é útil para códigos assíncronos.

```js
calculaIdade(2006, podeVotar);
calculaIdade(2006, maiorDeIdade);

function calculaIdade(anoNascimento, callBack) {
    let ano = new Date();
    let idade = ano.getFullYear() - anoNascimento
    callBack(idade);
}

function podeVotar(idade) {
    console.log(idade >= 16 ? "Pode votar!" : "Não pode votar!");
}

function maiorDeIdade(idade) {
    console.log(idade >= 18 ? "É maior de idade!" : "Não é maior de idade!");
}
```
### Function expression
É uma função sem nome (função anônima) que precisa ser escrita apenas uma vez no escopo do projeto

```js
// Codigo que escuta um evento de um botao e realiza uma ação única sem pressinar nomear a função
let count = 0;

document.getElementById("increaseButton").onclick = function () {
    count++;
    console.log(count);
}

document.getElementById("decreaseButton").onclick = function () {
    count--;
    console.log(count);
}
```
### Arrow functions
É uma forma compacta para uma function expression
```js
let grades = [100, 50, 90, 60, 80, 70]

grades.forEach((element) => {
    console.log(element >= 50 ? "Aprovado" : "Reprovado")
})
```

## Utilidades da biblioteca math
```js
let x = 3.14;
// Gera um número aleatório entre 0 e 1
console.log(Math.random());
// -----------------------------------------------

// Arredonda o valor apenas para baixo
console.log(Math.floor(x));
// -----------------------------------------------

// Arredonda o valor apenas para cima
console.log(Math.ceil(x));
// -----------------------------------------------

// Eleva o primeiro argumento a pontencia do segundo argumento
console.log(Math.pow(x, 2));
// -----------------------------------------------

// Raiz quadrada do número
console.log(Math.sqrt(x));
// -----------------------------------------------

// Retorna o valor absuluto do número (distancia até o 0)
console.log(Math.abs(x));
// -----------------------------------------------

// Retorna o maior valor dos argumentos
console.log(Math.max(x, 10, 1000));
// -----------------------------------------------

// Retorna o menor valor dos argumentos
console.log(Math.min(x, 10, 1000));
// -----------------------------------------------

// Constante de pi
console.log(Math.PI);
// -----------------------------------------------

```
Outras funções disponíveis em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math


## Utilidades para Strings

```js
let nome = "  Henrique Melo  ";
let telefone = "123-456-7890";
// Tamanho da string
console.log(nome.length);
// -----------------------------------------------

// Retorna o caracter da string que está no index do argumento passado
console.log(nome.charAt(4));
// -----------------------------------------------

// Retorna o index na string do caracter passado como argumento
console.log(nome.indexOf("e"));
// -----------------------------------------------

// Retorna o index na string da ultima ocorrencia do caracter passado como argumento
console.log(nome.lastIndexOf("e"));
// -----------------------------------------------

// Retira os espaços vazios excedentes no inicio e final da string
console.log(nome.trim());
// -----------------------------------------------

// Transforma a string toda para caixa alta
console.log(nome.toUpperCase());
// -----------------------------------------------

// Transforma a string toda para baixa baixa
console.log(nome.toLowerCase());
// -----------------------------------------------

// Substitui todos os caracteres passados no primeiro argumento pelo caracter passado no segundo argumento
console.log(telefone.replaceAll("-", ""));
// -----------------------------------------------

// Recorta um pedaço da string que vai do index do argumento 1 até o argumento 2 (é opcional caso seja até o final da string) sem modificar a string original
console.log(nome.slice(2, 5));
// -----------------------------------------------

```
Outras funções disponíveis em: https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods




## Utilidades para Arrays

### Métodos Básicos
```js
let fruits = ["apple", "orange", "banana"];
// Adiciona um elemento ao final do array
fruits.push("lemon");
console.log(fruits);
// -----------------------------------------------

// Adiciona um elemento ao inicio do array
fruits.unshift("mango");
console.log(fruits);
// -----------------------------------------------

// Remove o ultimo elemento do array
fruits.pop();
console.log(fruits);
// -----------------------------------------------

// Remove o primeiro elemento do array
fruits.shift();
console.log(fruits);
// -----------------------------------------------

// for of -> loop que em cada ciclo atribui a variável criada a um elemento do array
for(let fruit of fruits) console.log(fruit);
// -----------------------------------------------

// Ordenar um array de strings em ordem alfabética
console.log(fruits.sort());
// -----------------------------------------------

// Inverter a ordem dos elementos de um array
console.log(fruits.reverse());
// -----------------------------------------------
```

### Array.forEach()
Executa uma callback function para cada elemento de um array (A função callback tem como argumento/parametro o próprio elemento que está sendo iterado)
```js
let fruits = ["apple", "orange", "banana"];
fruits.forEach(print);

function print(element) {
  console.log(element);
}

fruits.forEach((element) => { // Funciona também com uma arrow function
  console.log(element);
});
// -----------------------------------------------
```
### Array.map()
Executa uma callback function para cada elemento do array e cria um novo array
```js
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);

function square(element) {
    return Math.pow(element, 2);
}

let cubes = numbers.map( element => {
    return Math.pow(element, 3);
});

console.log(...squares);
console.log(...cubes);
// -----------------------------------------------
```
### Array.filter()
Cria um novo array de elements que atendem a condicional de uma callback function
```js
let ages = [18, 6, 20, 12, 16, 22, 46, 50, 10, 30];
let adults = ages.filter(maiorDeIdade);

function maiorDeIdade(element) {
    return element >= 18;
}

console.log(...adults);
// -----------------------------------------------
```
### Array.reduce()
Reduz um array a um valor único
```js
let prices = [5, 10, 15, 20, 25];
let total = prices.reduce(checkout);

function checkout(total, element) {
    return total + element;
}

console.log(total)
// -----------------------------------------------
```
### Array.sort() para números
Ordenando um array de numeros usando sort() e uma callback function
```js
let grades = [ 100, 50, 90, 60, 80, 70];

function descendingSort(x, y) {
    return y - x;
}

function ascendingSort(x, y) {
    return x - y;
}

console.log(...grades.sort(descendingSort))
console.log(...grades.sort(ascendingSort))
// -----------------------------------------------

```

## Map Object
É um objeto que possui pares chave-valor de qualquer tipo de dado. Possui get, set, delete, size e has.
```js
const store = new Map([
    [
        "Foguete Branca", {
            valor: 84.99,
            tamanho: "Adulta",
        } 
    ],
    [
        "Bloco", {
            valor: 74.99,
            tamanho: "Infantil",
        } 
    ],
    [
        "Igrejinha Preta", {
            valor: 84.99,
            tamanho: "Adulta",
        } 
    ],
    [
        "Catedral Branca", {
            valor: 74.99,
            tamanho: "Infantil",
        }
    ],
]);

console.log(store.get("Foguete Branca"));
store.set("Ipes", {
    valor: 84.99,
    tamanho: "Adulta",
});
console.log(store);
store.delete("Bloco");
console.log(store);
console.log(store.size);
console.log(store.has("Bloco"));
```