const weight = parseFloat(prompt('Introduce tu peso'));
const height = parseFloat(prompt('Introduce to altura'));

const bmi = (weight / Math.pow(height, 2)).toFixed(2);

if (bmi < 18.5) {
  alert(`IMC: ${bmi}, Clasificacion: Bajo peso`);
} else if (bmi >= 18.5 && bmi < 25) {
  alert(`IMC: ${bmi}, Clasificacion: Normal`);
} else if (bmi >= 25 && bmi < 30) {
  alert(`IMC: ${bmi}, Clasificacion: Sobrepeso`);
} else if (bmi >= 30) {
  alert(`IMC: ${bmi}, Clasificacion: Obesidad`);
}
