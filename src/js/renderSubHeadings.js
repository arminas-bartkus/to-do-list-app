import { currentProjects } from "../index";
import { renderProjectHeading } from "./renderProjectHeading";

let workingProject

export function renderSubHeadings(newWorkingProject) {
    
    const projectBody = document.querySelector(".current-project-body");

    workingProject = newWorkingProject;

    workingProject.subHeadings.forEach(subHeading => {
        
    const subHeadingDiv = document.createElement("div");


    const renderedSubHeading = document.createElement("h2");
    renderedSubHeading.innerHTML = subHeading.title;
    subHeadingDiv.appendChild(renderedSubHeading);

    const addTaskBtn = document.createElement("button");
    addTaskBtn.innerHTML = "Add Task";
    subHeadingDiv.appendChild(addTaskBtn);
    addTaskBtn.classList.add(subHeading.title);
    
    addTaskBtn.addEventListener("click", function() {
        const addTaskModal = document.querySelector(".add-task-modal");
        addTaskModal.showModal();
    });

    projectBody.append(subHeadingDiv);
    
 });


};

export { workingProject }

