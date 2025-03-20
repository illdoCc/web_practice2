import "./style.css";
import { newTask, newTaskSubmit } from "./task.js";
import { saveToLocal } from "./utils.js";
import { project_map } from "./state.js";

// add event listener to buttons
document.getElementById("inbox").addEventListener('click', () => {
    chooseProject(0);
});
document.getElementById("new_project").addEventListener('click', newProject);
document.getElementById("new_task0").addEventListener('click', newTask);
const cancel_btns = document.getElementsByClassName("cancel");
Array.from(cancel_btns).forEach(btn => {
    btn.addEventListener('click', (event) => {
        cancel(event);
    });
});
document.getElementById("project_submit_btn").addEventListener('click', (event) => {
    newProjectSubmit(event);
})
document.getElementById("task_submit_btn").addEventListener('click', () => {
    newTaskSubmit(activeProjectId);
})


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

    // 新增任務的按鈕
    let newTaskbtn = document.createElement("button");
    newTaskbtn.id = `new_task${project_num}`;
    newTaskbtn.className = "newTaskbtn";
    newTaskbtn.textContent = "New Task";
    newTaskbtn.onclick = newTask;    

    // 每個project的task area
    let project_page = document.createElement("div");
    project_page.style.backgroundColor = "rgba(255, 210, 127, 0.231)";
    project_page.className = "projectArea";
    project_page.id = `project_page${project_num}`;
    project_page.appendChild(newTaskbtn);    

    // 放project_page的地方
    let content = document.getElementById("content");


    // sidebar的project button
    let project_btn = document.createElement("div");
    project_btn.style.width = "240px";
    project_btn.id = `project${project_num}`;
    project_btn.className = "project";
    // project_btn.onclick = function(){
    //     console.log(":LKJDF:FOIEJ:LFKJ:ED");
    //     chooseProject(project_num);
    // }

    let projectText = document.createElement("span");
    projectText.className = "project_name";
    projectText.textContent = text;
    projectText.onclick = function(){
        // console.log(":LKJDF:FOIEJ:LFKJ:ED");
        chooseProject(project_num);
        return false;
    }

    // 刪除project的按鈕
    let deleteProject_btn = document.createElement("button");
    deleteProject_btn.innerHTML = "🗑️";
    deleteProject_btn.className = "delete_btn";
    deleteProject_btn.onclick = (function(event) {
        project_btn.remove();
        project_page.remove();
        project_map.delete(project_num);
        chooseProject(0);
        saveToLocal();
    });

    project_btn.appendChild(projectText);
    project_btn.appendChild(deleteProject_btn);
    
    asidebar.appendChild(project_btn);
    newProject_btn.before(project_btn);

    content.appendChild(project_page);
    project_map.set(project_num, project_page);

    chooseProject(project_num);
    
    saveToLocal();
    project_nums++;
}

let activeProjectId = 0;
// choose the project which is chosen
function chooseProject(btn_id){
    activeProjectId = btn_id;

    for(var [key, value] of project_map){
        var btn = document.getElementById(`project${key}`);
        btn.classList.remove('active');
        value.classList.remove('choose');     
    }
    let choose_btn = document.getElementById(`project${btn_id}`);
    choose_btn.classList.add('active');
    project_map.get(btn_id).classList.add('choose');
}

// function saveToLocal(){
//     const project_list = []
//     for(var [key, projectPage] of project_map){
//         let project = {
//             id_num: key,
//             projectName: document.getElementById(`project${key}`).querySelector(".project_name").innerText,
//             tasks: []
//         };
        
