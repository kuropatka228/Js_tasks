let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен, что пройду данный курс до конца!`;
a = myInfoText.replaceAll("JavaScript", "JavaScript".toUpperCase());
myInfoText = a;
console.log(myInfoText);
console.log(myInfoText.length);
let str = myInfoText.length - 1;
console.log(myInfoText[0], myInfoText[str]);