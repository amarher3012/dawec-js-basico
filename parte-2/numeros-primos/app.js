const num1 = parseInt(prompt('Introduce un numero'));
const num2 = parseInt(prompt('Introduce otro numero mayor que el anterior'));

const primeNums = (num1, num2) => {
  let result = [];

  for (let i = num1; i <= num2; i++) {
    let isPrime = true;

    if (i < 2) {
      continue;
    }

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      result.push(i);
    }
  }
  return result;
};

console.log(primeNums(num1, num2));
