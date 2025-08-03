import { loadData } from "./loadData";
import { renderProjectHeading } from "./renderProjectHeading";
import { renderSubHeadings } from "./renderSubHeadings";
import { renderTasks } from "./renderTasks";
import { saveData } from "./saveData";
import { renderCompletionBar } from "./renderCompletionBar";

export function renderExistingProject(projectTitle, workingProject, goToProjectButtonPressed) {

    const projectBody = document.querySelector(".current-project-body");
   
    while (projectBody.hasChildNodes()) {
        projectBody.firstChild.remove();
    }
    renderProjectHeading(projectTitle, goToProjectButtonPressed);
    
    renderCompletionBar();
    
    renderSubHeadings(workingProject);
    renderTasks(workingProject);
  

    saveData();


}