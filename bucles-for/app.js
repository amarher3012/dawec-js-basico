// Bucles for
console.log('Imprimiendo del 20 al 30');
for (let i = 20; i <= 30; i++) {
  console.log(i);
}

console.log('Imprimiendo los pares del 30 al 50');
for (let i = 30; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let sum = 0;
for (let i = 0; i <= 50; i++) {
  sum += i;
}
console.log('El resultado de la suma es: ', sum);

console.log('Tabla de multipllicar del 8');
for (let i = 0; i <= 10; i++) {
  console.log(`8 * ${i} = `, 8 * i);
}

console.log('Elementos de un array')
const arr = [1, 3, 5, 7, 8];
arr.forEach(el => console.log(el));

console.log('Asteriscos');
for (let i = 0; i <= 9; i++) {
  let pyramid = '';
  for (let j = 9; j > i; j--) {
    pyramid += ' ';
  }
  for (let k = 0; k <= i; k++) {
    pyramid += '*' + ' ';
  }
  console.log(pyramid);
  pyramid = '';
}

console.log('Numeros pares del 1 al 50');
let res = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    res += i;
  }
}
console.log(res);

console.log('Numeros del 30 al 20 en orden descendente');
for (let i = 30; i >= 20; i--) {
  console.log(i);
}

console.log('Promedio de un array');
const arr2 = [4, 2, 6, 1, 9];
const rounded = arr2.reduce((temp, el) => temp + el, 0) / arr2.length; // .reduce() reduce el array a un numero utiliza 2 argumentos, un callback y el comienzo (..., 0)
console.log(rounded);
