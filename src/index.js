import "./css/styles.css";
import "./css/reset.css"

import { addNewProject } from "./js/addNewProject";
import { addTaskToList } from "./js/addTaskToList";

const toDoListController = (function() {


let currentProjects = [];

const newProject = {
    projectTitle: "",
    subHeadingTitles: [],
    tasks: [],
}

function addListeners() {
    
    const addNewProjectBtn = document.querySelector(".add-project-btn");
    const addTaskBtn = document.querySelector(".add-task");
    const confirmAddTaskBtn = document.querySelector(".confirm-task-button")


    const addTaskModal = document.querySelector(".add-task-modal");

    const taskTitleInput = document.querySelector("#taskTitle");
    const taskDescInput = document.querySelector("#taskDesc");
    const taskDueDateInput = document.querySelector("#taskDueDate");
    const taskPriorityLvlInput = document.querySelector("#taskPriorityLvl"); 

    addNewProjectBtn.addEventListener("click", function() {

        const inputtedTitle = prompt("enterProjectName", "Default")
        const projectToAdd = addNewProject(inputtedTitle);
        currentProjects.push(projectToAdd);
    });

    addTaskBtn.addEventListener("click", function() {
        addTaskModal.showModal();
    });

    confirmAddTaskBtn.addEventListener("click", function() {
        addTaskModal.close()

        addTaskToList(
            taskTitleInput.value, 
            taskDescInput.value, 
            taskDueDateInput.value, 
            taskPriorityLvlInput.value);

        


    });
            

}

addListeners()


})();