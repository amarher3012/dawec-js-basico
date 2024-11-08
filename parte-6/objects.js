// Ejercicio 1

const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

console.log(user);

// Ejercicio 2

const isEmpty = (obj) => {
    if (Object.keys(obj).length > 0) {
        return true;
    }
    return false;
};

console.log(isEmpty(user));

// Ejercicio 3

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};
let sum = 0;

const salariesSum = (obj) => {
    for (const key in obj) {
        sum += obj[key];
    }
    return sum;
};

console.log(salariesSum(salaries));

// Ejercicio 4

const menu = {
    width: 200,
    height: 300,
    title: 'Mi menú',
};

const multiplyNumeric = (obj) => {
    for (const key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] = obj[key] * 2;
        }
    }
    return obj;
};

console.log(multiplyNumeric(menu));
