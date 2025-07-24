class Project {
    constructor(title) {
        this.title = title;
    }
}

export function addNewProject(title) {
    let newProject = new Project(title);
}