// Ejercicio 1
const weekDays = [
  'domingo',
  'lunes',
  'martes',
  'miercoles',
  'jueves',
  'viernes',
  'sabado',
];

const input = parseInt(prompt('Introduce un numero del 1 al 7')) - 1;

alert('Es ' + weekDays[input]);

// Ejercicio 2

const booleans = ['Verdadero', 'Falso'];
const input2 = parseInt(prompt('Introduce otro numero del 0 al 9'));
const boolTest = (input) => {
  if (input >= 0 || input <= 9) {
    alert(booleans[0]);
  } else {
    alert(booleans[1]);
  }
};

boolTest(input2);

// Ejercicio 3

const nums = [2, 4, 5, 1, 2];
const sumaLista = (arr) => {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  alert(res);
};

sumaLista(nums);

// Ejercicio 4

const nums2 = [];
let count = 0;
while (true) {
  const input2 = parseInt(prompt('Introduce numeros'));
  if (isNaN(input2) || input2 === 0) {
    break;
  }
  nums2[count] = input2;
  count++;
}

console.log(nums2);
