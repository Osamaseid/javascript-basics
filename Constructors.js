
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Creating instances of Person using the constructor
var person1 = new Person('someone', 25);
var person2 = new Person('anotherone', 30);

// Accessing properties of the instances
console.log(person1.name); // Output: "someone"
console.log(person1.age); // Output: 25

console.log(person2.name); // Output: "anotherone"
console.log(person2.age); // Output: 30
