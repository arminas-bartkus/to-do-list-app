import "./css/styles.css";
import "./css/reset.css"


class ToDoTask {
    
    constructor(taskTitle, taskDesc, dueDate,
        priorityLvl /* which project to add to? */) {
            this.taskTitle = taskTitle;
            this.taskDesc = taskDesc;
            this.dueDate = dueDate;
            this.priorityLvl = priorityLvl;
        }
}

class Project {
    constructor(title) {
        this.title = title;
    }
}

class SubHeading {
    constructor(title) {
        this.title = title;
    }
}