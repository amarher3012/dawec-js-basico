// Ejercicio 1
div.addEventListener('click', () => alert('Pulsaste el boton'));

// Ejercico 2
div2.addEventListener('mouseover', () => {
  div3.style.backgroundColor = 'green';
  div2.addEventListener('mouseout', () => {
    div3.style.backgroundColor = '';
  });
});

// Ejercicio 3
const calculate = () => {
  const input1Value = parseInt(input1.value);
  const input2Value = parseInt(input2.value);
  const res = input1Value * input2Value;

  total.value = res;
};

button1.addEventListener('click', calculate);

// Ejercicio 4
window.onload = () => {
  cuadro.addEventListener('mouseover', () => {
    cuadro.style.backgroundColor = 'red';
    cuadro.addEventListener('mouseout', () => {
      cuadro.style.backgroundColor = '';
    });
  });
};

// Ejercicio 5
buttons[0].addEventListener('click', () => alert(buttons[0].id));
buttons[1].addEventListener('click', () => alert(buttons[1].id));


