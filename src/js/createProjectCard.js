import { renderExistingProject } from "./renderExistingProject";

export function createProjectCard(workingProject) {

        const projectListBody = document.querySelector(".project-list-body");
        const newProjectCard = document.createElement("div");

        newProjectCard.classList.add("project-card");

        const goToProjectBtn = document.createElement("button");
        goToProjectBtn.innerHTML = "Open Project";

        goToProjectBtn.classList.add(workingProject.projectTitle);

        projectListBody.appendChild(newProjectCard);
        newProjectCard.appendChild(goToProjectBtn);

        goToProjectBtn.addEventListener("click", function() {
            const projectName = goToProjectBtn.classList.value;
            
            // bool to prevent project card creation on go to Project Btn
            let goToProjectButtonPressed = true;
            renderExistingProject(projectName, workingProject, goToProjectButtonPressed);
        })

}