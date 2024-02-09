let question1 = "Сколько будет 2 + 2?";
let answer1 = 4;

let question2 = "Сколько будет 2 * 2?";
let answer2 = 4;

let question3 = "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?";
let answer3 = 1;

let question4 = "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?";
let answer4 = 12;

let question5 = "Сколько будет 2 + 2 * 2?";
let answer5 = 6;

// Переменные для подсчета правильных и неправильных ответов

let correctAnswers = 0;
let incorrectAnswers = 0;

let userAnswer;

userAnswer = Number(prompt(question1));
if (userAnswer === answer1) {
    alert("Ответ Верный");
    correctAnswers++;
} else {
    alert("Ответ Неверный");
    incorrectAnswers++;
}

userAnswer = Number(prompt(question2));
if (userAnswer === answer2) {
    alert("Ответ Верный");
    correctAnswers++;
} else {
    alert("Ответ Неверный");
    incorrectAnswers++;
}

userAnswer = Number(prompt(question3));
if (userAnswer === answer3) {
    alert("Ответ Верный");
    correctAnswers++;
} else {
    alert("Ответ Неверный");
    incorrectAnswers++;
}

userAnswer = Number(prompt(question4));
if (userAnswer === answer4) {
    alert("Ответ Верный");
    correctAnswers++;
} else {
    alert("Ответ Неверный");
    incorrectAnswers++;
}

userAnswer = Number(prompt(question5));
if (userAnswer === answer5) {
    alert("Ответ Верный");
    correctAnswers++;
} else {
    alert("Ответ Неверный");
    incorrectAnswers++;
}

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`);