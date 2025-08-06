import { loadExistingProjectCards } from "./loadExistingProjectCards"

export function loadData() {
    
    if (!localStorage.getItem("projectData")) {
        // if no storage do nothing
    }

    else {
        let existingData = localStorage.getItem("projectData");
        existingData = JSON.parse(existingData);
        loadExistingProjectCards(existingData);
        return existingData;
    };  
};