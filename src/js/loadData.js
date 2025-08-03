import { loadExistingProjectCards } from "./loadExistingProjectCards"

export function loadData() {
    
    if (!localStorage.getItem("projectData")) {

    }

    else {
        let existingData = localStorage.getItem("projectData");
        existingData = JSON.parse(existingData);
      
        loadExistingProjectCards(existingData);
    

        return existingData;
    }
    
}