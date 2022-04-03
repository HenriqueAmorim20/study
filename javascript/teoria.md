# Teoria sobre Javascript

## console.time()

Inicia um temporizador que pode ser utilizado para rastrear quanto tempo uma operação leva, possui um nome único e só funciona com blocos de código síncronos

```js
//start
console.time("time");

for (let i = 0; i < 100000000; i++)
  //end
  console.timeEnd("time");
```

## toLocaleString()

Retorna uma string com uma formatação baseado em um idioma(primeiro argumento) e opções (segundo argumento).

```js
// number.toLocaleString(locale, {options});
// locale -> código do idioma (undefined utiliza o valor padrão do browser)
// options -> opções de formatação

let myNum = 3.14932;
console.log(
  myNum.toLocaleString("en-US", { style: "currency", currency: "USD" })
);
console.log(
  myNum.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
);
console.log(myNum.toLocaleString(undefined, { style: "percent" }));
console.log(
  myNum.toLocaleString(undefined, { style: "unit", unit: "celsius" })
);
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
class1.push(...class2); // Adiciona cada elemento do array class2 separadamente ao final de class1
console.log(class1);
// -----------------------------------------------

// Usando rest parameters em funções -> representa um número infinito de parametros que podem ser passado para uma função
// 100 e 1 são argumentos fixos, porém o resto é considerado como rest parameter
console.log(sum(100, 1, 5, 6, 7, 8, 9));
function sum(x, y, ...numbers) {
  let total = 0;
  for (let number of numbers) total += number;
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
  let idade = ano.getFullYear() - anoNascimento;
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
};

document.getElementById("decreaseButton").onclick = function () {
  count--;
  console.log(count);
};
```

### Arrow functions

É uma forma compacta para uma function expression

```js
let grades = [100, 50, 90, 60, 80, 70];

grades.forEach((element) => {
  console.log(element >= 50 ? "Aprovado" : "Reprovado");
});
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
for (let fruit of fruits) console.log(fruit);
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

fruits.forEach((element) => {
  // Funciona também com uma arrow function
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

let cubes = numbers.map((element) => {
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

console.log(total);
// -----------------------------------------------
```

### Array.sort() para números

Ordenando um array de numeros usando sort() e uma callback function

```js
let grades = [100, 50, 90, 60, 80, 70];

function descendingSort(x, y) {
  return y - x;
}

function ascendingSort(x, y) {
  return x - y;
}

console.log(...grades.sort(descendingSort));
console.log(...grades.sort(ascendingSort));
// -----------------------------------------------
```

## Map Object

É um objeto que possui pares chave-valor de qualquer tipo de dado. Possui get, set, delete, size e has.

```js
const store = new Map([
  [
    "Foguete Branca",
    {
      valor: 84.99,
      tamanho: "Adulta",
    },
  ],
  [
    "Bloco",
    {
      valor: 74.99,
      tamanho: "Infantil",
    },
  ],
  [
    "Igrejinha Preta",
    {
      valor: 84.99,
      tamanho: "Adulta",
    },
  ],
  [
    "Catedral Branca",
    {
      valor: 74.99,
      tamanho: "Infantil",
    },
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

## Objetos

Um grupo de propriedades(atributos que o objeto tem) e métodos(o que um objeto pode fazer) que são acessados por um "."

```js
const car = {
  model: "Mustang",
  color: "red",
  year: 2022,

  accelerate: function () {
    console.log("I'm accelerating!");
  },

  break: function () {
    console.log("I'm breaking!");
  },

  // this. -> Se refere ao objeto imediato ao contexto, nesse caso o objeto car.
  getInfo: function () {
    console.log(
      `Model: ${this.model}\nColor: ${this.color}\nYear: ${this.year}`
    );
  },
};

console.log(car.model, car.color, car.year);
car.accelerate();
car.break();
```

## Classes

Uma classe é uma blueprint pra criar objetos, define quais propriedades e métodos os objetos terão e utiliza um constructor para propriedades únicas.

```js
class Student {
  // O construtor é um método especial de uma classe que aceita argumentos e os atribui a propriedades.
  constructor(name, age, gpa) {
    this.name = name;
    this.age = age;
    this.gpa = gpa;
  }
  study() {
    console.log(`${this.name} is studying!`);
  }
}

const student = new Student("Henrique", 22, 3.8);
const student2 = new Student("Anamaria", 19, 4.5);

console.log(student);
student.study();

console.log(student2);
student2.study();
```

### Getters e Setters

Tem como função proteger(tornar privado) um atributo e/ou adicionar lógicas extras ao mesmo.

```js
class Car {
  constructor(power) {
    this._gas = 0;
    this._power = power;
  }

  get gas() {
    return `${this._gas} Liters`;
  }

  set gas(gas) {
    this._gas = gas > 50 ? 50 : gas < 0 ? 0 : gas;
  }

  get power() {
    return `${this._power} Hp`;
  }

  set power(power) {
    this._power = power < 30 ? 30 : power;
  }
}

const car1 = new Car(300);
car1.gas = 1000;
car1.power = 20;
console.log(car1.gas, car1.power);

