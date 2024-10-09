const num1 = parseInt(prompt('Introduce un numero'));

const factorial = (num1) => {
  let res = 1;

  for (let i = 1; i <= num1; i++) {
    res *= i;
  }
  return res;
}

alert(factorial(num1));