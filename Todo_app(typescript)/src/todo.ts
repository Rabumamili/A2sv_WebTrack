interface TodoItem {
    id: number;
    text: string;
    completed: boolean;
  }
  
  const inputBox = document.getElementById("input-box") as HTMLInputElement | null;
  const listContainer = document.getElementById("list-container") as HTMLUListElement | null;
  
  let todos: TodoItem[] = [];
  
  function addTask(): void {
    if (inputBox && inputBox.value === '') {
      alert("Please enter a task");
    } else if (inputBox) {
      const newTodo: TodoItem = {
        id: Date.now(),
        text: inputBox.value,
        completed: false
      };
      todos.push(newTodo);
      renderTodos();
      inputBox.value = '';
    }
  }
  
  function removeTask(id: number): void {
    const confirmDelete = confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      todos = todos.filter(todo => todo.id !== id);
      renderTodos();
    }
  }
  
  function editTask(id: number): void {
    const newTask = prompt("Edit your task:");
    if (newTask) {
      const todo = todos.find(todo => todo.id === id);
      if (todo) {
        todo.text = newTask;
      }
      renderTodos();
    }
  }
  
  function toggleTask(id: number): void {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
    renderTodos();
  }
  
  function renderTodos(): void {
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
  