import { currentProjects } from "../index";
import { createSubHeading } from "./createSubHeading";
import { renderSubHeadings } from "./renderSubHeadings"
import { renderExistingProject } from "./renderExistingProject"




export function renderProjectHeading(title) {

let workingProject

const projectBody = document.querySelector(".current-project-body");

    currentProjects.forEach((project) => {
        if (project.projectTitle === title) {
            workingProject = project;
        }
    });
    
    projectBody.classList.add(workingProject.projectTitle);

// render heading 

    const titleDiv = document.createElement("div");
    projectBody.appendChild(titleDiv);

    const renderedProjectTitle = document.createElement("h1");
    renderedProjectTitle.innerHTML =  workingProject.projectTitle;
    titleDiv.appendChild(renderedProjectTitle);

    const addSubHeadingBtn = document.createElement("button");
    addSubHeadingBtn.innerHTML = "Add SubHeading"
    
    addSubHeadingBtn.addEventListener("click", function() {
        const enteredSubheading = prompt("subheading?", "kitchen");
       
       // create Subheading
        const createdSubHeading = createSubHeading(enteredSubheading);
        workingProject.subHeadings.push(createdSubHeading);

        renderSubHeadings(workingProject);
    });

    titleDiv.appendChild(addSubHeadingBtn);

    // create go to Project button button (SHOULD BE ITS OWN FUNCTION)

    const projectListBody = document.querySelector(".project-list-body");
    
    const newProjectCard = document.createElement("div");
    newProjectCard.classList.add("project-card");

    const goToProjectBtn = document.createElement("button");
    goToProjectBtn.innerHTML = "Open Project";
    goToProjectBtn.classList.add(workingProject.projectTitle);


    projectListBody.appendChild(newProjectCard);
    newProjectCard.appendChild(goToProjectBtn);

    goToProjectBtn.addEventListener("click", function() {

        const project = goToProjectBtn.classList.value;
        renderExistingProject(project, workingProject);
    });

return {workingProject}


}



