function longestWord(sentence) {
  var arrayWords = sentence.split(' ');
  var qntWords = arrayWords.length;
  var longestWord = "";
  var currentWord = "";
  for(var i = 0; i < qntWords; i++){
    currentWord = arrayWords[i];
    if(currentWord.length > longestWord.length){
	    longestWord = currentWord;
    }
  }
  return longestWord;
}

var sentence = prompt("Введите предложение:");

alert("Самое длинное слово: \n" + longestWord(sentence));
