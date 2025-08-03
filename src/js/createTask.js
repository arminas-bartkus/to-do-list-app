class ToDoTask {
    
    constructor(taskTitle, taskDesc, dueDate,
        priorityLvl, isComplete = false) {
            this.taskTitle = taskTitle;
            this.taskDesc = taskDesc;
            this.dueDate = dueDate;
            this.priorityLvl = priorityLvl;
            this.isComplete = isComplete;
        };
};


export function createTask(taskTitle, taskDesc, dueDate, priorityLvl) {
    let newTask = new ToDoTask(taskTitle, taskDesc, dueDate, priorityLvl);

    return newTask;
} 