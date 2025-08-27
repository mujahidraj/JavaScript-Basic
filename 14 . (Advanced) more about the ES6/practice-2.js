const arr = [33, 50, 79, 78, 90, 101, 30];

const divisibleByTen = arr.filter(num => num % 10 === 0);

const selectedDivisibleByTen = arr.find(num => num % 10 === 0);

console.log(divisibleByTen);
console.log(selectedDivisibleByTen);