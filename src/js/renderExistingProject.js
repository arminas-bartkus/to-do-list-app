import { renderProjectHeading } from "./renderProjectHeading";
import { renderSubHeadings } from "./renderSubHeadings";
import { renderTasks } from "./renderTasks";
import { saveData } from "./saveData";
import { renderCompletionBar } from "./renderCompletionBar";
import { cleanProjectBody } from "./cleanProjectBody";

export function renderExistingProject(projectTitle, workingProject, goToProjectButtonPressed) {
   
    cleanProjectBody();
    renderProjectHeading(projectTitle, goToProjectButtonPressed);
    renderCompletionBar();
    renderSubHeadings(workingProject);
    renderTasks(workingProject);

    saveData();
};