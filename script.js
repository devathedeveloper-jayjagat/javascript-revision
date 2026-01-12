const inputField = document.querySelector("#todoInput");
const button = document.querySelector("#addBtn");
const todoListParents = document.querySelector("#todoList");

// Add todo
button.addEventListener("click", () => {
  const task = inputField.value.trim();
  if (task === "") return;

  const todo = { id: Date.now(), task };
  const todos = JSON.parse(localStorage.getItem("todoList")) || [];
  todos.push(todo);
  localStorage.setItem("todoList", JSON.stringify(todos));

  addTodoToDOM(todo); // render immediately
  inputField.value = "";
});

// Display all todos on load
function displayTodo() {
  const todos = JSON.parse(localStorage.getItem("todoList")) || [];
  todos.forEach(addTodoToDOM);
}

function addTodoToDOM(todo) {
  const todoItem = document.createElement("li");
  todoItem.textContent = todo.task;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.dataset.id = todo.id;

  deleteBtn.addEventListener("click", (e) => {
    const id = Number(e.target.dataset.id);

    // Remove from DOM
    e.target.parentElement.remove();

    // Remove from localStorage
    let todos = JSON.parse(localStorage.getItem("todoList")) || [];
    todos = todos.filter((t) => t.id !== id);
    localStorage.setItem("todoList", JSON.stringify(todos));
  });

  todoItem.appendChild(deleteBtn);
  todoListParents.appendChild(todoItem);
}

// Initial render
displayTodo();
