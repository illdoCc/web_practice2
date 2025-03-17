// add a new task
function newTask(){
    const dialog = document.getElementById("new_task_dialog");
    dialog.showModal();
}

// function newTaskSubmit(){
//     // !!!!!!NOT COMPLETE多加一個projects div在content裡面，當user點擊不同的project時，直接更換projects div
//     const dialog = document.getElementById("new_task_dialog");
//     const newTaskBtn = document.getElementById("new_task");
//     let taskArea = document.getElementById("content");
//     const taskName = document.getElementById("task_name_box").value;
//     const description = document.getElementById("description_box").value;
//     const date = document.getElementById("date_box").value;
//     let priority = document.getElementById("priority").value;
//     priority = priority === "" ? "4" : priority;
//     const priorityIcon = {"1": "🔴 ", "2": "🟠 ", "3": "🟡 ", "4": "🟢 "};
//     const deleteIcon = "🗑️";
    
//     let task = document.createElement("div");
//     let taskNameLabel = document.createElement("label");
//     let checkbox = document.createElement("input");
//     let deleteButton = document.createElement("button");
//     let description_p = document.createElement("p");
//     task.className = "task";
    
//     checkbox.setAttribute("type", "checkbox");
//     checkbox.className = "check_box";
//     taskNameLabel.className = "task_label";
//     taskNameLabel.innerHTML = priorityIcon[priority] + taskName;
//     description_p.className = "description";
//     if(date == ""){
//         description_p.textContent = description;
//     }else{
//         description_p.textContent = description + ", " + date;
//     }
//     deleteButton.className = "delete_btn"
//     deleteButton.innerHTML = deleteIcon;
//     deleteButton.onclick = (function(event) {
//         event.target.parentElement.remove();
//     });
//     task.appendChild(checkbox);
//     task.appendChild(taskNameLabel);
    
//     task.appendChild(deleteButton);
//     taskNameLabel.appendChild(description_p);
//     taskArea.appendChild(task);
//     // taskNameLabel.after(description_p);
//     newTaskBtn.before(task);
//     dialog.close();
// }

function newTaskSubmit(){
    // !!!!!!NOT COMPLETE多加一個projects div在content裡面，當user點擊不同的project時，直接更換projects div
    const dialog = document.getElementById("new_task_dialog");

    //!!!!!!!!!現在只要找到當前project_page的id就能實現了
    let projectArea = document.querySelector(".choose");
    // const newTaskBtn = document.getElementById(`new_task${id}`);

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
    let taskNameLabel = document.createElement("label");
    let checkbox = document.createElement("input");
    let deleteButton = document.createElement("button");
    let description_p = document.createElement("p");
    
    task.className = "task";
    checkbox.setAttribute("type", "checkbox");
    checkbox.className = "check_box";

    // task name and description
    taskNameLabel.className = "task_label";
    taskNameLabel.innerHTML = priorityIcon[priority] + taskName;
    description_p.className = "description";
    if(date == ""){
        description_p.textContent = description;
    }else{
        description_p.textContent = description + ", " + date;
    }

    // define delete button of task
    deleteButton.className = "delete_task_btn";
    deleteButton.innerHTML = deleteIcon;
    deleteButton.onclick = (function(event) {
        event.target.parentElement.remove();
    });

    task.appendChild(checkbox);
    task.appendChild(taskNameLabel);
    task.appendChild(deleteButton);
    taskNameLabel.appendChild(description_p);
    projectArea.appendChild(task);
    // newTaskBtn.before(task);
    dialog.close();
}