const car2 = new Car(null);
car2.gas = 30;
car2.power = 550;
console.log(car2.gas, car2.power);
```

### Static properties and methods

Um static pertence a uma classe e não ao objeto instanciado. Propriedades static são úteis para cache e Métodos static são úteis para utility functions.

```js
class Car {
  static numberOfCars = 0;

  constructor(model) {
    this.model = model;
    Car.numberOfCars++;
  }

  static startRace() {
    console.log("3...2...1...GO!");
  }
}

const car1 = new Car("Ferrari");
const car2 = new Car("Lambo");
const car3 = new Car("Bentley");

// São acessados diretamente na classe
console.log(Car.numberOfCars);
Car.startRace();
```

### Herança

Quando uma classe filha herda todos os métodos e propriedades de outra classe.
\*\*Obs.: A keyword "super" invoca o construtor da classe pai, passando os atributos que a classe pai precisa.

```js
class Animal {
  constructor(name, type, alive) {
    this.name = name;
    this.type = type;
    this.alive = alive;
  }

  eat() {
    console.log(`${this.name} is eating!`);
  }

  sleep() {
    console.log(`${this.name} is sleeping!`);
  }
}

class Hawk extends Animal {
  constructor(name, type, alive, wings) {
    super(name, type, alive); // **
    this.wings = wings;
  }

  fly() {
    console.log(`${this.name} is flying!`);
  }
}

class Fish extends Animal {
  constructor(name, type, alive, fins) {
    super(name, type, alive); // **
    this.fins = fins;
  }

  swim() {
    console.log(`${this.name} is swimming!`);
  }
}

class Dog extends Animal {
  constructor(name, type, alive, paws) {
    super(name, type, alive); // **
    this.paws = paws;
  }

  walk() {
    console.log(`${this.name} is walking!`);
  }
}

const hawk = new Hawk("hawk", "aerial", true, 2);
const fish = new Fish("fish", "aquatic", false, 3);
const dog = new Dog("dog", "terrestrial", true, 4);

console.log(hawk);
hawk.fly();
console.log(fish);
fish.swim();
console.log(dog);
dog.walk();
```

## Try catch(error) finally

Try é um bloco de código que tenta ser executado, caso não seja possível ou haja algum erro, o bloco catch é executado. O bloco catch possui um argumento "error" que é uma descrição do que deu errado no bloco try. Além disso, existe também o bloco finally, que executa independente dos outros 2 sempre ao final.

```js
try {
  let x = window.prompt("Digite um número: ");
  x = Number(x);

  // throw serve para invocar um erro, passando uma mensagem como argumento e interrompe a execução do restante do código no bloco.
  if (isNaN(x)) throw "Não foi digitado um número!";

  console.log(x);
} catch (error) {
  console.log(`Erro! ${error}`);
} finally {
  console.log("Esse código sempre é executado");
}
```

## setTimeout()

Chama uma função após um determinado tempo (em milisegundos). É uma função assíncrona, ou seja, não pausa a execução do restante do código.

```js
setTimeout(() => {
  console.log("Executado após 3 segundos");
  clearTimeout(timer); // para a execução de um timeout
}, 3000);

// Casso a função callback tenha parametros, esses parametros são passados após os milisegundos e separados por vírgula
setTimeout(
  mensagem,
  6000,
  "Parametro 1 passado pelo timeout",
  "Parametro 2 passado pelo timeout"
);

//  A função setTimeout retorna um id, que pode ser armazenado e utilizado para realizar ações como limpar o timeout.
const timer = setTimeout(mensagem, 6000);

function mensagem(parametro1, parametro2) {
  console.log(`Executado após 6 segundos\n${parametro1}\n${parametro2}`);
}
```

## setInterval()

Chama uma função que sera executada repetidamente a cada x milisegundos. É uma função assíncrona, ou seja, não pausa a execução do restante do código.

```js
let count = 0,
  max;

while (isNaN(max)) max = Number(window.prompt("Type a number: "));

const myTimer = setInterval(() => {
  count++;
  console.log(`${count}...`);
  if (count >= max) {
    console.log("Done!");
    clearInterval(myTimer);
  }
}, 1000);
```

## Date Object

O construtor new Date() aceita argumentos como "2022/01/02". Possui getters e setters para ano, hora, dia da semana, dia do mes, segundos, minutos, milisegundos...

```js
let date;
setInterval(update, 1000);

function update() {
  date = new Date();
  formatTime();

  function formatTime() {
    let hours = formatZeroes(date.getHours());
    let minutes = formatZeroes(date.getMinutes());
    let seconds = formatZeroes(date.getSeconds());
    console.log(`${hours}:${minutes}:${seconds}`);
  }

  function formatZeroes(time) {
    return time.toString().length < 2 ? `0${time}` : time;
  }
}
```

## Promise

Objeto que encapsula o resultado de uma operação assíncrona, deixa que métodos assíncronos retornem valorem como se fossem métodos síncronos. "Eu prometo retornar algo no futuro."
Primeiramente o estado de uma promise é 'pending' depois 'fulfilled' ou 'rejected', o resultado é o que pode ser retornado.

```js
const promise = new Promise((reject, resolve) => {
  let fileLoaded = false;
  // let fileLoaded = true;

  if (fileLoaded) resolve("File loaded!");
  else reject("File NOT loaded");
})
  .then((value) => {
    // Bloco chamado quando a promise é resolvida, tem como parametro o que foi passado como argumento no resolve.
    console.log(value);
  })
  .catch((error) => {
    // Bloco chamado quando a promise é rejeitada, tem como parametro o que foi passado como argumento no reject.
    console.log(error);
  });

