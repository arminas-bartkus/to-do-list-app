class SubHeading {
    constructor(title) {
        this.title = title;
    }
}

export function createSubHeading(title) {
    const newSubHeading = new SubHeading(title); 

    return newSubHeading
}