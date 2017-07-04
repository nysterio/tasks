function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var min = prompt("Введите минимальное число:");
var max = prompt("Введите максимальное число:");

alert("Случайное число: \n" + randomNumber(+min, +max));
