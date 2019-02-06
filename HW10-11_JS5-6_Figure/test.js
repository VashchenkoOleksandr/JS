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

// training code start

// debugger;

console.log('Training code 1');
class testPoint {
  constructor(x, y) {
    this.some_x = x;
    this.some_y = y;
    this.test_x = `Point X in class Point constructor test_x ${x}`;
    this.test_y = `Point Y in class Point constructor test_y ${y}`;
  }

  myPoint() {
    console.log(`Point x ${this.some_x}; Point y ${this.some_y}`);
  }
}

const point = new testPoint(10, 20);
const point2 = new testPoint(15, 25);
const textVar = new testPoint('text1', 'text2');

console.log(`Type of Point class: ${typeof testPoint}`);
console.log(`Point x: ${point.some_x}`);
console.log(`Point y: ${point.some_y}`);
console.log(`Point y: ${point2.test_x}`);
console.log(`Point y: ${point2.test_y}`);
console.log(`Txt1: ${textVar.some_x}`);
console.log(`Txt2: ${textVar.some_y}`);
console.log('Result point.myPoint()');
point.myPoint();
console.log('Result point2.myPoint()');
point2.myPoint();
console.log(`Type of point.myPoint(): ${typeof point.myPoint()}`);
console.log(`Type of point: ${typeof point}`);
console.log('|');
console.log('|');
console.log('Training code 2');
class txtText {
  constructor(someTxt = txtText.getDefaultValue()){
    this.someTxt = someTxt;
    this._someTxt = someTxt;
    this._status = false;
    console.log('Start text training code');
  }

  get status() {
    return this._status === true ? 'Complete' : 'In process';
  }

  set status(value){
    (typeof value === 'number') ? this._status = true : this._status = false;
  }

  process(){
    this.status = 12312;
    console.log(`It is text in the txtText ${this.someTxt}`);
  }

  static getDefaultValue() {
    return 'Default value';
  }
}

let txt = new txtText('Main text');

console.log(txt.status, txt._status);
txt.process();
console.log(txt.status, txt._status);
console.log(`Typeof static getDefaultValue(return 'Default value'): ${typeof txtText.getDefaultValue()}`);
console.log('|');
console.log('|');
console.log('V');
console.log('HW Classes');
// training code END
