// show new project dialog
function New_project() {
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
project_num = 1;
function newProjectSubmit(event){
    let target = event.target;
    const text = document.getElementById("project_name_box").value;
    let dialog = target.parentElement;
    const project_btn = document.createElement("button");
    const asidebar = document.getElementById("asidebar");
    const newProject_btn = document.getElementById("new_project");
    project_btn.id = `project${project_num}`;
    project_btn++;
    project_btn.innerHTML = text;
    project_btn.className = "project";
    asidebar.appendChild(project_btn);
    newProject_btn.before(project_btn);
    dialog.close();
}