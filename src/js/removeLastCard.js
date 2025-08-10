export function removeProjectCard(title) {
    
    const formattedTitle = title.replace(/\s/g, '');
    const btnBelongingToProjectCard = document.querySelector("." + formattedTitle);
    btnBelongingToProjectCard.parentElement.remove();
};