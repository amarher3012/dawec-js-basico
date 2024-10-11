const ogPrice = parseFloat(prompt('Introduce el precio original'));
const discount = parseInt(prompt('Introduce el porcentaje de descuento'));

const discountedPrice = () => {
  const calc = ((discount / ogPrice) * 100).toFixed(2);
  return calc;
};

alert(
  `El precio despues de aplicar un ${discount}% de descuento es: ${discountedPrice()}€`
);
