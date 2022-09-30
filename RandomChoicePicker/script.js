const addBtn = document.getElementById("addBtn");
const ranBtn = document.getElementById("ranBtn");
const input = document.getElementById("choicesInput");
const list = document.getElementById("choiceList");
const result = document.getElementById("res");
let flag = false;

let count = 0;

const addChoice = () => {
  if (flag) {
    resetChoice();
  }
  if (input.value.trim() !== "") {
    const item = document.createElement("li");
    item.id = "item" + ++count;
    item.className = "items";
    item.innerText = input.value.trim();
    list.appendChild(item);
    input.value = "";
    count = list.childElementCount;
  } else {
    window.alert("Choice can't be blank");
  }
};

const getRandomChoice = () => {
  const randomIndex = Math.floor(Math.random() * 4);
  const items = list.children;
  console.log(randomIndex);
  result.textContent = items[randomIndex].textContent;
  result.style.visibility = "visible";
  flag = true;
};

const resetChoice = () => {
  let e = document.querySelector("ul");
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
  result.textContent = "";
  result.style.visibility = "hidden";
  flag = false;
};

addBtn.addEventListener("click", addChoice);

ranBtn.addEventListener("click", getRandomChoice);

// input.addEventListener("input", () => {
//   const value = (input.value).trim();
//   if (value != " ") {
//     addBtn.disabled = false;
//   } else {
//     addBtn.disabled = true;
//   }
// });
