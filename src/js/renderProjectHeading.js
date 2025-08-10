import { currentProjects } from "../index";
import { createSubHeading } from "./createSubHeading";
import { renderSubHeadings } from "./renderSubHeadings"
import { createProjectCard } from "./createProjectCard";
import { saveData } from "./saveData";
import { cleanProjectBody } from "./cleanProjectBody";
import { renderTasks } from "./renderTasks";
import { removeProjectCard } from "./removeLastCard";

export function renderProjectHeading(title, goToProjectButtonPressed) {

    let workingProject
    const projectBody = document.querySelector(".current-project-body");

    cleanProjectBody();
    currentProjects.forEach((project) => {
        if (project.projectTitle === title) {
            workingProject = project;
        };
    });
    
    let classToAdd = workingProject.projectTitle.trim();
    classToAdd = classToAdd.replace(/\s/g, '');
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
        let enteredSubheading = prompt("Enter a Sub Section Title:", "Kitchen Cleaning");

        if (enteredSubheading === null || enteredSubheading.length === 0) {emptyInput = true;}
 
        workingProject.subHeadings.forEach((subHeading) => {
            if (subHeading.title === enteredSubheading) {subHeadingExists = true;}
        });

        if (!subHeadingExists && !emptyInput) {
            let createdSubHeading = createSubHeading(enteredSubheading);
            saveData();
            workingProject.subHeadings.push(createdSubHeading);
            cleanProjectBody() 

            projectBody.appendChild(titleDiv);
            renderSubHeadings(workingProject);
            renderTasks(workingProject);
        }

        if (subHeadingExists || emptyInput) {
            alert("Subtitle exists or field is empty, cancelling...")
        }
    });

    const deleteProjectBtn = document.createElement("button");
    deleteProjectBtn.innerText = "Delete Project";
    

    deleteProjectBtn.addEventListener("click", function() {
        cleanProjectBody();
        currentProjects.forEach((project) => {
            if (project.projectTitle === title) {
                const indexOfRemovingProject = currentProjects.indexOf(project);
                currentProjects.splice(indexOfRemovingProject, 1);
                removeProjectCard(title);
            }
        });
    });



    titleDiv.appendChild(addSubHeadingBtn);
    titleDiv.appendChild(deleteProjectBtn);

    if (!goToProjectButtonPressed) {
        createProjectCard(workingProject);
    }

    goToProjectButtonPressed = false;

return { workingProject };


}



