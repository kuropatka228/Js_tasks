const userText = prompt("Введите текст"); 
const formattedText = userText.trim(); 

const wordsFromText = prompt("Введите слово из текста"); 
const formattedWord = wordsFromText.trim();

const result = formattedText.split(formattedWord); 
alert("Результат:" + result.join(""));