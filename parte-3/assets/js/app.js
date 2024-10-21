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
document.addEventListener('keypress', (e) => {
  if (e.key === '1') {
    ficha1.classList = 'visible';
    ficha2.classList = 'oculto';
    ficha3.classList = 'oculto';
  } else if (e.key === '2') {
    ficha2.classList = 'visible';
    ficha1.classList = 'oculto';
    ficha3.classList = 'oculto';
  } else if (e.key === '3') {
    ficha3.classList = 'visible';
    ficha1.classList = 'oculto';
    ficha2.classList = 'oculto';
  }
});

// Ejercicio 9
document.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    scrollBtn.classList = 'oculto';
  } else if (window.scrollY >= 25) {
    scrollBtn.classList = 'visible-scroll';
  }
});

// Ejercicio 10
letras.addEventListener('input', () => {
  if (/\d+/.test(letras.value)) {
    alert('Introduciste un numero');
    letras.value = letras.value.slice(0, -1);
  }
});
