const box = document.getElementById('box');
const button = document.getElementById('toggleBtn');

const toggleBox = () => {
  box.style.display = box.style.display === 'none' ? 'block' : 'none';
  button.textContent =
    button.textContent === 'Ocultar Caja' ? 'Mostrar Caja' : 'Ocultar Caja';
};

button.addEventListener('click', toggleBox);
