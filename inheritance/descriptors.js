let person = { name: 'Paul', age: 31 };
Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: false
});

person.name = 'Jon';
person.age = 51;

console.log(Object.keys(person))
