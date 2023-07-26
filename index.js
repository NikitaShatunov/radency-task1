import { SecondTable } from "./components/SecondTable.js";
import { renderList } from "./components/renderTaskList.js";

const saveBtn = document.querySelector(".modal__close");

saveBtn.addEventListener("click", () => {
  setTimeout(() => {
    renderList();
    SecondTable();
  }, 0);
});
SecondTable();
renderList();
