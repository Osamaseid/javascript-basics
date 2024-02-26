// Example of manipulating arrays
let fruits = ["apple", "banana", "orange"];
fruits.push("grape");
fruits.pop();
fruits.shift();
fruits.unshift("pear");
fruits.splice(1, 1);

// Example of array iteration
fruits.forEach(function(fruit) {
  console.log(fruit);
});

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

let filteredNumbers = numbers.filter(function(number) {
  return number > 2;
});

let sum = numbers.reduce(function(total, number) {
  return total + number;
}, 0);