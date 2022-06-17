class Shape {
  constructor(x, y) {
    this.name = 'shape';
    this.move(x, y);
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }
  area() {
    return this.radius * this.radius * Math.PI;
  }
}
const c = new Circle(0, 0, 10);
console.log(c.area());
