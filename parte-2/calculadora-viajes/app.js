const alojamiento = parseFloat(prompt('Gastos de alojamiento'));
const alimentacion = parseFloat(prompt('Gastos de alimentacion'));
const entretenimiento = parseFloat(prompt('Gastos de entretenimiento'));

const total = (alojamiento + alimentacion + entretenimiento).toFixed(2); // .toFixed() redondea a 2 decimales pero devuelve un String

alert(`El coste total del viaje es: ${total}€`);