//         const taskElements = Array.from(projectPage.querySelectorAll(".task"));
//         taskElements.forEach(taskElement => {
//             const checkbox = taskElement.querySelector(".check_box");
//             const completed = checkbox.checked;
//             const task_name = taskElement.querySelector(".task_label").textContent;
//             const description = taskElement.querySelector(".description").textContent;
//             project.tasks.push({completed, task_name, description});
//         });
//         project_list.push(project);
//     }
//     localStorage.setItem("project_list", JSON.stringify(project_list));
// }
// let i = 0;
function loadFromLocal(){
    const storedProjects = localStorage.getItem("project_list");
    if (!storedProjects) return;

    const project_list = JSON.parse(storedProjects);
    project_list.forEach(project => {
        if(project.id_num === 0){
            const inboxPage = document.getElementById("project_page0");
            project_map.set(0, inboxPage);
            // 塞inbox的tasks
            project.tasks.forEach(task => {
                const taskElement = createTaskElement(task);
                inboxPage.insertBefore(taskElement, inboxPage.querySelector(".newTaskbtn"));
            });
            return;            
        }

        const asidebar = document.getElementById("asidebar");
        const newProject_btn = document.getElementById("new_project");

        let newTaskbtn = document.createElement("button");
        newTaskbtn.id = `new_task${project.id_num}`;
        newTaskbtn.className = "newTaskbtn";
        newTaskbtn.textContent = "New Task";
        newTaskbtn.onclick = newTask;  

        let project_page = document.createElement("div");
        project_page.style.backgroundColor = "rgba(255, 210, 127, 0.231)";
        project_page.className = "projectArea";
        project_page.id = `project_page${project.id_num}`;
        project_page.appendChild(newTaskbtn); 

        project.tasks.forEach(task => {
            const taskElement = createTaskElement(task);
            project_page.insertBefore(taskElement, newTaskbtn);
        });

        let content = document.getElementById("content");
        
        // sidebar的project button
        let project_btn = document.createElement("div");
        project_btn.style.width = "240px";
        project_btn.id = `project${project.id_num}`;
        project_btn.className = "project";
        // project_btn.onclick = function(){
        //     chooseProject(project.id_num);
        // }
        
        let projectName = document.createElement("span");
        projectName.className = "project_name";
        projectName.textContent = project.projectName;
        projectName.onclick = function(){
            chooseProject(project.id_num);
            return false;
        }

        // 刪除project的按鈕
        let deleteProject_btn = document.createElement("button");
        deleteProject_btn.innerHTML = "🗑️";
        deleteProject_btn.className = "delete_btn";
        deleteProject_btn.onclick = (function(event) {
            project_btn.remove();
            project_page.remove();
            project_map.delete(project.id_num);
            
            chooseProject(0);
            saveToLocal();
        });

        project_btn.appendChild(projectName);
        project_btn.appendChild(deleteProject_btn);
        
        asidebar.appendChild(project_btn);
        newProject_btn.before(project_btn);
    
        content.appendChild(project_page);
        project_map.set(project.id_num, project_page);
    
        chooseProject(project.id_num);
    })

    project_nums = Math.max(...project_list.map(p => p.id_num)) + 1;
}
//localStorage.clear();
window.onload = function() {
    loadFromLocal();
};

function createTaskElement(task){
    let taskElement = document.createElement("div");
    taskElement.className = "task";

    let task_header = document.createElement("div");
    task_header.className = "task-header";

    let check_box = document.createElement("input");
    check_box.type = "checkbox";
    check_box.className = "check_box";
    check_box.checked = task.completed;
    check_box.addEventListener('change', function() {
        saveToLocal();
    });

    let taskName = document.createElement("label");
    taskName.className = "task_label";
    taskName.textContent = task.task_name;

    let description = document.createElement("p");
    description.className = "description";
    description.textContent = task.description;

    let delete_btn = document.createElement("button");
    delete_btn.className = "delete_task_btn";
    delete_btn.textContent = "🗑️";
    delete_btn.onclick = (function(event) {
        event.target.parentElement.parentElement.remove();
        saveToLocal();
    });

    task_header.appendChild(check_box);
    task_header.appendChild(taskName);
    task_header.appendChild(delete_btn);
    taskElement.appendChild(task_header);
    taskElement.appendChild(description);

    return taskElement;
}