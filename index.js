// const kelvin is the variable being assigned the value of 293
const kelvin = 293;
// const kelvin is the variable being assigned the value of kelvin - 273
const celsius = kelvin - 273;
// Fahrenheit calculated by Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius * (9 / 5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// Convert to Newton
let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);

