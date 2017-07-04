function firstCharToUpperCase(yourString) {
    var upperFirstSymbol = yourString.charAt(0).toUpperCase();
	return upperFirstSymbol + yourString.slice(1);
}

var yourString = prompt("Введите строку со строчной буквы:");
alert("Ваша строка с заглавной буквы: \n" + firstCharToUpperCase(yourString));
