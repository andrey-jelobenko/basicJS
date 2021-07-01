/*
1.2 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству highlighted значение true.
*/
"use strict"
// es5
function Postes5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Postes5.prototype.edit = function (newText) {
    this.text = newText;
}

function AttachedPostes5(author, text, date) {
    Postes5.call(this, author, text, date);
    this.highlighted = false;
}
AttachedPostes5.prototype = Object.create(Postes5.prototype);
AttachedPostes5.prototype.constructor = AttachedPostes5;
AttachedPostes5.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

// es6
class Postes6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(newText) {
        this.text = newText;
    }
}

class AttachedPostes6 extends Postes6 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let apObjes5 = new AttachedPostes5("Андрей es5", "Первоначальная запись es5", new Date());
console.log(apObjes5.author);
console.log(apObjes5.text);
console.log(apObjes5.date);
apObjes5.edit("Отредактированная запись es5");
console.log(apObjes5.text);
console.log(apObjes5.highlighted);
apObjes5.makeTextHighlighted();
console.log(apObjes5.highlighted);

let apObjes6 = new AttachedPostes6("Андрей es6", "Первоначальная запись es6", new Date());
console.log(apObjes6.author);
console.log(apObjes6.text);
console.log(apObjes6.date);
apObjes6.edit("Отредактированная запись es6");
console.log(apObjes6.text);
console.log(apObjes6.highlighted);
apObjes6.makeTextHighlighted();
console.log(apObjes6.highlighted);