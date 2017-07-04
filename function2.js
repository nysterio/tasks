function qntSubstr(str, substr) {
    var qnt = 0;
    var subLength = substr.length;

    var i = 0;

    while(str.indexOf(substr, i) != -1) {
        qnt++;
        i = str.indexOf(substr, i) + subLength + 1;  
    }
    return qnt;
}

var str = prompt("Введите строку:");
var substr = prompt("Введите подстроку:");

alert("Количество вхождений подстроки: \n" + qntSubstr(str, substr));
