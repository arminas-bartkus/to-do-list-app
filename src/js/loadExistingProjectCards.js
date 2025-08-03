import { createProjectCard } from "./createProjectCard";

export function loadExistingProjectCards(data) {

    data.forEach((project) => {
        createProjectCard(project);
    });


}