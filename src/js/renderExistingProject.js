import { renderProjectHeading } from "./renderProjectHeading";
import { renderSubHeadings } from "./renderSubHeadings";
import { renderTasks } from "./renderTasks";


export function renderExistingProject(projectName, workingProject, goToProjectButtonPressed) {

    const projectBody = document.querySelector(".current-project-body");
    
    while (projectBody.hasChildNodes()) {
        projectBody.firstChild.remove();
    }
    renderProjectHeading(projectName, goToProjectButtonPressed);
    renderSubHeadings(workingProject);
    renderTasks(workingProject);


}