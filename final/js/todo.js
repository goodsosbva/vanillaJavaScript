const toDoForm = document.getElementById("todo-form");
const todoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveTodDos(){
    // stringify: json문자열로 변환
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e){
    // console.log(e.target.parentElement.innerText);
    const li = e.target.parentElement;
    // consloe.log(li.id);
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const btn = document.createElement("button");

    btn.innerText = "x";
    btn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
    e.preventDefault();
    // console.log(todoInput.value);
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)

function hi(item) {
    console.log("oh~! hi", item);
}

const savedTodDos = localStorage.getItem(TODOS_KEY);
if(savedTodDos){
    const parsedToDos = JSON.parse(savedTodDos);
    // 이전에 값들이 있으면 가지고 오기
    toDos = parsedToDos
    // console.log(parsedToDos);
    parsedToDos.forEach(paintToDo);
}

// [1, 2, 3, 4].filter(sexyFilter)
// if true 값은 유지 될것. if false 
// sexyFilter(1) = 1
// sexyFilter(2) = 2
// sexyFilter(3) = 3 if. fase -> x (1, 3, 4)만 유지
// sexyFilter(4) = 4