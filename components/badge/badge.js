const hideBtn = document.getElementById("hide-btn");
const badgeContent = document.getElementById("badge-content");
let isVisible = true;
hideBtn.addEventListener("click", () => {
    badgeContent.style.display = !isVisible ? "flex" : "none";
    hideBtn.textContent = !isVisible ? "Hide" : "Hide";
    isVisible = !isVisible;
});