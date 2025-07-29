class Project {
    constructor(title) {
        this.title = title;
    }
}

export function addNewProject(title) {
    let newProjectTitle = new Project(title);
    const newProject = {
        projectTitle: newProjectTitle.title,
        subHeadings: [],
        tasks: [],
        
    }

    return newProject
}