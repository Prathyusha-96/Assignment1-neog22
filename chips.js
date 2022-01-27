const chipInputEl  = document.getElementById("chip-input");
const chipWrapperEl = document.getElementById("chips__wrapper");
let chipItems = [];

const createChips = (chipItems) => {
  chipWrapperEl.innerHTML = "";
  chipItems.map((chip) => {
    chipWrapperEl.innerHTML +=
  `
  <span draggable="true" class="chip">
  ${chip}
  <i class="fas fa-times-circle" onclick="removeChip()"></i>
</span>
  `
  });
}
createChips(chipItems);
chipInputEl.addEventListener("keydown", (e) => {
  let newChipInput = chipInputEl.value;
  // console.log(e.key);
  if(e.key === "Enter" && newChipInput !== ""){
    chipItems.push(newChipInput);
    // console.log(newChipInput);
    createChips(chipItems);
    chipInputEl.value = "";
  }
});

const removeChip = () => {
  // console.log(event.target);
  chipWrapperEl.removeChild(event.target.parentNode);
}