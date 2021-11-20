// spread operator
const numbers1 = [1, 2, 3, 4];
const numbers2 = [5, 6, 7, 8];
// const numbersTotal = [1, 2, 3, 4, 5, 6, 7, 8];
const numbersTotal = [...numbers1, ...numbers2];
console.log(numbersTotal);

// destructuring objects
const products = {
  name: "Laptop Lenovo",
  price: 1500,
  memory: "16 gb ram",
};
// const nameProduct = products.name;
// console.log(nameProduct); // laptop lenovo

const { name, price, memory } = products;

console.log(memory);

// destructuring arrays

const [num, , num2] = numbers1;
console.log(num2);
