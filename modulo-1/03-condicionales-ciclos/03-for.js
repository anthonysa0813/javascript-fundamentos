const countries = ["Peru", "Chile", "Bolivia", "México"];
const numbers = [1, 2, 3, 4, 5];
// console.log(countries[countries.length - 1]);
// countries.length = 4

for (let i = 4; i < countries.length; i++) {
  console.log(countries[i]);
}

// **

for (let x = 0; x < numbers.length; x++) {
  console.log(numbers[x] ** 2);
}

// Ecma
const numbers2 = numbers.map((x) => x ** 2);
console.log({
  numbers2: numbers2,
});
