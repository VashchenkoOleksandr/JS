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
  /**
   * @param {Point} center
   */
  constructor(center) {
    this._center = center;
  }
}

class Polygon extends Shape {
  /**
   * @param {Point} center
   * @param {points[]} points
   */
  constructor(center, points) {
    super(center);
    this._points = points;
  }
}

class Rectangle extends Polygon {
  /**
   *
   * @param {Point} center
   * @param {width} width
   * @param {height} height
   */
  constructor(center, width, height) {
    super(center);
    this.width = width;
    this.height = height;
  }

  /**
   *
   * @returns {number}
   */
  getPerimeter() {
    return 2 * (this.width + this.height);
  }

  /**
   *
   * @returns {number}
   */
  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  /**
   *
   * @param center
   * @param width
   */
  constructor(center, width) {
    super(center, width);
    this.width = width;
  }
}

class Circle extends Shape {
  /**
   * @param {Point} center
   * @param {number} radius
   */
  constructor(center, radius) {
    super(radius);
    this._radius = radius;
  }

  /**
   *
   * @returns {number}
   */
  getPerimeter() {
    return 2 * Math.PI * this._radius;
  }

  /**
   *
   * @returns {number}
   */
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
