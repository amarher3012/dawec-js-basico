// Funciones
// Calcular radio y area

const radius = parseFloat(prompt('Introduce el radio de un circulo'));

const area = radius => 3.14 * Math.pow(radius, 2); 
const perimeter = radius => 2 * 3.14 * radius;

console.log(area(radius));
console.log(perimeter(radius));

// Elevar
const base = parseFloat(prompt('Introduce un numero'));
const exp = parseFloat(prompt('Introduce otro numero'));

const calculatePower = (base, exp) => Math.pow(base, exp);
console.log(calculatePower(base, exp));