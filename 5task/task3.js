let question1 = "JavaScript появился в 1995 году?";
let answer1 = true;
let userAnswer1 = confirm(question1);

if (userAnswer1 === answer1) {
    alert("Верно");
} else {
    alert("Неверно, JavaScript появился в 1995 году.");
}

let question2 = "Спецификация JavaScript называется ECMAScript?";
let answer2 = true;
let userAnswer2 = confirm(question2);

if (userAnswer2 === answer2) {
    alert("Верно");
} else {
    alert("Неверно, спецификация JavaScript называется ECMAScript.");
}

let question3 = "JavaScript был создан за 1 месяц?";
let answer3 = false;
let userAnswer3 = confirm(question3);

if (userAnswer3 === answer3) {
    alert("Верно");
} else {
    alert("Неверно, JavaScript не был создан за 1 месяц.");
}