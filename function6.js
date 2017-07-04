function changeDirection(str) {
  var length = str.length;
  var newStr = str;
  for (var i = 0; i < length - 1; i++){
      newStr = newStr.substring(0, i) + newStr.charAt(length - 1) + newStr.substring(i, length - 1);
      //console.log(newStr);
  }
  return newStr;
}

var str = prompt("Введите строку:");

alert("Перевернутая строка: \n" + changeDirection(str));
