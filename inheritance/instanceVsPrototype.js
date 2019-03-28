function Circle(radius) {
  // Instance members
  this.radius = radius;
  this.draw = function() {
    console.log('draw')
  }
}

// Prototype members
Circle.prototype.sketch = function() {
  console.log('sketch')
}

const c1 = new Circle(5);

// Returns instance members
console.log(Object.keys(c1));
// Returns all members
for (let key in c1) console.log(key);
