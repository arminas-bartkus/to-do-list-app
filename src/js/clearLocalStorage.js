import { loadData } from "./loadData";

export function clearLocalStorage() {
    localStorage.setItem("projectData", []);
    loadData();
}