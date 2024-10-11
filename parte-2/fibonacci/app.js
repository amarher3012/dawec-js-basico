const num1 = parseInt(prompt('Introduce un numero'));

const fibonacci = (num1) => {
  let fib = [];

  for (let i = 0; i < num1; i++) {
    if (i === 0) {
      fib.push(0);
    } else if (i === 1) {
      fib.push(1);
    } else {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
  }
  return fib;
};

alert(fibonacci(num1));
