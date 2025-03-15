// let checkbox_num = 0
// function create_task_btn(){
//     let name = document.getElementById("task_name_box").value;
//     const newCheckbox = document.createElement("input");
//     const newLabel = document.createElement("label");
//     const newDelete = document.createElement("button");

//     newCheckbox.type = "checkbox";

//     newLabel.style.display = "block";

//     newDelete.id = `deletebtn${checkbox_num + 1}`;
//     newDelete.innerHTML = "刪除";
//     newDelete.onclick = function(event){
//         document.getElementById(event.target.id).parentElement.remove();
//     };
    
//     newLabel.appendChild(newCheckbox);
//     newLabel.appendChild(document.createTextNode(name + ' '));
//     newLabel.appendChild(newDelete);
//     document.body.appendChild(newLabel);
//     checkbox_num += 1;
// }