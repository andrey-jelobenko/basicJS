/*
Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1. Получить все товары, у которых есть фотографии, можете использовать метод filter
2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
*/

'use strict';

const products = [
    {
        id: 3,
        price: 127,
        photos: ["1.jpg", "2.jpg",]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: ["3.jpg"]
    },
    {
        id: 8,
        price: 78,
    },
];
let photosProducts = [];

// 1. Получить все товары, у которых есть фотографии, можете использовать метод filter
photosProducts = products.filter(function (product) {
    if (product.photos == undefined) return false;
    else if (product.photos.length > 0) return true;
    return false;
});
console.log(photosProducts);

// 2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
products.sort(function (a, b) {
    return a.price - b.price;
});
console.log(products);