import { project_map } from "./state";

export function saveToLocal(){
    const project_list = []
    for(var [key, projectPage] of project_map){
        let project = {
            id_num: key,
            projectName: document.getElementById(`project${key}`).querySelector(".project_name").innerText,
            tasks: []
        };
        
        const taskElements = Array.from(projectPage.querySelectorAll(".task"));
        taskElements.forEach(taskElement => {
            const checkbox = taskElement.querySelector(".check_box");
            const completed = checkbox.checked;
            const task_name = taskElement.querySelector(".task_label").textContent;
            const description = taskElement.querySelector(".description").textContent;
            project.tasks.push({completed, task_name, description});
        });
        project_list.push(project);
    }
    localStorage.setItem("project_list", JSON.stringify(project_list));
}