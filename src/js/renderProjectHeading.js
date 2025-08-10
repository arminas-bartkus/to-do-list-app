import { currentProjects } from "../index";
import { createSubHeading } from "./createSubHeading";
import { renderSubHeadings } from "./renderSubHeadings"
import { createProjectCard } from "./createProjectCard";
import { saveData } from "./saveData";
import { cleanProjectBody } from "./cleanProjectBody";

export function renderProjectHeading(title, goToProjectButtonPressed) {

    let workingProject
    const projectBody = document.querySelector(".current-project-body");

    cleanProjectBody();
    currentProjects.forEach((project) => {
        if (project.projectTitle === title) {
            workingProject = project;
        };
    });
    
    const classToAdd = workingProject.projectTitle.split(" ") 
    projectBody.classList.add(classToAdd);

    // render heading 

    const titleDiv = document.createElement("div");
    projectBody.appendChild(titleDiv);

    const renderedProjectTitle = document.createElement("h1");
    renderedProjectTitle.innerHTML =  workingProject.projectTitle;
    titleDiv.appendChild(renderedProjectTitle);

    const addSubHeadingBtn = document.createElement("button");
    addSubHeadingBtn.innerHTML = "Add SubHeading";
    
    addSubHeadingBtn.addEventListener("click", function() {
        
        let subHeadingExists = false;
        let emptyInput = false;
        let enteredSubheading = prompt("Enter a Subtitle:", "Kitchen Cleaning");

        if (enteredSubheading.length === 0) {emptyInput = true;}
 
        workingProject.subHeadings.forEach((subHeading) => {
            if (subHeading.title === enteredSubheading) {subHeadingExists = true;}
        });

        if (!subHeadingExists && !emptyInput) {
            let createdSubHeading = createSubHeading(enteredSubheading);
            saveData();
            workingProject.subHeadings.push(createdSubHeading);
            renderSubHeadings(workingProject);
        }

        if (subHeadingExists || emptyInput) {
            alert("Subtitle exists or field is empty, cancelling...")
        }
    });

    titleDiv.appendChild(addSubHeadingBtn);

    if (!goToProjectButtonPressed) {
        createProjectCard(workingProject);
    }

    goToProjectButtonPressed = false;

return { workingProject };


}



