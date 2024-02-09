const userName = prompt("Как вас зовут?");
const formattedName = userName.toLowerCase().trim(); //нижний регистр и удаление пробелов

const userAge = prompt("Сколько вам лет?");
const formattedAge = parseInt(userAge).trim(); // преоразует в числа

alert(`Вас зовут ${formattedName} и вам ${formattedAge} лет`);