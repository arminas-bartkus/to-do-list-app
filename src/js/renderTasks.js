import { toggleCompletion } from "./toggleCompletion";
import { updateCompletionBar } from "./updateCompletionBar";


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

            const deleteTaskBtn = document.createElement("button");
            deleteTaskBtn.innerHTML = "Delete"

            deleteTaskBtn.addEventListener("click", function(){
                this.parentElement.remove();
            })


            const renderedTaskTitle = document.createElement("h3");
            const renderedTaskDesc = document.createElement("p");
            const renderedTaskDueDate = document.createElement("p");
            const renderedTaskPriorityLvl = document.createElement("p");
            
            
            const taskCompletedCheckbox = document.createElement("input");
            taskCompletedCheckbox.setAttribute("type", "checkbox");


            taskCompletedCheckbox.addEventListener("change", function() {
                toggleCompletion(task);
            });

            renderedTaskTitle.innerHTML = task.taskTitle;
            renderedTaskDesc.innerHTML = task.taskDesc;
            renderedTaskDueDate.innerHTML = task.dueDate;
            renderedTaskPriorityLvl.innerHTML = task.priorityLvl;

            taskDiv.appendChild(renderedTaskTitle);
            taskDiv.appendChild(renderedTaskDesc);
            taskDiv.appendChild(renderedTaskDueDate);
            taskDiv.appendChild(renderedTaskPriorityLvl);
            taskDiv.appendChild(deleteTaskBtn);

            if (task.isComplete) {
                taskCompletedCheckbox.checked = true;
            }



            taskDiv.appendChild(taskCompletedCheckbox);

            currentSubHeadingDOMElement.appendChild(taskDiv)
            
        });

    });

    updateCompletionBar(workingProject);


}