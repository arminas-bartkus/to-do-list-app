import { saveData } from "./saveData";
import { updateCompletionBar } from "./updateCompletionBar";

export function toggleCompletion(taskToEdit, workingProject) {
    
    taskToEdit.isComplete = !taskToEdit.isComplete;
    updateCompletionBar(workingProject);

    saveData();
}