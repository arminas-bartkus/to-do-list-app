
export function renderTasks(workingProject) {

    const projectBody = document.querySelector(".current-project-body");


    workingProject.subHeadings.forEach((subHeading) => {

    });


    workingProject.tasks.forEach(task => {
    
        const taskDiv = document.createElement("div");

        const renderedTaskTitle = document.createElement("h3");
        const renderedTaskDesc = document.createElement("p");
        const renderedTaskDueDate = document.createElement("p");
        const renderedTaskPriorityLvl = document.createElement("p");

        renderedTaskTitle.innerHTML = task.taskTitle;
        renderedTaskDesc.innerHTML = task.taskDesc;
        renderedTaskDueDate.innerHTML = task.dueDate;
        renderedTaskPriorityLvl.innerHTML = task.priorityLvl;

        taskDiv.appendChild(renderedTaskTitle);
        taskDiv.appendChild(renderedTaskDesc);
        taskDiv.appendChild(renderedTaskDueDate);
        taskDiv.appendChild(renderedTaskPriorityLvl);

        projectBody.appendChild(taskDiv);
    });

}