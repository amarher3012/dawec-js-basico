const button = document.getElementById('addItemBtn');
const textInput = document.getElementById('newItemInput');
const list = document.getElementById('itemsList');

const createCompBtn = () => {
  const compButton = document.createElement('button');
  compButton.className = 'completeBtn';
  compButton.textContent = 'Complete';

  return compButton;
};

const createDelBtn = () => {
  const delButton = document.createElement('button');
  delButton.className = 'deleteBtn';
  delButton.textContent = 'Delete';

  return delButton;
};

const addItems = () => {
  const value = textInput.value;
  const li = document.createElement('li');

  if (value !== '') {
    list.appendChild(li).textContent = value;
    li.appendChild(createCompBtn());
    li.appendChild(createDelBtn());
  } else {
    alert('Introduce algo...');
  }
};

button.addEventListener('click', () => {
  addItems();
  createCompBtn();
  createDelBtn();
});