const wait = (
  time,
  name // Maneira de passar argumentos para uma promise
) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
    console.log(`${name}...`);
  }).then(() => {
    console.log("Thanks for waiting!");
  });

wait(2000, "Henrique"); // Maneira de passar argumentos para uma promise
```

## Async

Faz com que uma função retorna uma promise.

```js
async function loadFile() {
  let fileLoaded = false;

  if (fileLoaded) return "File loaded!"; // uma async function return um "resolve"

  throw "File NOT loaded!"; // pode jogar um erro para o catch
}

loadFile()
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
```

## Await

Faz com que uma async funtions espere por uma promise

```js
async function loadFile() {
  let fileLoaded = true;

  if (fileLoaded) return "File loaded!";

  throw "File NOT loaded!";
}

async function startProcess() {
  try {
    let message = await loadFile();
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

startProcess();
```

## HTML elements

### Selecionar um elemento

```js
// Seleciona e retorna o elemento do body por id
let elementId = document.getElementById("umId");
// Seleciona e retorna uma node list de elementos do body por classe
let elementsClass = document.getElementsByClassName("umaClasse");
// Seleciona e retorna uma node list de elementos do body por name
let elementsName = document.getElementsByName("umNome");
// Seleciona e retorna uma node list de elementos do body por tag html
let elementsTag = document.getElementsByTagName("li");

// Seleciona e retorna o primeiro elemento do body por id/classe/tagName/atributo
let elementQueryId = document.querySelector("#umId");
let elementQueryClass = document.querySelector(".umaClasse");
let elementQueryTag = document.querySelector("li");
let elementQueryAttribute = document.querySelector("[for]");

// Seleciona e retorna uma node list de elementos do body por classe/tagName/atributo
let elementsQueryClass = document.querySelectorAll(".umaClasse");
let elementsQueryTag = document.querySelectorAll("li");
let elementsQueryAttribute = document.querySelectorAll("[for]");
```

### DOM traversal

Relação entre os elementos do DOM

```js
let parent = document.querySelector("#umId");
let children = Array.from(parent.children); // converte os elementos filhos em um array iteravel

// parent.nextElementSibling -> seleciona o próximo elemento irmão
// parent.previousElementSibling -> seleciona o elemento anterior irmão
// parent.firstElementChild -> seleciona o primeiro elemento filho
// parent.lastElementChild -> seleciona o último elemento filho
// children.parentElement -> seleciona o elemento pai
// .children[i] -> seleciona um filho do array de filhos (que foi recuperado por Array.from(parent.children)
```

### Adicionar e alterar elementos

.innerHTML -> Vulnerável a ataques XSS (cross side scripts)
.textContent -> mais seguro

```js
// Cria um h1 com o conteudo digitado pelo usuário e acrescenta ele ao body
const nameTag = document.createElement("h1");
nameTag.textContent = window.prompt("Digite um nome: ");
document.body.append(nameTag);

// Cria uma ul e acrescenta ele ao body
const myList = document.createElement("ul");
document.body.append(myList);

// Cria 3 li's com conteudo e id, são acrescentados a ul.
const listItem = document.createElement("li");
listItem.textContent = "laranja 1 ";
listItem.id = "laranja";
const listItem2 = document.createElement("li");
listItem2.textContent = "limao 2";
listItem2.id = "limao";
const listItem3 = document.createElement("li");
listItem3.textContent = "pessego 3";
listItem3.id = "pessego";
myList.append(listItem);
myList.append(listItem2);
myList.append(listItem3);

// Cria um quarto li com conteudo e id, é acrescentado a ul e anteriormente ao li 3
const listItem4 = document.createElement("li");
listItem4.textContent = "mamao 4";
listItem4.id = "mamao";
myList.insertBefore(listItem4, listItem3);
```

## Eventos

```js
const element = document.querySelector("body");

const elementBtn = document.createElement("button");
elementBtn.textContent = "botão";
element.append(elementBtn);

element.onload = doSomething;
elementBtn.onclick = doSomething;
elementBtn.onmousedown = doSomething;
elementBtn.onmouseover = doSomething;
elementBtn.onmouseenter = doSomething;
elementBtn.onmouseout = doSomething;
elementBtn.onmouseleave = doSomething;
elementBtn.onmouseup = doSomething;
elementBtn.onmousemove = doSomething;
// etc

function doSomething(evento) {
  console.log(`O evento ${evento.type} foi ativado!`);
}
```

### addEventListener

É possível adicionar varios event handlres a um elemento, até mesmo o mesmo evento que chama diferentes funções.

```js
window.addEventListener("resize", onResize);
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
});

function onResize() {
  console.log(window.innerWidth);
}
```
