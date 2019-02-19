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
  xPoint: number;
  yPoint: number;

  constructor(x: number, y: number) {
    this.xPoint = x;
    this.yPoint = y;
  }

  get x() {
    return this.xPoint;
  }

  get y() {
    return this.yPoint;
  }

  getPointAtOffset(x1: number, y1: number) {
    return new Point(this.x + x1, this.y + y1);
  }

  getDistance(point: Point) {
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


const powConst = 2;


// class Circle extends Shape {
//     /**
//      * @param {Point} center
//      * @param {number} radius
//      */
//     constructor(center, radius) {
//         super(center);
//         this._radius = radius;
//     }
//
//     /**
//      *
//      * @returns {number}
//      */
//     getPerimeter() {
//         return 2 * Math.PI * this._radius;
//     }
//
//     /**
//      *
//      * @returns {number}
//      */
//     getArea() {
//         return Math.PI * (this._radius ** 2);
//     }
// }
//
// Shapes = {
//     Shape,
//     Polygon,
//     Rectangle,
//     Square,
//     Circle,
//     Point,
// };
