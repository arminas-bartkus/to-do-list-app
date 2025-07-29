import { renderProjectHeading } from "./renderProjectHeading";
import { currentProjects } from "..";
import { renderSubHeadings } from "./renderSubHeadings";


export function renderExistingProject(project) {

    const projectBody = document.querySelector(".current-project-body");
    
    while (projectBody.hasChildNodes()) {
        projectBody.firstChild.remove();
    }

    renderProjectHeading(project);
    renderSubHeadings(project);



}