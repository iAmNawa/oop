function Circle(radius) {
  this.radius = radius;
  this.defaultLocation = { x: 0, y: 0 };
  this.computeOptimumLocation = function() {
    console.log('hello')
  }
  this.draw = function() {
    this.computeOptimumLocation();
  }
}
const circle = new Circle(10);
circle.draw();
