/*
Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 15%, можете использовать метод forEach
*/

'use strict';

let discount = 15; // скидка в %
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (product) {
    let newPrice = product.price * (1 - discount / 100);
    console.log(`Цена со скидкой ${discount}% составляет ${newPrice} (${product.price})`);
});