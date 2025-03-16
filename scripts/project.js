//let project_list = [0]

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
let project_nums = 1;
function newProjectSubmit(event){
    let project_num = project_nums;
    let target = event.target;
    let dialog = target.parentElement;
    const text = document.getElementById("project_name_box").value;
    const asidebar = document.getElementById("asidebar");
    const newProject_btn = document.getElementById("new_project");
    const project_btn = document.createElement("button");
    project_btn.className = "project";

    project_btn.id = `project${project_num}`;
    project_btn.onclick = function(){
        chooseProject(project_num);
    }
    project_btn.innerHTML = text;
    
    asidebar.appendChild(project_btn);
    newProject_btn.before(project_btn);
    chooseProject(project_num);
    project_nums++;
    dialog.close();
}

// choose the project which is chosen
function chooseProject(btn_id_num){
    for(var i = 0; i < project_nums; i++){
        let btn = document.getElementById(`project${i}`);
        btn.classList.remove('active');
    }

    let choosebtn = document.getElementById(`project${btn_id_num}`);
    choosebtn.classList.add('active');
}