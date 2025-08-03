import { currentProjects } from "../index";
import { createSubHeading } from "./createSubHeading";
import { renderSubHeadings } from "./renderSubHeadings"
import { renderExistingProject } from "./renderExistingProject"
import { createProjectCard } from "./createProjectCard";
import { saveData } from "./saveData";




export function renderProjectHeading(title, goToProjectButtonPressed) {

let workingProject

const projectBody = document.querySelector(".current-project-body");

console.log(goToProjectButtonPressed)
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
        
        saveData();
        
        workingProject.subHeadings.push(createdSubHeading);

        renderSubHeadings(workingProject);
    });

    titleDiv.appendChild(addSubHeadingBtn);

    if (!goToProjectButtonPressed) {
        createProjectCard(workingProject);
    }

    goToProjectButtonPressed = false;

return { workingProject }


}



