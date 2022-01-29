const tabOneEl = document.getElementById("tab-one");
const tabTwoEl = document.getElementById("tab-two");
const tabThreeEl = document.getElementById("tab-three");

tabOneEl.addEventListener("click", () => {
  tabOneEl.classList.add("tab-item active");
  if(tabTwoEl.classList.contains("tab-item active")) tabTwoEl.classList.remove("tab-item active");
  if(tabThreeEl.classList.contains("tab-item active")) tabThreeEl.classList.remove("tab-item active");
});

tabTwoEl.addEventListener("click", () => {
  tabTwoEl.classList.add("tab-item active");
  if(tabOneEl.classList.contains("tab-item active")) tabOneEl.classList.remove("tab-item active");
  if(tabThreeEl.classList.contains("tab-item active")) tabThreeEl.classList.remove("tab-item active");
});

tabThreeEl.addEventListener("click", () => {
  tabThreeEl.classList.add("tab-item active");
  if(tabOneEl.classList.contains("tab-item active")) tabOneEl.classList.remove("tab-item active");
  if(tabTwoEl.classList.contains("tab-item active")) tabTwoEl.classList.remove("tab-item active");
});