const inputField = document.querySelector("#todoInput")
const button = document.querySelector("#addBtn")
const todoListParents = document.querySelector("#todoList")

button.addEventListener("click" , (e) =>{
    task = inputField.value.trim()
    if(task ===""){
        return
    }
    const todo = {
        id : Date.now(),
        task : task,
    }

    const todoList = JSON.parse(localStorage.getItem("todoList")) || []
    todoList.push(todo)
    localStorage.setItem("todoList" , JSON.stringify(todoList))
    const todoItem = document.createElement("li")
    todoItem.textContent = todo.task
    todoListParents.appendChild(todoItem)
    inputField.value = ""
    console.log(todoList)

})


function displayTodo(){
    const todoList = JSON.parse(localStorage.getItem("todoList")) || []
    console.log(todoList)
    todoList.forEach((todo) => {
        const todoItem = document.createElement("li")
        todoItem.textContent = todo.task
        todoListParents.appendChild(todoItem)
    })
}

displayTodo()