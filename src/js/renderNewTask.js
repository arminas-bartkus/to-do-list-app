export function renderNewTask(workingProject, workingSubHeading) {

    workingProject.subHeadings.forEach(subHeading => {
        if (subHeading.title === workingSubHeading) {

            const currentSubHeadingDOMElement = document.querySelector("h2[data-sub-heading-data = "  + "'" + subHeading.title + "'" + "]");

            const workingTaskList = subHeading.tasks; 
            const taskToRender = workingTaskList[workingTaskList.length -1];

            const taskDiv = document.createElement("div");
            
            const renderedTaskTitle = document.createElement("h3");
            const renderedTaskDesc = document.createElement("p");
            const renderedTaskDueDate = document.createElement("p");
            const renderedTaskPriorityLvl = document.createElement("p");

            renderedTaskTitle.innerHTML = taskToRender.taskTitle;
            renderedTaskDesc.innerHTML = taskToRender.taskDesc;
            renderedTaskDueDate.innerHTML = taskToRender.dueDate;
            renderedTaskPriorityLvl.innerHTML = taskToRender.priorityLvl;

            taskDiv.appendChild(renderedTaskTitle);
            taskDiv.appendChild(renderedTaskDesc);
            taskDiv.appendChild(renderedTaskDueDate);
            taskDiv.appendChild(renderedTaskPriorityLvl);

            currentSubHeadingDOMElement.appendChild(taskDiv)


        }
    });
 

}