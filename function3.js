function splitString(str, maxLength) {
    if (str.length > maxLength) {
    return str.slice(0, maxLength - 3) + "...";
  }
}

var str = prompt("Введите строку:");
var maxLength = prompt("Введите максимальную длину:");

alert("Укороченная строка: \n" + splitString(str, +maxLength));
