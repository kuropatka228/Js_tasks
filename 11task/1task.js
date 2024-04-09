// const formHTML = `
// <form class="create-user-form">
//   <label>
//     Имя
//     <input type="text" name="userName" placeholder="Введите ваше имя">
//   </label>
//   <label>
//     Пароль
//     <input type="password" name="password" placeholder="Придумайте Пароль">
//   </label>
//   <button type="submit">
//     Подтвердить
//   </button>
// </form>`;

// document.body.innerHTML += formHTML;

const form = document.createElement('form');
form.classList.add('create-user-form');

const label1 = document.createElement('label');
label1.textContent = 'Имя';
const input1 = document.createElement('input');
input1.setAttribute('type', 'text');
input1.setAttribute('name', 'userName');
input1.setAttribute('placeholder', 'Введите ваше имя');
label1.appendChild(input1);

const label2 = document.createElement('label');
label2.textContent = 'Пароль';
const input2 = document.createElement('input');
input2.setAttribute('type', 'password');
input2.setAttribute('name', 'password');
input2.setAttribute('placeholder', 'Придумайте Пароль');
label2.appendChild(input2);

const button = document.createElement('button');
button.setAttribute('type', 'submit');
button.textContent = 'Подтвердить';
form.appendChild(label1);
form.appendChild(label2);
form.appendChild(button);

document.body.appendChild(form);