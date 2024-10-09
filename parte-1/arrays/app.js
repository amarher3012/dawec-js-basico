// Arrays
const userInput = prompt('Introduce tantos numeros como quieras separados por una coma');
const arr = userInput.split(',').sort((a, b) => a - b); // .split() separa los numeros en un array dado el argumento ','

console.log(Math.max(...arr)); // Utilizando una copia (...arr), buscamos el maximo dentro de este