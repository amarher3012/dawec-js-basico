// Tipos de datos
// Datos primitivos

const greeting = 'Hola que tal?';
console.log('String: ', greeting);

const age = 25;
console.log('Int: ', age);

const bool = true;
console.log('Boolean: ', bool);

const nullValue = null;
const undefinedValue = undefined;
console.log('Valor nulo: ', nullValue);
console.log('Valor no definido: ', undefinedValue);

// Datos no primitivos

const obj = {
  id: 1,
  name: 'Objeto 1',
  price: 23.65,
  category: 'Test'
}
console.log('Objecto: ', obj);

const arr = ['Madrid', 'Barcelona', 'Sevilla', 'Huelva'];
// arr.forEach(el => console.log(el));
console.log('Array: ', arr);

// Variables

let favoriteColor = 'rojo';
console.log(favoriteColor);
favoriteColor = 'verde';
console.log(favoriteColor);

// Declaracion de variables

let var1;
const var2 = null;
console.log(var1, var2);

// Alcance de variables

const outside = 'Outside variable';
function insideFunction() {
  const inside = 'Inside variable';
}
console.log(outside);
// console.log(inside);

// Reglas de nomenclatura

const variableName = 'Variable con nomenclatura correcta';
// const null = 'Variable con nomenclatura erronea';
console.log(variableName, null);

// Operadores

const num1 = 4;
const num2 = 59;
console.log(num1 * num2 - num1);

// Strings

const text = 'Primera linea\nSegunda linea\tTexto con tabulacion';
console.log(text);
