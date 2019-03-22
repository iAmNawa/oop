// Constructor Function
console.log(this)
function Circle(radius) {
  console.log(this)
  this.radius = radius;
  this.draw = function() {
    console.log('draw')
  }
}

circle = new Circle(1);
circle.draw();
console.log(circle.radius);
