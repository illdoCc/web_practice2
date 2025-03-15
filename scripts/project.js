// show new project dialog
function newProject() {
    const newProjectDialog = document.getElementById("new_project_dialog");    
    newProjectDialog.showModal();
}

// cancel dialog
function cancel(event){
    let target = event.target;
    let dialog = target.parentElement;
    dialog.close();
}

// create new project wnen submit
let project_num = 1;
function newProjectSubmit(event){
    let target = event.target;
    const text = document.getElementById("project_name_box").value;
    let dialog = target.parentElement;
    const project_btn = document.createElement("button");
    const asidebar = document.getElementById("asidebar");
    const newProject_btn = document.getElementById("new_project");
    project_btn.id = `project${project_num}`;
    project_num++;
    project_btn.innerHTML = text;
    project_btn.className = "project";
    project_btn.onclick = chooseProject();
    asidebar.appendChild(project_btn);
    newProject_btn.before(project_btn);
    dialog.close();
}

// choose the project which is chosen
function chooseProject(){

}

// add a new task
function newTask(){
    const dialog = document.getElementById("new_task_dialog");
    dialog.showModal();
}

function newTaskSubmit(){
    const taskArea = document.getElementById("content");
    const taskName = document.getElementById("task_name_box");
    const description = document.getElementById("description_box");
    const date = document.getElementById("date_box");
    const priority = document.getElementById("priority");
    const priorityIcon = {"1": "🔴", "2": "🟠", "3": "🟡", "4": "🟢"};
    const deleteIcon = "🗑️";


    let task = document.createElement("div");

}