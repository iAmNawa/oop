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

console.log(Object.keys(c1));
