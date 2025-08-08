import { saveData } from "./saveData";
import { toggleCompletion } from "./toggleCompletion";
import { updateCompletionBar } from "./updateCompletionBar";
import { updateTimeLeft } from "./updateTimeLeft"
import { updateTaskPriority } from "./updateTaskPriority"
import { editTask } from "./editTask"

export function renderNewTask(workingProject, workingSubHeading) {

    workingProject.subHeadings.forEach(subHeading => {
        if (subHeading.title === workingSubHeading) {

            const currentSubHeadingDOMElement = document.querySelector("h2[data-sub-heading-data = "  + "'" + subHeading.title + "'" + "]");

            const workingTaskList = subHeading.tasks; 
            const taskToRender = workingTaskList[workingTaskList.length - 1];

            const taskDiv = document.createElement("div");
            
            const renderedTaskTitle = document.createElement("h3");
            const renderedTaskDesc = document.createElement("p");
            const renderedTaskDueDate = document.createElement("p");
            const renderedTaskPriorityLvl = document.createElement("p");
            const renderedTimeLeft = document.createElement("p");
            // repeated code, make function?

            const taskCompletedCheckbox = document.createElement("input");
            taskCompletedCheckbox.setAttribute("type", "checkbox");

            taskCompletedCheckbox.addEventListener("change", function() {
                toggleCompletion(taskToRender, workingProject);
            });

            const deleteTaskBtn = document.createElement("button");
            deleteTaskBtn.innerHTML = "Delete";

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

            renderedTaskTitle.innerHTML = taskToRender.taskTitle;
            renderedTaskDesc.innerHTML = taskToRender.taskDesc;
            renderedTaskDueDate.innerHTML = taskToRender.dueDate;
            renderedTaskPriorityLvl.innerHTML = taskToRender.priorityLvl;

            updateTaskPriority(taskDiv, taskToRender);

            // checks to see that due date inputted

            if (taskToRender.dueDate === "") {
                // throws error
                renderedTimeLeft.innerText = updateTimeLeft();
            }
            else {
                renderedTimeLeft.innerText = updateTimeLeft(taskToRender.dueDate);
            };
    
            renderedTaskTitle.addEventListener("click", function() {
                editTask(renderedTaskTitle, workingProject);                
            });

            taskDiv.appendChild(renderedTaskTitle);
            taskDiv.appendChild(renderedTaskDesc);
            taskDiv.appendChild(renderedTaskDueDate);
            taskDiv.appendChild(renderedTaskPriorityLvl);
            taskDiv.appendChild(deleteTaskBtn);
            taskDiv.appendChild(taskCompletedCheckbox);
            taskDiv.appendChild(renderedTimeLeft);

         
            currentSubHeadingDOMElement.appendChild(taskDiv);

            updateCompletionBar(workingProject);

            saveData();
        };
    });
};