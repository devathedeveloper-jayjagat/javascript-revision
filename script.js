const inputField = document.querySelector("#todoInput")
const button = document.querySelector("#addBtn")


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
    inputField.value = ""
    console.log(todoList)

})