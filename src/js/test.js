"use strict";
var Student = /** @class */ (function () {
    function Student(fiestName, lastName) {
        this.firstName = fiestName;
        this.lastName = lastName;
    }
    Student.prototype.greeter = function () {
        return "Hello,\u60A8\u597D" + this.firstName + this.lastName;
    };
    return Student;
}());
var user = new Student("王", "小je jejejdddddddd");
var ele = document.body || document.documentElement;
ele.innerHTML = user.greeter();
