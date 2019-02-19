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

  getPointAtOffset(x1, y1): object {
    return new Point(this.x + x1, this.y + y1);
  }

  getDistance(point): number {
    return Math.sqrt(Math.pow((this.x + x1), 2) + Math.pow((this.y + y1), 2));
  }

}

//
// class Shape {
//     /**
//      * @param {Point} center
//      */
//     constructor(center) {
//         this._center = center;
//     }
// }
//
// class Polygon extends Shape {
//     /**
//      * @param {Point} center
//      * @param {points[]} points
//      */
//     constructor(center, points) {
//         super(center);
//         this._points = points;
//     }
// }
//
// class Rectangle extends Polygon {
//     /**
//      *
//      * @param {Point} center
//      * @param {number} width
//      * @param {number} height
//      */
//     constructor(center, width, height) {
//         super(center);
//         this._width = width;
//         this._height = height;
//     }
//
//     /**
//      *
//      * @returns {number}
//      */
//     getPerimeter() {
//         return 2 * (this._width + this._height);
//     }
//
//     /**
//      *
//      * @returns {number}
//      */
//     getArea() {
//         return this._width * this._height;
//     }
// }
//
// class Square extends Rectangle {
//     /**
//      *
//      * @param {number} center
//      * @param {number} width
//      */
//     constructor(center, width) {
//         super(center, width, width);
//     }
// }
//
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



