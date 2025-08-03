import { currentProjects } from "..";

export function saveData() {
    localStorage.setItem("projectData", JSON.stringify(currentProjects));
}