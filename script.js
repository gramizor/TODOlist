const newTask = document.getElementById("new-task");
const tasks = document.getElementById("all-tasks");

newTask.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        addBtn();
    }
})

function addBtn() {
    if (newTask.value === '') {
        alert("Заполните поле, чтобы добавить задачу.");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = newTask.value;
        tasks.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    newTask.value = "";
    saveTask();
}

tasks.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        tasks.appendChild(e.target);
        e.target.classList.toggle("done");
        saveTask();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTask();
    }
}, false);

function saveTask() {
    localStorage.setItem("data", tasks.innerHTML);
}

function showTask() {
    tasks.innerHTML = localStorage.getItem("data");
}

function even() {
    const listItems = tasks.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("highlighted");
    }
    for (let i = 1; i < listItems.length; i += 2) {
        listItems[i].classList.add("highlighted");
    }
}

function odd() {
    const listItems = tasks.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("highlighted");
    }
    for (let i = 0; i < listItems.length; i += 2) {
        listItems[i].classList.add("highlighted");
        console.log("postavil")
    }
}

function clearHighlight() {
    const listItems = tasks.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("highlighted");
    }
}

function deleteFirst() {
    const firstItem = tasks.firstElementChild;
    if (firstItem) {
        firstItem.remove();
    }
    saveTask();
}

function deleteLast() {
    const lastItem = tasks.lastElementChild;
    if (lastItem) {
        lastItem.remove();
    }
    saveTask();
}

function delDone() {
    const doneItems = tasks.getElementsByClassName("done");
    while (doneItems.length > 0) {
        doneItems[0].remove();
    }
    saveTask();
}

function showBtn() {
    const additionalButtons = document.querySelectorAll(".btn-section .dop-btn");
    for (let button of additionalButtons) {
        button.classList.toggle("hidden");
    }
}

showTask();