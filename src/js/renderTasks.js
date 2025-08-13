import { toggleCompletion } from "./toggleCompletion";
import { updateCompletionBar } from "./updateCompletionBar";
import { updateTimeLeft } from "./updateTimeLeft";
import { updateTaskPriority } from "./updateTaskPriority"
import { editTask } from "./editTask";

export function renderTasks(workingProject) {

    NodeList.prototype.forEach = Array.prototype.forEach;
    let taskDiv;
    let currentSubHeadingDOMElement;

    workingProject.subHeadings.forEach((subHeading) => {
        currentSubHeadingDOMElement = document.querySelector("h2[data-sub-heading-data = "  + "'" + subHeading.title + "'" + "]");
        
        subHeading.tasks.forEach((task) => {

            taskDiv = document.createElement("div");
            taskDiv.classList.add("task-div");
            taskDiv.dataset.divIdentifier = task.taskTitle;

            const deleteTaskBtn = document.createElement("button");
            deleteTaskBtn.innerHTML = "Delete";
            deleteTaskBtn.classList.add("delete-task-btn");

            deleteTaskBtn.addEventListener("click", function(){

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
            });

            const renderedTaskTitle = document.createElement("h3");
            renderedTaskTitle.classList.add("task-title");
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
            renderedTaskDueDate.innerHTML = "Due Date: " + task.dueDate;
            renderedTaskPriorityLvl.innerHTML = task.priorityLvl;

            updateTaskPriority(taskDiv, task);
            
            if (task.dueDate === "") {
                renderedTimeLeft.innerText = "Time Left: " + updateTimeLeft();
            }
            else {
                renderedTimeLeft.innerText = "Time Left: " + updateTimeLeft(task.dueDate);
            }
            taskDiv.appendChild(renderedTaskTitle);
            taskDiv.appendChild(renderedTaskDesc);
            taskDiv.appendChild(renderedTaskDueDate);
            taskDiv.appendChild(renderedTimeLeft);
            taskDiv.appendChild(taskCompletedCheckbox);
            taskDiv.appendChild(deleteTaskBtn);


            if (task.isComplete) {
                taskCompletedCheckbox.checked = true;
            }

            renderedTaskTitle.addEventListener("click", function() {

                editTask(this, workingProject);

            });
            
            currentSubHeadingDOMElement.appendChild(taskDiv);
        });
    });
    updateCompletionBar(workingProject);
};