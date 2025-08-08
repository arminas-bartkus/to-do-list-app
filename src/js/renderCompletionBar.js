export function renderCompletionBar() {
    
    const projectBody = document.querySelector(".current-project-body");
    const completionBarDiv = document.createElement("div");

    completionBarDiv.innerText = "Completion % :";
    completionBarDiv.classList.add("completion-bar");

    projectBody.appendChild(completionBarDiv);
}