function fibonacci(num) {
  var a = 1,
    b = 1;
  for (var i = 3; i <= num; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}

var num = prompt("Введите номер числа:");

alert("Число последовательности Фибоначчи: \n" + fibonacci(+num));
