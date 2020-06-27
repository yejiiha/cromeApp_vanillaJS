const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = `toDos`;

let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;

    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id)
    });
    toDos = cleanToDos;
    saveToDos();
}

// save toDos array to local storage
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function createToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1; // Because initial toDos array is empty

    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteToDo);

    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;

    toDoList.appendChild(li);

    // When you put a thing to to do list, it also put the toDos array
    const toDoObj = {
        text: text,
        id: newId
    };

    toDos.push(toDoObj); // put an element in the toDos array
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    createToDo(currentValue);
    toDoInput.value = "";
}


function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {  // load toDos
        const parsedToDos = JSON.parse(loadedToDos); // Convert loaded toDos to js object 

        parsedToDos.forEach(function (toDo) { // each one of them executes function
            createToDo(toDo.text);
        })
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();