import { renderCompletionBar } from "./renderCompletionBar";
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

        deleteSubHeadingBtn.addEventListener("click", function() {
        
        updateCompletionBar(workingProject);

        const subHeadingDomTitle = deleteSubHeadingBtn.parentElement.firstChild.innerText;

        deleteSubHeadingBtn.parentElement.remove()
        let isSubSectionDeleted = false;


            workingProject.subHeadings.forEach((subHeading) => {
                if (subHeading.title === subHeadingDomTitle) {
                    console.log(workingProject)
                    let subHeadingToDeleteIndex = workingProject.subHeadings.indexOf(subHeading);
                    let newProject = workingProject.subHeadings.splice(subHeadingToDeleteIndex, 1);
                    console.log(newProject)
                    updateCompletionBar(newProject);
                }
            });
        
        });


        updateCompletionBar(workingProject);
        projectBody.append(subHeadingDiv);
 });
};
export { workingProject };

