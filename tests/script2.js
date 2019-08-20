var x =`metade de 100 eh ${100/2}`; //precisa usar backtick pra funcionar

console.log(x);

var y = 4>5 ? "banana" : "limao";
console.log(y);

var z = 'A' > 'a' ? "sim" : "nao";
console.log(z);

//logical operator são iguais ao C -> && || !


console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51

//true || X -> o X nem eh olhado
//false && X -> o x tbm nao eh olhado

//let theNumber = Number(prompt("Pick a number"));

// let stringer = "";
// for(let i = 0; i<7; i++){
//     stringer+="#";
//     console.log(stringer);
    
// }

// let stringer2 = "";
// for(let i=1; i<101; i++){
//     if(i%3===0) {
//         stringer2 += "Fizz";
//         if(i%5===0){
//             stringer2+="Buzz";
//         }
//         console.log(stringer2);
//         stringer2="";
//     }
//     else if(i%5===0) console.log("Buzz");
//     else console.log(i);
// }

let N = 16, string = "";
for(let i=0; i< N; i++){
    for(let j=0; j<N; j++){
        if(i%2===0){
            if(j%2===0) string+=' ';
            else string += "#";
        }
        else{
            if(j%2===0) string+="#";
            else string += " ";
        }
    }
    console.log(string);
    string="";
    
}

//outro jeito de definir funcao
// const power = (base, exponent) => {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//       result *= base;
//     }
//     return result;
//   };

//   //nesse caso nao tem parametro
// const horn = () => {
//     console.log("Toot");
// };


//Javascript nao reclama se passar numero diferente de argumento
//pra funcao. Nesse caso aí se fizer minus(10), ele retorna -10,
//senão ele retorna a-b. 
// Se passar argumento a mais, ele ignora
//Se passar a menos, ele poe undefined no lugar
// function minus(a, b) {
//     if (b === undefined) return -a;
//     else return a - b;
//   }
  

// function power(base, exponent = 2) {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//         result *= base;
//     }
//     return result;
// }
  
//se nao der um segundo argumento, fica 2 padrao. Senao, ai fica certo
  //console.log(power(4));
  // → 16
  //console.log(power(2, 6));
  // → 64

//aqui, a funcao multiplier retorna uma funcao. Ou seja, twice vai ser
//uma funcao que faz number = number*factor
  // function multiplier(factor) {
  //   return number => number * factor;
  // }
  
  // let twice = multiplier(2);
  // console.log(twice(5));
  // // → 10

  // //jeitos de fazer função

  // const f = function(a) {
  //   console.log(a + 2);
  // };
  
  // // Declare g to be a function
  // function g(a, b) {
  //   return a * b * 3.5;
  // }

  countB("bbbbbbbbbbbbB", "B");
  function countB(str, oChar){
    let count =0;
    for(let i=0; i< str.length; i++){
      if(str[i]===oChar) count++;
    }
    console.log(count);
    
  }

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]

let anObject = {right1111: 1, right: 2};
console.log(anObject.right1111);
// → 1
delete anObject.right1111;
console.log(anObject.right1111);
// → undefined
console.log("right1111" in anObject);
// → false
console.log("right" in anObject);
// → true

console.log(Object.keys(anObject)); //retorna uma lista de strings
//com as propriedades do anObject



let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10


let event = "alo";
array = ["alo", "tchar"];
console.log(array.includes(event));



//laço for duas formas diferentes
// for (let i = 0; i < JOURNAL.length; i++) {
//   let entry = JOURNAL[i];
//   // Do something with entry
// }
// for (let entry of JOURNAL) {
//   console.log(`${entry.events.length} events.`);
// }

//fazem a mesma coisa^



//push e pop colocam e tiram coisas no fim do array
//pra por e tirar no começo eh shift e unishift


console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3

console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]



//funcao pra tirar um elemento do array
function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]
//concat junta 2 arrays

console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5
console.log("one two three".indexOf("ee"));
// → 11

console.log("  okay \n ".trim());
// → okay
//trim tira espaço, tab, newline e tal

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping

//esses 3 pontos antes de numbers quer dizer que a funcao aceita
//qualquer quantidade de parametros(basta por 3 pontinhos antes
//do ultimo parametro)
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));
// → 9

let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7

function randomPointOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return {x: radius * Math.cos(angle),
          y: radius * Math.sin(angle)};
}
console.log(randomPointOnCircle(2));
// → {x: 0.3667, y: 1.966}

let {name} = {name: "Faraji", age: 23};
console.log(name);
// → Faraji


function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);
// → 0
// → 1
// → 2


function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1

function unless(test, then) {
  if (!test) then();
}

repeat(3, n => {
  unless(n % 2 == 1, () => {
    console.log(String(n) + " is even");
  });
});
// → 0 is even
// → 2 is even

["A", "B"].forEach(l => console.log(l));
// → A
// → B            esse método eh soh pra array

//supondo que SCRIPTS seja uma colecao de scripts com alguns
//dados de idiomas
//function map(array, transform) {
//   let mapped = [];
//   for (let element of array) {
//     mapped.push(transform(element));
//   }
//   return mapped;
// }

// let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
// console.log(map(rtlScripts, s => s.name));
// → ["Adlam", "Arabic", "Imperial Aramaic", …] isso mapeia o SCRIPTS

//map e filter são built-in
let array4 = ["Rato", "roger", "alo"];

function funcao(str){
  if(str[0]==='R') return true;
  return false;
}

console.log(array4.map(funcao));
array4.map

// console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// // → 10

// //se seu array tiver pelo menos um elemento, nao precisa por a
// //posicao de start no final

// console.log([1, 2, 3, 4].reduce((a, b) => a + b));
// // → 10

// function average(array) {
//   return array.reduce((a, b) => a + b) / array.length;
// }

