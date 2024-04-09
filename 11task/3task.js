
const createTaskForm = document.getElementById('createTaskForm');

const tasksList = document.querySelector('.tasks-list');

createTaskForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const newTaskText = document.querySelector('.create-task-block input').value;

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


  document.querySelector(`.task-item-delete-button[data-delete-task-id="${newTask.id}"]`).addEventListener('click', function() {
    const taskId = this.getAttribute('data-delete-task-id');
    const taskItem = this.closest('.task-item');
    taskItem.remove();
  });
});