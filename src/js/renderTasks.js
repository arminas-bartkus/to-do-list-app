import { toggleCompletion } from "./toggleCompletion";
import { updateCompletionBar } from "./updateCompletionBar";
import { updateTimeLeft } from "./updateTimeLeft";
import { updateTaskPriority } from "./updateTaskPriority"
import { editTask } from "./editTask";

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
                

                // Finds the subheading where task to delete is located
                // finds the title of the task on dom to delete 
                // uses title to identify array element with that title
                // deletes task from array and dom 

                const recollectedBelongingSubHeading = this.parentElement.parentElement.firstChild.textContent;
                const recollectedTaskTitle = this.parentElement.firstChild.innerText
                
                workingProject.subHeadings.forEach((subHeading) => {

                    if (recollectedBelongingSubHeading === subHeading.title) {
                        subHeading.tasks.forEach(task => {
                            if (task.taskTitle === recollectedTaskTitle) {
        
                                const taskToDeleteIndex = subHeading.tasks.indexOf(task)
                                subHeading.tasks.splice(taskToDeleteIndex, 1);
                            };
                        });
                    };

                });
                this.parentElement.remove();
                updateCompletionBar(workingProject);

            })


            const renderedTaskTitle = document.createElement("h3");
            const renderedTaskDesc = document.createElement("p");
            const renderedTaskDueDate = document.createElement("p");
            const renderedTaskPriorityLvl = document.createElement("p");
            const renderedTimeLeft = document.createElement("p");
            
            const taskCompletedCheckbox = document.createElement("input");
            taskCompletedCheckbox.setAttribute("type", "checkbox");
             

            taskCompletedCheckbox.addEventListener("change", function() {
                toggleCompletion(task, workingProject);
            });

            renderedTaskTitle.innerHTML = task.taskTitle;
            renderedTaskDesc.innerHTML = task.taskDesc;
            renderedTaskDueDate.innerHTML = task.dueDate;
            renderedTaskPriorityLvl.innerHTML = task.priorityLvl;

            updateTaskPriority(taskDiv, task);
            
            if (task.dueDate === "") {
                renderedTimeLeft.innerText = updateTimeLeft();
            }
            else {
                renderedTimeLeft.innerText = updateTimeLeft(task.dueDate);
            }


            taskDiv.appendChild(renderedTaskTitle);
            taskDiv.appendChild(renderedTaskDesc);
            taskDiv.appendChild(renderedTaskDueDate);
            taskDiv.appendChild(renderedTaskPriorityLvl);
            taskDiv.appendChild(deleteTaskBtn);
            taskDiv.appendChild(taskCompletedCheckbox);
            taskDiv.appendChild(renderedTimeLeft);

            if (task.isComplete) {
                taskCompletedCheckbox.checked = true;
            }

            taskDiv.addEventListener("click", function() {
                editTask(taskDiv, task);
                updateTaskPriority(taskDiv, task);
            });


            currentSubHeadingDOMElement.appendChild(taskDiv)
            
        });

    });

    updateCompletionBar(workingProject);


}