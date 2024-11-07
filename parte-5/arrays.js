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

// console.log(nums2);

// Ejercicio 5

const nums3 = [3, 6, 1, 2, 3];
const min = (arr, letter) => {
    let lowest = Infinity; // No habra errores si por ejemplo lowest = 9999 y nums3 = [1, 4, 1000000]
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i];
            index = i;
        }
    }
    if (letter === 'v') {
        return lowest;
    } else if (letter === 'i') {
        return index;
    }
};

console.log(min(nums3, 'i'));

// Ejercicio 6

const contains = (letter, arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === letter) {
            return true;
        }
    }
    return false;
};

console.log('contains: ', contains('r', ['e', 'd', 'r', 'f']));

// Ejercicio 7

const isVowel = (letter) => {
    const vowels = ['a', 'e', 'o', 'u'];
    for (let i = 0; i < vowels.length; i++) {
        if (vowels[i] === letter.toLowerCase()) {
            return true;
        }
    }
    return false;
};

console.log('isVowel: ', isVowel('A'));

// Ejercicio 8
const arr = ['rojo', 'verde', 'azul'];

console.log(arr.join('-'));

// Ejercicio 9

const turnos = [
    ['lunes', 'Maria'],
    ['martes', 'Luis'],
    ['miercoles', 'Antonia'],
    ['jueves', 'Pedro'],
    ['viernes', 'Marisa'],
];

const getName = (arr, day) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === day) {
            return arr[i][1];
        }
    }
};

console.log('Encargado/a de este dia es', getName(turnos, 'lunes'));

// Ejercicio 10

const products = [
    ['monitor', 200],
    ['raton', 30],
    ['teclado', 100],
    ['silla', 250],
];

const getPrecio = (arr, name) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === name) {
            return arr[i][1];
        }
    }
};

console.log('El precio del producto es', getPrecio(products, 'monitor'));
