let i = 0;
while (i < 3) {
  let newStudent = prompt("Введите имя нового студента!");
  newStudent = newStudent.trim();
  if (newStudent) {
    alert(`Добро пожаловать, ${newStudent}!`);
  }
  i += 1;
}

let a = 0;
do {
    let newStudent = prompt("Введите имя нового студента!");
    newStudent = newStudent.trim();
    if (newStudent) {
        alert(`Добро пожаловать, ${newStudent}!`);
    }
    a += 1;
} while (a < 3);