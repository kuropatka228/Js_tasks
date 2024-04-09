
const tasks = [
    { id: '1138465078061', completed: false, text: "Посмотреть новый урок по JavaScript" },
    { id: '1138465078062', completed: false, text: "Выполнить тест после урока" },
    { id: '1138465078063', completed: false, text: "Выполнить ДЗ после урока" }
  ];
  

  const tasksList = document.querySelector('.tasks-list');
  

  if (tasksList) {

    tasks.forEach(task => {

      const taskHTML = `
        <div class="task-item" data-task-id="${task.id}">
          <div class="task-item-main-container">
            <div class="task-item-main-content">
              <form class="checkbox-form">
                <input class="checkbox-form-checkbox" type="checkbox" id="task-${task.id}" data-task-id="${task.id}">
                <label for="task-${task.id}"></label>
              </form>
              <span class="task-item-text">${task.text}</span>
            </div>
            <button class="task-item-delete-button default-button delete-button" data-delete-task-id="${task.id}">Удалить</button>
          </div>
        </div>
      `;
      tasksList.insertAdjacentHTML('beforeend', taskHTML);
    });
  }