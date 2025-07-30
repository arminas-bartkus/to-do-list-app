class ToDoTask {
    
    constructor(taskTitle, taskDesc, dueDate,
        priorityLvl) {
            this.taskTitle = taskTitle;
            this.taskDesc = taskDesc;
            this.dueDate = dueDate;
            this.priorityLvl = priorityLvl;
        };
};


export function createTask(taskTitle, taskDesc, dueDate, priorityLvl) {
    let newTask = new ToDoTask(taskTitle, taskDesc, dueDate, priorityLvl);

    return newTask;
} 