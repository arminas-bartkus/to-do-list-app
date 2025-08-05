import "./css/styles.css";
import "./css/reset.css"

import { addNewProject } from "./js/addNewProject";
import { createTask } from "./js/createTask";
import { renderProjectHeading } from "./js/renderProjectHeading"
import { renderNewTask } from "./js/renderNewTask"
import { workingProject } from "./js/renderSubHeadings";
import { loadData } from "./js/loadData";
import { clearLocalStorage } from "./js/clearLocalStorage";
import { renderCompletionBar } from "./js/renderCompletionBar";



let currentProjects = [];
let editTaskModal

(function() {

    

    currentProjects = loadData();
    
    if (currentProjects === undefined) {
        currentProjects = [];
    } 

function addListeners() {

    // buttons
    
    const addNewProjectBtn = document.querySelector(".add-project-btn");
    const confirmAddTaskBtn = document.querySelector(".confirm-task-button");
    const clearLocalStorageBtn = document.querySelector(".clear-storage");

    const addTaskModal = document.querySelector(".add-task-modal");
    editTaskModal = document.querySelector(".edit-task-modal");


    // modal inputs

    const taskTitleInput = document.querySelector("#taskTitle");
    const taskDescInput = document.querySelector("#taskDesc");
    const taskDueDateInput = document.querySelector("#taskDueDate");
    const taskPriorityLvlInput = document.querySelector("#taskPriorityLvl");

    // create min date as today

    taskDueDateInput.min = new Date().toISOString().split("T")[0];
    
    
    clearLocalStorageBtn.addEventListener("click", function() {
        clearLocalStorage()
       
    });

    addNewProjectBtn.addEventListener("click", function() {

        const inputtedTitle = prompt("Enter Project Title:", "Default")
        const projectToAdd = addNewProject(inputtedTitle);

        projectToAdd.addNewProject1();
        currentProjects.push(projectToAdd);
        
      
        renderProjectHeading(inputtedTitle);
        renderCompletionBar();
    });

    confirmAddTaskBtn.addEventListener("click", function() {
        
        let subHeadingtoAppend = addTaskModal.dataset.subHeading;
        
        addTaskModal.close();
        
        const newTask = createTask(
            taskTitleInput.value, 
            taskDescInput.value, 
            taskDueDateInput.value, 
            taskPriorityLvlInput.value);

            for (const subHeading in workingProject.subHeadings) {
                
                const subHeadingToCheck = workingProject.subHeadings[subHeading].title;

                if (subHeadingToCheck === subHeadingtoAppend) {
                    workingProject.subHeadings[subHeading].tasks.push(newTask);
                }


            }
            renderNewTask(workingProject, subHeadingtoAppend)
            });

}

addListeners()


})();

export {currentProjects, editTaskModal}
