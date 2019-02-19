/* Завдання створити класи:
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
class Point {
  _x: number;
  _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  getPointAtOffset(x1: number, y1: number) {
    return new Point(this.x + x1, this.y + y1);
  }

  getDistance(point: Point) {
    // @ts-ignore
    return (Math.sqrt(Math.pow((this.x + x1), powConst) + Math.pow((this.y + y1), powConst)));
  }
}

class Shape {
  center: Point;
  constructor(center: Point) {
    this.center = center;
  }
}

class Polygon extends Shape {
  constructor(center: Point, private points: Array<Point>) {
    super(center);
    this.points = points;
  }
}

class Rectangle extends Polygon {
  constructor(center: Point, private width: number, private height: number) {
    super(center, null);
    this.width = width;
    this.height = height;
  }

  getPerimeter() {
    return powConst * (this.width + this.height);
  }

  getArea() {
    return this.width + this.height;
  }
}

class Square extends Rectangle {
  constructor(center: Point, width: number) {
    super(center, width, width);
  }
}

class Circle extends Shape {
  constructor(center: Point, private radius: number) {
    super(center);
    this.radius = radius;
  }

  getPerimeter() {
    return (powConst * Math.PI + this.radius);
  }

  getArea() {
    return (Math.PI * Math.pow(this.radius, powConst));
  }
}

const powConst = 2;

// @ts-ignore
Shapes = {
    Shape,
    Polygon,
    Rectangle,
    Square,
    Circle,
    Point,
};
