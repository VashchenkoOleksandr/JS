/** Завдання створити класи:
   *    фігура:
   *      координати:
   *      х, у
   *
   *    багатокутник -> фігура:
   *      вершини[координати],
   *      периметр()
   *
   *    прямокутник -> багатокутник:
   *      довжина,
   *      висота,
   *      площа(),
   *      периметр()
   *
   *    квадрат -> прямокутник:
   *      довжинаСторони,
   *      площа(),
   *      периметр()
   *
   *    круг -> фігура:
   *      радіус,
   *      площа(),
   *      периметр()
   */

// debugger;

class Point {
  constructor(x, y) {
    this._x = x;
    this._y = y;
    console.log(`Check X: ${this._x}`);
    console.log(`Check Y: ${this._y}`);
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  getPointAtOffset(x1, y1) {
    return new Point(this.x + x1, this.y + y1);
  }

  getDistance(point) {
    return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2));
  }
}


class Shape {
  constructor(center) {
    this._center = center;
  }
}

class Polygon extends Shape {
  constructor(center, points) {
    super(center);
    this._points = points;
  }
}

class Rectangle extends Polygon {
  constructor(center, width, height) {
    super(center);
    this.width = width;
    this.height = height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(center, width) {
    super(center, width, width);
    this.width = width;
  }

  getPerimeter() {
    return 4 * this.width;
  }

  getArea() {
    return this.width ** 2;
  }
}

class Circle extends Shape {
  constructor(center, radius) {
    super(radius);
    this._radius = radius;
  }

  getPerimeter() {
    return 2 * Math.PI * this._radius;
  }

  getArea() {
    return Math.PI * (this._radius ** 2);
  }
}

Shapes = {
  Shape,
  Polygon,
  Rectangle,
  Square,
  Circle,
  Point,
};
