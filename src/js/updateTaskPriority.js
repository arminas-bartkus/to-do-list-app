export function updateTaskPriority(taskDiv, task) {

    switch (task.priorityLvl) {
        case "1" :
            taskDiv.setAttribute("style", "background-color: #f3000094");
            break
        case "2" :
            taskDiv.setAttribute("style", "background-color: #fff170ff");
            break
        case "3" :
            taskDiv.setAttribute("style", "background-color: #4A9782");
            break
        default:
            taskDiv.setAttribute("style", "background-color: #E4E0E1");
    };
};