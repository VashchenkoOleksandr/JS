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

class Point {
  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  getDistance(point) {
    return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2));
  }

  takePoints(x1, y1) {
    return new Point(this.x + x1, this.y + y1);
  }
}

class Shape {
  get center() {
    return this._center;
  }

  constructor(center) {
    this._center = center;
  }
}

class Polygon extends Shape {
  constructor(center, points) {
    super(center);
    this._points = points;
  }

  get points() {
    return this._points;
  }

  perimeter() {
    this._sides = [];
    this._perimeter = 0;
    for (let i = 0; i < this._points.length; i++) {
      if (i === this._points.length - 1) {
        this._sides[i] = +((this._points[i].getDistance(this._points[0])).toFixed(2));
      } else {
        this._sides[i] = +((this._points[i].getDistance(this._points[i + 1])).toFixed(2));
      }
      this._perimeter = this._perimeter + this._sides[i];
    }
    return this._perimeter;
  }
}

const center = new Point(25, 10);
const points = [];

for (let i = 0; i < 6; i++) {
  const rand = (Math.random() * 100 + 2).toFixed();
  points[i] = new Point(+rand + 1, +rand - 1);
}

const polygonResult = new Polygon(center, points);
document.querySelector('#result').innerHTML = `Polygon perimeter result: ${Math.round(polygonResult.perimeter() * 100) / 100}`;
console.log(Math.round(polygonResult.perimeter() * 100) / 100);
