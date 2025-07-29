
export function renderTasks(newTask, subHeadingToAppend) {

    const projectBody = document.querySelector(".current-project-body");
    
    const taskDiv = document.createElement("div");

    const renderedTaskTitle = document.createElement("h3");
    const renderedTaskDesc = document.createElement("p");
    const renderedTaskDueDate = document.createElement("p");
    const renderedTaskPriorityLvl = document.createElement("p");

    renderedTaskTitle.innerHTML = newTask.taskTitle;
    renderedTaskDesc.innerHTML = newTask.taskDesc;
    renderedTaskDueDate.innerHTML = newTask.dueDate;
    renderedTaskPriorityLvl.innerHTML = newTask.priorityLvl;

    taskDiv.appendChild(renderedTaskTitle);
    taskDiv.appendChild(renderedTaskDesc);
    taskDiv.appendChild(renderedTaskDueDate);
    taskDiv.appendChild(renderedTaskPriorityLvl);

    projectBody.appendChild(taskDiv);

}