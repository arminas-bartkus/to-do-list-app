import { editTaskModal } from "..";
import { updateTaskPriority } from "./updateTaskPriority";
import { updateTimeLeft } from "./updateTimeLeft";

export function editTask(renderedTaskDiv, task) {

   
    const confirmEditTaskBtn = document.querySelector(".confirm-edit-task-button");

    // find input boxes 

    const taskTitleInput = document.querySelector("#edittedTaskTitle");
    const taskDescInput = document.querySelector("#edittedTaskDesc");
    const taskDueDateInput = document.querySelector("#edittedTaskDueDate");
    const taskPriorityLvlInput = document.querySelector("#edittedTaskPriorityLvl");

    taskDueDateInput.min = new Date().toISOString().split("T")[0];

    taskTitleInput.value = task.taskTitle;
    taskDescInput.value = task.taskDesc;
    taskDueDateInput.value = task.dueDate;
    taskPriorityLvlInput.value = task.priorityLvl;

    editTaskModal.showModal();

    confirmEditTaskBtn.addEventListener("click", function() {

        task.taskTitle = taskTitleInput.value;
        task.taskDesc = taskDescInput.value;
        task.dueDate = taskDueDateInput.value;
        task.priorityLvl = taskPriorityLvlInput.value;
        
        renderedTaskDiv.children[0].innerText = task.taskTitle;
        renderedTaskDiv.children[1].innerText = task.taskDesc;
        renderedTaskDiv.children[2].innerText = task.dueDate;
        renderedTaskDiv.children[3].innerText = task.priorityLvl;

        if (task.dueDate === "") {
                renderedTaskDiv.children[6].innerText = updateTimeLeft();
            }
        else {
                renderedTaskDiv.children[6].innerText = updateTimeLeft(task.dueDate);
            }
        
        updateTaskPriority(renderedTaskDiv, task)
    
        editTaskModal.close();
    
        // just make sure original task arrays are editted correctly, (i.e. add new task
        // edit it, check array and load page, edit existing task, try load page again,
        // see if it stays)

    });


        

};
