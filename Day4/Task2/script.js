const inputBox = document.getElementById("inputField");
const addTaskButton = document.getElementById("add-task-button");

addTaskButton.addEventListener("click", ()=>{
    const task = inputBox.value;
    if(task){
        const li = document.createElement("li");
        li.textContent = task;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", ()=>{
            li.remove();
        });
        li.appendChild(deleteButton);
        document.body.appendChild(li);
        inputBox.value = "";
    } else {
        alert("Please enter a task.");
    }
    deleteButton.setAttribute("aria-label", "Delete task");
 });
