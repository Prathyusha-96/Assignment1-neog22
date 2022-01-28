const alertDialogBtn = document.getElementById("alert_dialog_btn");
const simpleDialogBtn = document.getElementById("simple_dialog_btn");
const confirmationDialogBtn = document.getElementById("confirmation_dialog_btn")
const dialogContainer = document.getElementById("dialog_container");
const alertDialogEl = document.getElementById("alert_dialog");
const simpleDialogEl = document.getElementById("simple_dialog");
const confirmationDialogEl = document.getElementById("confirmation_dialog");

alertDialogBtn.addEventListener("click", () => {
  dialogContainer.style.display = "flex";
  alertDialogEl.style.display = "flex";
});

simpleDialogBtn.addEventListener("click", () => {
  dialogContainer.style.display = "flex";
  simpleDialogEl.style.display = "flex";
});

confirmationDialogBtn.addEventListener("click", () => {
  dialogContainer.style.display = "flex";
  confirmationDialogEl.style.display = "flex";
});

window.addEventListener("click", e => {
  if (e.target == dialogContainer) {
    dialogContainer.style.display = "none";
    confirmationDialogEl.style.display = "none";
    simpleDialogEl.style.display = "none";
    alertDialogEl.style.display = "none";
  }
});