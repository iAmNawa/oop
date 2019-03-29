function Shape() {
  Shape.prototype.duplicate = function() {
    console.log('duplicate')
  }
}

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.draw = function() {
  console.log('draw')
}

function HalfCircle() {
  console.log('hello')
}

Circle.prototype = Object.create(Shape.prototype);
HalfCircle.prototype = Object.create(Circle.prototype);

const s = new Shape();
const c = new Circle(1);
const h = new HalfCircle();
h.duplicate()
