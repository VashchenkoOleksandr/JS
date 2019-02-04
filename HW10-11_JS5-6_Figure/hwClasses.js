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
  constructor(x, y) {
    console.log('Create the Point constructor');
    this.test_x = `Point X in class Point constructor ${x}`;
    this._x = x;
    this.test_y = `Point Y in class Point constructor ${y}`;
    this._y = y;
  }

  myPoint() {
    console.log(`Point x ${this._x}; Point y ${this._y}`)
  }
}


const point = new Point(5, 6);
const point2 = new Point(5, 6);

console.log(`Type of Point class: ${typeof Point}`);
console.log(`Point x: ${point.test_x}`);
console.log(`Point y: ${point.test_y}`);
console.log(`Point y: ${point2.test_y}`);
console.log(`Point y: ${point2.test_y}`);
point.myPoint();
