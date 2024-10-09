// Estructuras de control
// Condicionales

console.log('Condicionales');
const num1 = 4;
if (num1 > 0) {
  console.log('Positivo');
} else if (num1 < 0) {
  console.log('Negativo');
} else {
  console.log('0');
}

const age = 4;
if (age < 18) {
  console.log('Menor de edad');
} else if (age > 18 && age < 65) {
  console.log('Adulto');
} else {
  console.log('Anciano');
}

// Bucles

console.log('Bucles');
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let x = 0;
while (x < 5) {
  console.log(x);
  x++;
}

let y = 0;
do {
  console.log(y);
  y++;
} while (y < 5);

// Interrupcion de bucles

console.log('Interrupcion de bucles');
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

for (let j = 0; j < 5; j++) {
  if (j === 2) {
    continue;
  }
  console.log(j);
}

// Condicional switch

console.log('Switch');
const userInput = parseInt(prompt('Introduce un numero del 1 al 12')); // El resultado de promt es un String hay que convertirlo a Int
switch (userInput) {
  case 1:
    console.log('Enero');
    break;

  case 2:
    console.log('Febrero');
    break;

  case 3:
    console.log('Marzo');
    break;

  case 4:
    console.log('Abril');
    break;

  case 5:
    console.log('Mayo');
    break;

  case 6:
    console.log('Junio');
    break;

  case 7:
    console.log('Julio');
    break;

  case 8:
    console.log('Agosto');
    break;

  case 9:
    console.log('Septiembre');
    break;

  case 10:
    console.log('Octubre');
    break;

  case 11:
    console.log('Noviembre');
    break;

  case 12:
    console.log('Diciembre');
    break;
}
