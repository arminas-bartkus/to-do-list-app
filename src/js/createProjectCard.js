import { renderExistingProject } from "./renderExistingProject";

export function createProjectCard(workingProject) {

        const projectListBody = document.querySelector(".project-list-body");
        const newProjectCard = document.createElement("div");
        const projectTitleElement = document.createElement("div");


        projectTitleElement.innerText = workingProject.projectTitle;
        projectTitleElement.classList.add("project-card-title")
        
        newProjectCard.classList.add("project-card");
        newProjectCard.classList.add("go-to-project-card")


        const goToProjectBtn = document.createElement("button");
        goToProjectBtn.innerHTML = "Open";

        let classToAdd = workingProject.projectTitle.trim();
        classToAdd = classToAdd.replace(/\s/g, '');
        goToProjectBtn.classList.add(classToAdd);
        goToProjectBtn.classList.add("go-to-project-card-btn")


        projectListBody.appendChild(newProjectCard);
        newProjectCard.appendChild(projectTitleElement);
        newProjectCard.appendChild(goToProjectBtn);

        goToProjectBtn.addEventListener("click", function() {            
            // bool to prevent project card creation on go to Project Btn
            let goToProjectButtonPressed = true;
            renderExistingProject(workingProject.projectTitle, workingProject, goToProjectButtonPressed);
        })

}