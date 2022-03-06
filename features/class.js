var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(age) {
        this.age = age;
    }
    Person.prototype.sayName = function () {
        console.log('My name is Zulfizar');
    };
    Person.prototype.sayAge = function () {
        console.log('I am 20 years old.');
    };
    Person.prototype.setAge = function () {
        this.age = this.age + 1;
    };
    return Person;
}());
var somebody = new Person(19);
somebody.sayAge();
var Zulfizar = /** @class */ (function (_super) {
    __extends(Zulfizar, _super);
    function Zulfizar(age) {
        return _super.call(this, age) || this;
    }
    Zulfizar.prototype.myBirthday = function () {
        return new Date();
    };
    Zulfizar.prototype.sayToday = function () {
        console.log(this.myBirthday());
    };
    Zulfizar.prototype.sayAge = function () {
        this.setAge();
        console.log(this.age);
    };
    return Zulfizar;
}(Person));
var me = new Zulfizar(20);
me.sayToday();
me.sayAge();
