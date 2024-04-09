const createTaskForm = document.getElementById('createTaskForm');
const tasksList = document.querySelector('.tasks-list');

createTaskForm.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const newTaskText = document.querySelector('.create-task-block input').value;
  const errorBlock = document.querySelector('.error-message-block');

  if (!newTaskText) {
    if (errorBlock) {
      errorBlock.remove();
    }
    const errorMessage = document.createElement('span');
    errorMessage.classList.add('error-message-block');
    errorMessage.textContent = "Название задачи не должно быть пустым";
    createTaskForm.appendChild(errorMessage);
  } else if (tasks.some(task => task.text === newTaskText)) {
    if (errorBlock) {
      errorBlock.remove();
    }
    const errorMessage = document.createElement('span');
    errorMessage.classList.add('error-message-block');
    errorMessage.textContent = "Задача с таким названием уже существует";
    createTaskForm.appendChild(errorMessage);
  } else {
    if (errorBlock) {
      errorBlock.remove();
    }
    const newTaskId = Date.now().toString();
    const newTask = {
      id: newTaskId,
      completed: false,
      text: newTaskText
    };

    tasks.push(newTask);

    const taskHTML = `
      <div class="task-item" data-task-id="${newTask.id}">
        <div class="task-item-main-container">
          <div class="task-item-main-content">
            <form class="checkbox-form">
              <input class="checkbox-form-checkbox" type="checkbox" id="task-${newTask.id}" data-task-id="${newTask.id}">
              <label for="task-${newTask.id}"></label>
            </form>
            <span class="task-item-text">${newTask.text}</span>
          </div>
          <button class="task-item-delete-button default-button delete-button" data-delete-task-id="${newTask.id}">Удалить</button>
        </div>
      </div>
    `;

    tasksList.insertAdjacentHTML('beforeend', taskHTML);
    document.querySelector('.create-task-block input').value = '';

    const deleteTaskButton = document.querySelector(`.task-item-delete-button[data-delete-task-id="${newTask.id}"]`);
    deleteTaskButton.addEventListener('click', function() {
      const taskId = this.getAttribute('data-delete-task-id');
      const taskItem = this.closest('.task-item');
      taskItem.remove();
    });
  }
});

let isDarkTheme = false;

function toggleTheme() {
    const body = document.querySelector('body');
    const taskItems = document.querySelectorAll('.task-item');
    const buttons = document.querySelectorAll('button');

    isDarkTheme = !isDarkTheme;

    body.style.background = isDarkTheme ? "#24292E" : "initial";
    
    taskItems.forEach(item => {
        item.style.color = isDarkTheme ? "#fff" : "initial";
    });

    buttons.forEach(button => {
        button.style.border = isDarkTheme ? "1px solid #fff" : "none";
    });
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Tab") {
        toggleTheme();
    }
});