// Ejercicio 1
const week_days = [
  'domingo',
  'lunes',
  'martes',
  'miercoles',
  'jueves',
  'viernes',
  'sabado',
];

const input = parseInt(prompt('Introduce un numero del 1 al 7')) - 1

alert("Es " + week_days[input])

// Ejercicio 2

const booleans = ['Verdadero', 'Falso']
const input2 = parseInt(prompt('Introduce otro numero del 0 al 9'))
const bool_test = (input) => {
  if (input >= 0 || input <= 9) {
    alert(booleans[0])
  } else {
    alert(booleans[1])
  }
}
  
bool_test(input2)