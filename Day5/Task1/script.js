const inputBox = document.getElementById("inputField");
const addTaskButton = document.getElementById("add-task-button");

addTaskButton.addEventListener("click", () => {
    const task = inputBox.value;
    if (task) {
        saveTask(task);
        const li = document.createElement("li");
        li.textContent = task;
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            li.remove();
        });
        checkBox.addEventListener("change", () => {
            if (checkBox.checked) {
                li.style.color = "red";
            }
            else {
                li.style.color = "green";
            }
        });
        li.style.color = "green";
        li.appendChild(checkBox);
        li.appendChild(deleteButton);
        document.body.appendChild(li);
        inputBox.value = "";
    } else {
        alert("Please enter a task.");
    }
    deleteButton.setAttribute("aria-label", "Delete task");
});

//Func to save task to local storage
function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Function to remove task from local Storage
function removeTasks(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Function to load task from local Storage

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(element => {
        const li = document.createElement("li");
        li.textContent = element;
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            li.remove();
            removeTasks(element);
        });
        checkBox.addEventListener("change", () => {
            if (checkBox.checked) {
                li.style.color = "red";
            }
            else {
                li.style.color = "green";
            }
        });
        li.style.color = "green";
        li.appendChild(checkBox);
        li.appendChild(deleteButton);
        document.body.appendChild(li);
    });
}

loadTasks();