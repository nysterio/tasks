function factorial(n) {
    var factorial = 1;
  for (var i = 1; i <= n; i++){
    factorial *= i;
  }
  return factorial;
}

var num = prompt("Введите число, факториал которого нужно посчитать:");

alert("Факториал числа: \n" + factorial(+num));
