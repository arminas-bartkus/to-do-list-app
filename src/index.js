import "./css/styles.css";
import "./css/reset.css"

import { addNewProject } from "./js/addNewProject";
import { createTask } from "./js/createTask";
import { renderProjectHeading } from "./js/renderProjectHeading"
import { renderTasks } from "./js/renderTasks"

let currentProjects = [];

(function() {

function addListeners() {

    // buttons
    
    const addNewProjectBtn = document.querySelector(".add-project-btn");
    const confirmAddTaskBtn = document.querySelector(".confirm-task-button")

    const addTaskModal = document.querySelector(".add-task-modal");


    // modal inputs

    const taskTitleInput = document.querySelector("#taskTitle");
    const taskDescInput = document.querySelector("#taskDesc");
    const taskDueDateInput = document.querySelector("#taskDueDate");
    const taskPriorityLvlInput = document.querySelector("#taskPriorityLvl"); 

    addNewProjectBtn.addEventListener("click", function() {

        const inputtedTitle = prompt("Enter Project Title:", "Default")
        const projectToAdd = addNewProject(inputtedTitle);
        currentProjects.push(projectToAdd);
        
        renderProjectHeading(inputtedTitle);
    });

    confirmAddTaskBtn.addEventListener("click", function() {
        
        addTaskModal.close();

        const newTask = createTask(
            taskTitleInput.value, 
            taskDescInput.value, 
            taskDueDateInput.value, 
            taskPriorityLvlInput.value);

            currentProjects[0].tasks.push(newTask);

            renderTasks(newTask)
                
            });

}

addListeners()


})();

export {currentProjects}
