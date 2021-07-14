/*
1.1 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип (как объект transport в уроке).
*/

"use strict";

// es5
function ProductES5(name, price, discount) {
    this.name = name;
    this.price = price;
    this.discount = discount;
}
ProductES5.prototype.makePercentDiscountES5 = function () {
    this.price = this.price * (1 - this.discount / 100);
    console.log(`Цена товара "${this.name}": ${this.price} руб. Скидка составляет ${this.discount}%`);
}

// es6
class ProductES6 {
    constructor(name, price, discount) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
    makePercentDiscountES6() {
        this.price = this.price * (1 - this.discount / 100);
        console.log(`Цена товара "${this.name}": ${this.price} руб. Скидка составляет ${this.discount}%`);
    }
}

let product1ES5 = new ProductES5("игрушка", 100, 10);
product1ES5.makePercentDiscountES5();

let product1ES6 = new ProductES6("учебник", 500, 30);
product1ES6.makePercentDiscountES6();