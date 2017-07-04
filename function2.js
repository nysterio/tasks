function quantitySubstring(str, substr) {
    var quantity = 0;
    var strLength = str.length;
    
    for(var index = 0; index < strLength; index++){
        index = str.indexOf(substr, index);
        if(index !== -1) {
            quantity++;
        }
        else return quantity;   
    }
}

var str = prompt("Введите строку:");
var substr = prompt("Введите подстроку:");

alert("Количество вхождений подстроки: \n" + quantitySubstring(str, substr));
