/*
(По желанию, т.к. такая особенность практически не используется) Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла. То есть выглядеть должно примерно так:
for(…){ ... здесь пусто ... }
Помните, что в первом, втором и третьем раздела цикла можно не только писать условия, или увеличивать счетчик например на 1, допустимы любые выражения, например вызовы функций.
*/

'use strict';

const number = 10;
// это на мой взгляд самый простая реализация, если я правильно понял постановку задачи
for (let i = 0; i < number; console.log(i++)) { }