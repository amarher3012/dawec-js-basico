const button = document.getElementById('ver-mas-boton');
const text = document.getElementById('texto-informatica');

const wordArray = [
  'Code is poetry.',
  'Data drives decisions.',
  'Stay curious, stay coding.',
  'Think twice, code once.',
  'Innovation over imitation.',
  'Automate the boring stuff.',
  'Less code, more impact.',
  'Debugging is half the battle.',
  'Build, test, iterate.',
  'Trust the process, not the code.',
];

const colores = [
  '#ff0000', // Rojo
  '#00ff00', // Verde
  '#0000ff', // Azul
  '#ff00ff', // Magenta
  '#00ffff', // Cyan
  '#ff8000', // Naranja
  '#8000ff', // Morado
  '#00ff80', // Verde claro
  '#ff0080', // Rosa
  '#80ff00', // Verde lima
  '#0080ff', // Azul claro
  '#ffbf00', // Amarillo oscuro
  '#bf00ff', // Violeta oscuro
  '#00ffbf', // Turquesa
  '#bf00ff', // Púrpura
  '#00bfff', // Azul claro
  '#ff00bf', // Magenta oscuro
  '#80ff80', // Verde claro pastel
  '#ff80ff', // Rosa pastel
  '#80ffff', // Cian claro
];

const random = (max) => Math.floor(Math.random() * max);

button.addEventListener('click', () => {
  text.innerText = wordArray[random(wordArray.length)];
  text.style = `color: ${colores[random(colores.length)]}`;
});
