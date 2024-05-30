document.getElementById("main").innerHTML = "TO-DO LIST";

function addTask() {
  
    const taskInput = document.getElementById('taskInput');
  
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task..');
        return;
    }

    const taskList = document.getElementById('taskList');

    const listItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    checkbox.onclick = function() {

        if (this.checked) {
            listItem.style.textDecoration = 'line-through';
        } else {
            listItem.style.textDecoration = 'none';
        }
    };

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';

    editButton.onclick = function() {

        const newTaskText = prompt('Edit your task:', taskText);

        if (newTaskText !== null && newTaskText.trim() !== '') {
            listItem.textContent = newTaskText;
            listItem.appendChild(checkbox); 
            listItem.appendChild(editButton);
            listItem.appendChild(deleteButton);
        }
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() { 
        taskList.removeChild(listItem);
    };

   
    listItem.textContent = taskText;
    listItem.appendChild(checkbox);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    taskInput.value = '';
}

document.getElementById('taskInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter')  {
        addTask();
    }
});
