
export function renderTasks(workingProject) {

NodeList.prototype.forEach = Array.prototype.forEach

let taskDiv
let currentSubHeadingDOMElement

    workingProject.subHeadings.forEach((subHeading) => {
        currentSubHeadingDOMElement = document.querySelector("h2[data-sub-heading-data = "  + "'" + subHeading.title + "'" + "]");
        
        subHeading.tasks.forEach((task) => {
            // should these be listed items?


            taskDiv = document.createElement("div");
            
            const DOMIdentifier = task.taskTitle.toString();
            taskDiv.setAttribute("dataDOMIdentifier", DOMIdentifier);

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

            currentSubHeadingDOMElement.appendChild(taskDiv)
            
        });


        

    });


}