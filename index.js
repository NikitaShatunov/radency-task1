import { SecondTable } from "./components/SecondTable.js";
import { renderList } from "./components/renderTaskList.js";
import { onClicKDeleteAll } from "./utils/store.js";

const saveBtn = document.querySelector(".modal__close");
const deleteAll = document.querySelector(".sidebar__buttons__delete");

deleteAll.addEventListener("click", () => {
  onClicKDeleteAll();
  renderList();
  SecondTable();
});
saveBtn.addEventListener("click", () => {
  setTimeout(() => {
    renderList();
    SecondTable();
  }, 0);
});
//render of the second table
SecondTable();
//render of the first table
renderList();
