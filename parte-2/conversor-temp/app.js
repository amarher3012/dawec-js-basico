const input = prompt('Introduce F o C').toUpperCase();

const convertC = (temp) => (temp * 9) / 5 + 32;
const convertF = (temp) => ((temp - 32) * 5) / 9;

if (input === 'F') {
  const res1 = parseInt(prompt('Introduce la temperatura'));
  alert(convertF(res1));
} else if (input === 'C') {
  const res2 = parseInt(prompt('Introduce la temperatura'));
  alert(convertC(res2));
}
