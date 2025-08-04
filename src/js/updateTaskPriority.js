export function updateTaskPriority(taskDiv, task) {

    switch (task.priorityLvl) {
        case "1" :
            taskDiv.setAttribute("style", "background-color: lightcoral")
            break
        case "2" :
            taskDiv.setAttribute("style", "background-color: yellowgreen")
            break
        case "3" :
            taskDiv.setAttribute("style", "background-color: lightgreen")
            break

    }

};