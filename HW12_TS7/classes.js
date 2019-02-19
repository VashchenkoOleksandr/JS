var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.xPoint = x;
        this.yPoint = y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this.xPoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this.yPoint;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.getPointAtOffset = function (x1, y1) {
        return new Point(this.x + x1, this.y + y1);
    };
    Point.prototype.getDistance = function (point) {
        return +(Math.sqrt(Math.pow((this.x + x1), powConst) + Math.pow((this.y + y1), powConst)));
    };
    return Point;
}());
var Shape = /** @class */ (function () {
    function Shape(center) {
        this.center = center;
    }
    return Shape;
}());
var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    function Polygon(center, points) {
        var _this = _super.call(this, center) || this;
        _this.points = points;
        _this.points = points;
        return _this;
    }
    return Polygon;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(center, width, height) {
        var _this = _super.call(this, center, null) || this;
        _this.width = width;
        _this.height = height;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getPerimeter = function () {
        return powConst * (this.width + this.height);
    };
    Rectangle.prototype.getArea = function () {
        return this.width + this.height;
    };
    return Rectangle;
}(Polygon));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(center, width) {
        return _super.call(this, center, width, width) || this;
    }
    return Square;
}(Rectangle));
var powConst = 2;
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
