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
import { updateTimeLeft } from "./js/updateTimeLeft";
import { updateTaskPriority } from "./js/updateTaskPriority";

let currentProjects = [];
let editTaskModal;

(function() {

    currentProjects = loadData();
    
    if (currentProjects === undefined) {
        currentProjects = [];
    };

    function addListeners() {

        // buttons
    
        const addNewProjectBtn = document.querySelector(".add-project-btn");
        const confirmAddTaskBtn = document.querySelector(".confirm-task-button");
        const clearLocalStorageBtn = document.querySelector(".clear-storage");
        const confirmEditTaskBtn = document.querySelector(".confirm-edit-task-button");

        const addTaskModal = document.querySelector(".add-task-modal");
        editTaskModal = document.querySelector(".edit-task-modal");

        // modal inputs - add task

        const taskTitleInput = document.querySelector("#taskTitle");
        const taskDescInput = document.querySelector("#taskDesc");
        const taskDueDateInput = document.querySelector("#taskDueDate");
        const taskPriorityLvlInput = document.querySelector("#taskPriorityLvl");

        // modal inputs - edit task

        let editTaskTitleInput = document.querySelector("#edittedTaskTitle");
        let editTaskDescInput = document.querySelector("#edittedTaskDesc");
        let editTaskDueDateInput = document.querySelector("#edittedTaskDueDate");
        let editTaskPriorityLvlInput = document.querySelector("#edittedTaskPriorityLvl");

        // create min date as today


        //TESTTTINGS 

        let divToEdit;
        let existingHeadingList = document.querySelectorAll("h3");


        taskDueDateInput.min = new Date().toISOString().split("T")[0];
        editTaskDueDateInput.min = new Date().toISOString().split("T")[0];

    
        clearLocalStorageBtn.addEventListener("click", function() {
            clearLocalStorage()
        });

        addNewProjectBtn.addEventListener("click", function() {

            const inputtedTitle = prompt("Enter Project Title:", "Default")
            const projectToAdd = addNewProject(inputtedTitle);

            currentProjects.push(projectToAdd);
        
            renderProjectHeading(inputtedTitle);
            renderCompletionBar();
        });

        confirmAddTaskBtn.addEventListener("click", function() {
        
            addTaskModal.close();

            let subHeadingtoAppend = addTaskModal.dataset.subHeading;
        
            const newTask = createTask(
                taskTitleInput.value, 
                taskDescInput.value, 
                taskDueDateInput.value, 
                taskPriorityLvlInput.value);

            for (const subHeading in workingProject.subHeadings) {
                
                const subHeadingToCheck = workingProject.subHeadings[subHeading].title;

                if (subHeadingToCheck === subHeadingtoAppend) {
                    workingProject.subHeadings[subHeading].tasks.push(newTask);
                };
            };
            renderNewTask(workingProject, subHeadingtoAppend);
        });
        
        confirmEditTaskBtn.addEventListener("click", function() {
        

            let fetchedArrayTask = createTask(
                editTaskModal.dataset.fetchedTaskTitle,
                editTaskModal.dataset.fetchedTaskDesc,
                editTaskModal.dataset.fetchedDueDate,
                editTaskModal.dataset.fetchedPrioLvl
            )

            let edittedArrayTask = createTask(fetchedArrayTask.taskTitle,
                fetchedArrayTask.taskDesc, 
                fetchedArrayTask.dueDate, 
                fetchedArrayTask.priorityLvl)
        
                edittedArrayTask.taskTitle = editTaskTitleInput.value;
                edittedArrayTask.taskDesc = editTaskDescInput.value;
                edittedArrayTask.dueDate = editTaskDueDateInput.value;
                edittedArrayTask.priorityLvl = editTaskPriorityLvlInput.value;

                existingHeadingList = document.querySelectorAll("h3");
                existingHeadingList.forEach((heading) => {

                if (heading.innerText === fetchedArrayTask.taskTitle) {
                divToEdit = heading.parentElement;
                };
            });

                divToEdit.children[0].innerText = edittedArrayTask.taskTitle;
                divToEdit.children[1].innerText = edittedArrayTask.taskDesc;
                divToEdit.children[2].innerText = edittedArrayTask.dueDate;
                divToEdit.children[3].innerText = edittedArrayTask.priorityLvl;

            if (edittedArrayTask.dueDate === "") {
                divToEdit.children[6].innerText = updateTimeLeft();
            }
            else {
                divToEdit.children[6].innerText = updateTimeLeft(edittedArrayTask.dueDate);
            };

            updateTaskPriority(divToEdit, edittedArrayTask);

                workingProject.subHeadings.forEach(subHeading => {
                    subHeading.tasks.forEach((task) => {
                        if (task.taskTitle === fetchedArrayTask.taskTitle) { 
                            task.taskTitle = edittedArrayTask.taskTitle;
                            task.taskDesc = edittedArrayTask.taskDesc;
                            task.dueDate = edittedArrayTask.dueDate;
                            task.priorityLvl = edittedArrayTask.priorityLvl;
                            editTaskModal.close();

                            // fix this
                        }
                    })
    });

});



};

addListeners();


})();

export {currentProjects, editTaskModal};
