import { saveData } from "./saveData";

export function toggleCompletion(taskToEdit) {
    
    taskToEdit.isComplete = !taskToEdit.isComplete;
    console.log(taskToEdit.isComplete)
    saveData();
    // render completed tasks func?
}