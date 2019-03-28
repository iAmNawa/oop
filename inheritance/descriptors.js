let person = { name: 'Paul', age: 31 };
console.log(person);
let objectBase = Object.getPrototypeOf(person);
console.log(objectBase);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);
