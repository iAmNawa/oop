let person = { name: 'Paul', age: 31 };
Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: false,
  configurable: false
});

person.name = 'Jon';
person.age = 51;
delete person.name;

console.log(Object.keys(person))
