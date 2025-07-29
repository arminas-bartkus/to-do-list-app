import { renderProjectHeading } from "./renderProjectHeading";
import { currentProjects } from "..";
import { renderSubHeadings } from "./renderSubHeadings";


export function renderExistingProject(projectName, workingProject) {

    const projectBody = document.querySelector(".current-project-body");
    
    while (projectBody.hasChildNodes()) {
        projectBody.firstChild.remove();
    }
    renderProjectHeading(projectName);
    renderSubHeadings(workingProject);



}