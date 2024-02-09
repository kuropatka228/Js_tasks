// Задаем существующие логин и пароль
const existedUserLogin = "the_best_user";
const existedUserPassword = "12345678";

// Запрашиваем у пользователя логин
let userLogin = prompt("Введите логин");

// Убираем лишние пробелы в начале и конце строки
userLogin = userLogin.trim();

// Запрашиваем у пользователя пароль
let userPassword = prompt("Введите пароль");

// Убираем лишние пробелы в начале и конце строки
userPassword = userPassword.trim();

// Проверяем введенные пользователем данные
if (userLogin === existedUserLogin && userPassword === existedUserPassword) { 
    alert(`Добро пожаловать, ${userLogin}`); 
} else { 
    alert("Логин и (или) Пароль введены неверно"); 
}