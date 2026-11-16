let taskInput = document.querySelector("#task-input");
let addButton = document.querySelector("#addButton");
let taskCounter = document.querySelector("#taskCounter");
let taskList = document.querySelector("#taskList");

function updateCounter() {
    taskCounter.textContent = taskList.children.length;
}

function addTask() {
    let text = taskInput.value.trim();

    if (text === '') {
        alert('Please enter a task');
        return;
    }

    let li = document.createElement('li');
    li.classList.add('task');

    let span = document.createElement('span');
    span.classList.add('task-text');
    span.textContent = text;

    let doneButton = document.createElement('button');
    doneButton.textContent = 'done';

    doneButton.addEventListener('click', function() {
        li.classList.toggle('done');
    });

    let editButton = document.createElement('button');
    editButton.textContent = 'edit';
    editButton.classList.add('edit-Btn');

    editButton.addEventListener('click', function() {
        let newText = prompt('Edit your task:', span.textContent);

        if (newText !== null && newText.trim() !== '') {
            span.textContent = newText.trim();
        }
    });

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.classList.add('delete-Btn');

    deleteButton.addEventListener('click', function() {
        li.remove();
        updateCounter();
    });

    li.append(span, doneButton, editButton, deleteButton);
    taskList.append(li);

    taskInput.value = '';
    updateCounter();
}

addButton.addEventListener('click', addTask);

taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});