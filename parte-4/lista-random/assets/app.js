const textInput = document.getElementById('inputName');
const addButton = document.getElementById('addBtn');
const randButton = document.getElementById('randomBtn');

const createEl = () => {
  const input = textInput.value;
  const ul = document.getElementById('nameList');
  const li = document.createElement('li');

  if (input === '') {
    alert('No has introducido un valor');
  } else {
    li.textContent = input;
    ul.appendChild(li);
  }
};

const clear = () => {
  textInput.value = '';
};

addButton.addEventListener('click', () => {
  createEl();
  clear();
});

randButton.addEventListener('click', () => {
  const numList = document.querySelectorAll('li');
  const random = () => Math.floor(Math.random() * numList.length);

  numList.forEach((li) => (li.style.backgroundColor = 'white'));
  numList[random()].style.backgroundColor = 'green';
});
