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

// Ejercicio 6
doc.addEventListener('mousemove', (event) => {
  cX.textContent = 'X:' + event.clientX;
  cY.textContent = 'Y:' + event.clientY;
});

// Ejercicio 7

c1.addEventListener('mouseenter', () => {
  c2.addEventListener('mouseenter', () => {
    c2.style.backgroundColor = 'red';
  });
});

c3.addEventListener('mouseenter', () => {
  c2.addEventListener('mouseenter', () => {
    c2.style.backgroundColor = 'blue';
  });
});

c2.addEventListener('mouseleave', () => {
  c2.style.backgroundColor = 'white';
  c2.addEventListener('mouseenter', () => {
    c2.style.backgroundColor = 'white';
  });
});

// Ejercicio 8
