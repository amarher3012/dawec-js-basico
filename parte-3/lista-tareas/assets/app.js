const textInput = document.getElementById('newTaskInput');
const addButton = document.getElementById('addTaskBtn');

const createEl = () => {
  const input = textInput.value;
  const ul = document.getElementById('taskList');
  const li = document.createElement('li');
  const delButton = document.createElement('button');

  if (input === '') {
    alert('No has introducido un valor');
  } else {
    li.textContent = input;
    ul.appendChild(li);
    li.append(delButton);
    
    delButton.className = 'deleteBtn'
    delButton.textContent = 'x';
    delButton.addEventListener('click', () => delButton.parentElement.remove());
  }
};

const clear = () => {
  textInput.value = '';
};

addButton.addEventListener('click', () => {
  createEl();
  clear();
});
