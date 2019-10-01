"use strict";
exports.__esModule = true;
var Stack = /** @class */ (function () {
    function Stack() {
        this.data = [];
    }
    Stack.prototype.push = function (record) {
        this.data.push(record);
    };
    Stack.prototype.pop = function () {
        return this.data.pop();
    };
    Stack.prototype.size = function () {
        return this.data.length;
    };
    Stack.prototype.search = function (record) {
        return this.data.findIndex(record);
    };
    Stack.prototype.isEmpty = function () {
        return (this.data.length) === 0;
    };
    Stack.prototype.peek = function () {
        return this.data[this.data.length - 1];
    };
    return Stack;
}());
exports.Stack = Stack;
