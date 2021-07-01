/*
1. (это задание делайте по желанию) Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
{
units: 5, //это единицы
tens: 4, //это десятки
hundreds: 0, //это сотни
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

"use strict";
/**
 * Функция преобразует число в диапазоне [0, 999] в объект, разбивая его по разрядам
 * @param {Number} userNumber 
 * @returns {Object} Объект с разрядами числа или пустой в случае ошибки
 */
function convertNumber(userNumber) {
    if (Number.isInteger(userNumber) && userNumber >= 0 && userNumber < 1000) {
        return {
            units: userNumber % 10,
            tens: Math.floor(userNumber / 10) % 10,
            hundreds: Math.floor(userNumber / 100) % 10
        };
    }
    console.log("Нужно было указать положительное целое число в диапазоне [0, 999]");
    return {};
}

console.log(convertNumber(0));
console.log(convertNumber(6));
console.log(convertNumber(56));
console.log(convertNumber(456));
console.log(convertNumber(1000));
console.log(convertNumber(-10));