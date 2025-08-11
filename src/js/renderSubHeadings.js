import { renderCompletionBar } from "./renderCompletionBar";
import { renderTasks } from "./renderTasks";
import { updateCompletionBar } from "./updateCompletionBar";

let workingProject;

export function renderSubHeadings(newWorkingProject) {
    
    const projectBody = document.querySelector(".current-project-body");
    renderCompletionBar();
    workingProject = newWorkingProject;
    
    workingProject.subHeadings.forEach(subHeading => {
        const subHeadingDiv = document.createElement("div");
        const renderedSubHeading = document.createElement("h2");

        renderedSubHeading.innerHTML = subHeading.title;
        subHeadingDiv.appendChild(renderedSubHeading);

        const addTaskBtn = document.createElement("button");
        addTaskBtn.innerText = "Add Task";
        subHeadingDiv.appendChild(addTaskBtn);
        renderedSubHeading.dataset.subHeadingData = subHeading.title;

        addTaskBtn.addEventListener("click", function() {
            const addTaskModal = document.querySelector(".add-task-modal");
            addTaskModal.showModal();
            addTaskModal.dataset.subHeading = subHeading.title;
        });

        const deleteSubHeadingBtn = document.createElement("button");
        deleteSubHeadingBtn.innerText = "Delete Sub Section";
        subHeadingDiv.appendChild(deleteSubHeadingBtn);
        deleteSubHeadingBtn.dataset.subHeading = subHeading.title;

        deleteSubHeadingBtn.addEventListener("click", function() {
        
        updateCompletionBar(workingProject);
        deleteSubHeadingBtn.parentElement.remove();

        const subHeadingDomTitle = deleteSubHeadingBtn.dataset.subHeading;
    
            workingProject.subHeadings.forEach((subHeading) => {

                if (subHeading.title === subHeadingDomTitle) {
                    let subHeadingToDeleteIndex = workingProject.subHeadings.indexOf(subHeading);
                    workingProject.subHeadings.splice(subHeadingToDeleteIndex,1); 
                    updateCompletionBar(workingProject);
                }
            });
        });

        updateCompletionBar(workingProject);
        projectBody.append(subHeadingDiv);
 });
};
export { workingProject };

