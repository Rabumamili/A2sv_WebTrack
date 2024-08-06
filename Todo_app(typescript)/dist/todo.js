"use strict";
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let todos = [];
function addTask() {
    if (inputBox && inputBox.value === '') {
        alert("Please enter a task");
    }
    else if (inputBox) {
        const newTodo = {
            id: Date.now(),
            text: inputBox.value,
            completed: false
        };
        todos.push(newTodo);
        renderTodos();
        inputBox.value = '';
    }
}
function removeTask(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}
function editTask(id) {
    const newTask = prompt("Edit your task:");
    if (newTask) {
        const todo = todos.find(todo => todo.id === id);
        if (todo) {
            todo.text = newTask;
        }
        renderTodos();
    }
}
function toggleTask(id) {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed;
    }
    renderTodos();
}
function renderTodos() {
    if (listContainer) {
        listContainer.innerHTML = '';
        todos.forEach(todo => {
            const li = document.createElement("li");
            li.innerHTML = todo.text;
            li.className = todo.completed ? 'checked' : '';
            li.addEventListener('click', () => toggleTask(todo.id));
            const editButton = document.createElement("button");
            editButton.innerHTML = "Edit";
            editButton.className = "edit-button";
            editButton.addEventListener('click', (e) => {
                e.stopPropagation();
                editTask(todo.id);
            });
            const removeButton = document.createElement("button");
            removeButton.innerHTML = "Remove";
            removeButton.className = "remove-button";
            removeButton.addEventListener('click', (e) => {
                e.stopPropagation();
                removeTask(todo.id);
            });
            li.appendChild(editButton);
            li.appendChild(removeButton);
            listContainer.appendChild(li);
        });
    }
}
const addButton = document.getElementById('addButton');
if (addButton) {
    addButton.addEventListener('click', addTask);
}
//# sourceMappingURL=todo.js.map