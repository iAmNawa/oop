// Constructor Function
function Circle(radius) {
  console.log(radius)
  this.radius = radius;
  this.draw = function() {
    console.log('draw')
  }
}

let circle = new Circle(1);
circle.draw();
console.log(circle.radius);
