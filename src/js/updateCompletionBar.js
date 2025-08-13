export function updateCompletionBar(workingProject) {

    const completionBarElement = document.querySelector(".completion-bar");

    let completedTasks = []
    let totalTaskCounter = 0;


    workingProject.subHeadings.forEach(subHeading => {
        subHeading.tasks.forEach((task) => {
            totalTaskCounter++
            if (task.isComplete) {
                completedTasks.push(task);
            };
        });
    });


    const percentageCompletion = (completedTasks.length / totalTaskCounter) * 100;
    
    if (percentageCompletion === undefined || percentageCompletion === NaN || percentageCompletion === null) {
        completionBarElement.innerText = "Completion % : "
    }
    else {
    completionBarElement.innerText = "Completion % : " + percentageCompletion + "%";
    }
};