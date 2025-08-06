export function cleanProjectBody() {
    const projectBody = document.querySelector(".current-project-body");

    while (projectBody.hasChildNodes()) {
        projectBody.firstChild.remove();
    };
};