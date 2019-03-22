function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function() {
    console.log('hello')
  }
  this.draw = function() {
    console.log(defaultLocation);
    computeOptimumLocation();
  }
}
const circle = new Circle(10);
circle.draw();
