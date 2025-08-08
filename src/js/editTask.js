import { editTaskModal } from "..";
import { createTask } from "./createTask";
import { updateTaskPriority } from "./updateTaskPriority";
import { updateTimeLeft } from "./updateTimeLeft";

export function editTask(renderedTaskTitle, workingProject) {


    let fetchedArrayTask;
    let divToEdit = renderedTaskTitle.parentElement; 

    let subHeadingTitle = divToEdit.parentElement.dataset.subHeadingData;

    workingProject.subHeadings.forEach(subHeading => {

        if (subHeading.title === subHeadingTitle) {
            subHeading.tasks.forEach((task) => {
          
                if (task.taskTitle === renderedTaskTitle.innerText) {
                    fetchedArrayTask = createTask(task.taskTitle, task.taskDesc,
                        task.dueDate, task.priorityLvl);
                
                };
            });
        };
    });

// //     // find input boxes 

    let taskTitleInput = document.querySelector("#edittedTaskTitle");
    let taskDescInput = document.querySelector("#edittedTaskDesc");
    let taskDueDateInput = document.querySelector("#edittedTaskDueDate");
    let taskPriorityLvlInput = document.querySelector("#edittedTaskPriorityLvl");

    taskTitleInput.value = fetchedArrayTask.taskTitle;
    taskDescInput.value = fetchedArrayTask.taskDesc;
    taskDueDateInput.value = fetchedArrayTask.dueDate;
    taskPriorityLvlInput.value = fetchedArrayTask.priorityLvl;

    editTaskModal.dataset.fetchedTaskTitle = fetchedArrayTask.taskTitle;
    editTaskModal.dataset.fetchedTaskDesc = fetchedArrayTask.taskTitle;
    editTaskModal.dataset.fetchedDueDate = fetchedArrayTask.dueDate;
    editTaskModal.dataset.fetchedPrioLvl = fetchedArrayTask.priorityLvl;



    editTaskModal.showModal();
 
    console.log("got here")
}

