class SubHeading {
    constructor(title, tasks = []) {
        this.title = title;
        this.tasks = tasks;
    }
}
export function createSubHeading(title) {
    const newSubHeading = new SubHeading(title);
    return newSubHeading
}