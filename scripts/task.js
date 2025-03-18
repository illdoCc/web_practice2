// add a new task
function newTask(){
    const dialog = document.getElementById("new_task_dialog");
    dialog.showModal();
}

function newTaskSubmit(){
    const dialog = document.getElementById("new_task_dialog");

    // 取得當前的project，並取得id的數字部分，這同時也是newTaskBtn的id數字部分
    let projectArea = document.getElementById(`project_page${activeProjectId}`);
    const newTaskBtn = document.getElementById(`new_task${activeProjectId}`);
    console.log(projectArea.id);
    console.log(newTaskBtn.id);
    // dialog當中user輸入的內容
    const taskName = document.getElementById("task_name_box").value;
    const description = document.getElementById("description_box").value;
    const date = document.getElementById("date_box").value;
    let priority = document.getElementById("priority").value;
    priority = priority === "" ? "4" : priority;

    const priorityIcon = {"1": "🔴 ", "2": "🟠 ", "3": "🟡 ", "4": "🟢 "};
    const deleteIcon = "🗑️";
    
    // 每一個user輸入的task
    let task = document.createElement("div");
    task.className = "task";
    
    let task_header = document.createElement("div");
    task_header.className = "task-header";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "check_box";
    checkbox.addEventListener('change', function() {
        saveToLocal();
    });
    console.log("=======");
    let taskNameLabel = document.createElement("label");
    taskNameLabel.className = "task_label";
    taskNameLabel.innerHTML = `${priorityIcon[priority]} ${taskName}`;
    
    let description_p = document.createElement("p");
    description_p.className = "description";
    description_p.textContent = description + (date ? `, ${date}` : '');
    
    let deleteButton = document.createElement("button");
    deleteButton.className = "delete_task_btn";
    deleteButton.innerHTML = deleteIcon;
    deleteButton.onclick = (function(event) {
        event.target.parentElement.parentElement.remove();
        saveToLocal();
    });

    task_header.appendChild(checkbox);
    task_header.appendChild(taskNameLabel);
    task_header.appendChild(deleteButton);
    task.appendChild(task_header);
    task.appendChild(description_p);
    projectArea.insertBefore(task, newTaskBtn);
    dialog.close();

    saveToLocal();
}