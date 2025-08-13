import { renderCompletionBar } from "./renderCompletionBar";
import { updateCompletionBar } from "./updateCompletionBar";

let workingProject;

export function renderSubHeadings(newWorkingProject) {
    
    const projectBody = document.querySelector(".current-project-body");
    renderCompletionBar();
    workingProject = newWorkingProject;
    
    workingProject.subHeadings.forEach(subHeading => {
        const subHeadingDiv = document.createElement("div");
        subHeadingDiv.classList.add("subheading-div");
        const renderedSubHeading = document.createElement("h2");
        renderedSubHeading.classList.add("subheading-div-title");
        const btnDiv = document.createElement("div");
        btnDiv.classList.add("subheading-btn-div");

        renderedSubHeading.innerHTML = subHeading.title;
        subHeadingDiv.appendChild(renderedSubHeading);

        const addTaskBtn = document.createElement("button");
        addTaskBtn.innerText = "Add Task";
        addTaskBtn.classList.add("add-task-btn")
        btnDiv.appendChild(addTaskBtn);
        renderedSubHeading.dataset.subHeadingData = subHeading.title;

        addTaskBtn.addEventListener("click", function() {
            const addTaskModal = document.querySelector(".add-task-modal");
            addTaskModal.showModal();
            addTaskModal.dataset.subHeading = subHeading.title;
        });

        const deleteSubHeadingBtn = document.createElement("button");
        deleteSubHeadingBtn.innerText = "Delete Sub Section";
        deleteSubHeadingBtn.classList.add("delete-subheading-btn");
        btnDiv.appendChild(deleteSubHeadingBtn);
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


        addTaskBtn.classList.add("subheading-btn-1");
        deleteSubHeadingBtn.classList.add("subheading-btn-2")

        updateCompletionBar(workingProject);
        subHeadingDiv.appendChild(btnDiv);
        projectBody.append(subHeadingDiv);
 });
};
export { workingProject };

