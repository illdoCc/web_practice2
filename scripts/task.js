// add a new task
function newTask(){
    const dialog = document.getElementById("new_task_dialog");
    dialog.showModal();
}

function newTaskSubmit(){
    const dialog = document.getElementById("new_task_dialog");
    const newTaskBtn = document.getElementById("new_task");
    let taskArea = document.getElementById("content");
    const taskName = document.getElementById("task_name_box").value;
    const description = document.getElementById("description_box");
    const date = document.getElementById("date_box");
    let priority = document.getElementById("priority").value;
    priority = priority === "" ? "4" : priority;
    const priorityIcon = {"1": "🔴 ", "2": "🟠 ", "3": "🟡 ", "4": "🟢 "};
    const deleteIcon = "🗑️";
    
    let task = document.createElement("div");
    let taskNameLabel = document.createElement("label");
    let checkbox = document.createElement("input");
    let deleteButton = document.createElement("button");
    checkbox.setAttribute("type", "checkbox");
    checkbox.className = "check_box";
    task.className = "task";
    taskNameLabel.className = "task_label";
    taskNameLabel.innerHTML = priorityIcon[priority] + taskName;
    deleteButton.innerHTML = deleteIcon;
    deleteButton.className = "delete_btn"
    deleteButton.onclick = (function(event) {
        event.target.parentElement.remove();
    });
    task.appendChild(checkbox);
    task.appendChild(taskNameLabel);
    task.appendChild(deleteButton);
    
    taskArea.appendChild(task);
    newTaskBtn.before(task);
    dialog.close();
}

function deleteTask(){

}