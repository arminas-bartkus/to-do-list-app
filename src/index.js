import "./css/styles.css";
import "./css/reset.css"

import { addNewProject } from "./js/addNewProject";

const toDoListController = (function() {

const newProject = {
    projectTitle: "",
    subHeadingTitles: [],
    taskTitles: [],
}

function addListeners() {
    
    const addNewProjectBtn = document.querySelector(".add-project-btn");

    addNewProjectBtn.addEventListener("click", function() {

            const inputtedTitle = prompt("enterProjectName", "Default")
            addNewProject(inputtedTitle);
    });

}

addListeners()


})();

class ToDoTask {
    
    constructor(taskTitle, taskDesc, dueDate,
        priorityLvl /* which project to add to? */) {
            this.taskTitle = taskTitle;
            this.taskDesc = taskDesc;
            this.dueDate = dueDate;
            this.priorityLvl = priorityLvl;
        }
}

class SubHeading {
    constructor(title) {
        this.title = title;
    }
}