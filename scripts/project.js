let project_map = new Map();
let project_page0 = document.getElementById("project_page0");
// project_page0 is Inbox
project_map.set(0, project_page0);

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
let project_nums = 1
function newProjectSubmit(event){
    let project_num = project_nums;
    let dialog = event.target.parentElement;
    dialog.close();

    const text = document.getElementById("project_name_box").value;
    const asidebar = document.getElementById("asidebar");
    const newProject_btn = document.getElementById("new_project");

    // sidebar的project button
    let project_btn = document.createElement("div");
    // 刪除project的按鈕
    let deleteProject_btn = document.createElement("button");

    // 每個project的task area
    let project_page = document.createElement("div");
    // 新增任務的按鈕
    let newTaskbtn = document.createElement("button");
    // 放project_page的地方
    let content = document.getElementById("content");

    newTaskbtn.id = `new_task${project_num}`;
    newTaskbtn.className = "newTaskbtn";
    newTaskbtn.textContent = "New Task";
    newTaskbtn.onclick = newTask;

    project_page.style.backgroundColor = "rgba(255, 210, 127, 0.231)";
    project_page.className = "projectArea";
    project_page.id = `project_page${project_num}`;
    project_page.appendChild(newTaskbtn);

    deleteProject_btn.innerHTML = "🗑️";
    deleteProject_btn.className = "delete_btn";
    deleteProject_btn.onclick = (function(event) {
        project_btn.remove();
        project_page.remove();
        project_map.delete(project_num);
    });

    project_btn.style.width = "240px";
    project_btn.id = `project${project_num}`;
    project_btn.className = "project";

    project_btn.onclick = function(){
        chooseProject(project_num);
    }

    project_btn.innerHTML = text;
    project_btn.appendChild(deleteProject_btn);
    
    asidebar.appendChild(project_btn);
    newProject_btn.before(project_btn);

    content.appendChild(project_page);
    project_map.set(project_num, project_page);

    chooseProject(project_num);
    project_nums++;
}

// choose the project which is chosen
function chooseProject(btn_id){
    for(var [key, value] of project_map){
        var btn = document.getElementById(`project${key}`);
        btn.classList.remove('active');
        value.classList.remove('choose');     
    }
    let choose_btn = document.getElementById(`project${btn_id}`);
    choose_btn.classList.add('active');
    project_map.get(btn_id).classList.add('choose');
}