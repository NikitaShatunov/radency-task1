import { listOfAchives } from "../utils/archive.js";
import onClickArchive from "../handlers/onClickArchive.js";
import onClickDelete from "../handlers/onClickDelete.js";
import onClickEdit from "../handlers/onCLickEdit.js";
import { SecondTable } from "./SecondTable.js";
import { onClickZoomContent } from "../handlers/onClickZoomContent.js";

export const categories = {
  Shop: "task.svg",
  "Random Thought": "thought.svg",
  Gym: "gym.svg",
  Idea: "idea.svg",
};

export const renderList = () => {
  const mainItems = document.querySelector(".list__items__main ");
  mainItems.innerHTML = "";
  listOfAchives.forEach((key, i) => {
    if (!key.archived)
      mainItems.innerHTML += `<ul class="taskContainer">
      <li class ="task"><img class="taskImg" src='./assets/img/${
        categories[key.category]
      }' alt='${key.category}'/>${key.name}</li>
      <li class ="task">${key.created}</li>
      <li class ="task">${key.category}</li>
      <li name="content" id='${key.id}' class="task contentOfTask" data-modal="#modal_2">${
        key.content.length > 30 ? key.content.slice(0, 30) + "..." : key.content
      }</li>
      <li class ="task">${key.date}</li>
      <li class="sidebar">
      <img class='sidebar__buttons' src='./assets/img/archive.svg' name="archiveItem" id='${
        key.id
      }' alt="archive">
      <img class='sidebar__buttons' src= "./assets/img/pencil.svg" name="editItem" id='${
        key.id
      }' alt="pencil">
      <img class='sidebar__buttons' src= "./assets/img/trash.svg" name="deleteItem" id='${
        key.id
      }' alt="trash">
      </li>
      </ul>`;
  });
  console.log("renderList");
  const archiveItemButton = document.querySelectorAll('[name="archiveItem"]');
  archiveItemButton.forEach((key, i) => {
    key.addEventListener("click", () => {
      onClickArchive(+key.id);
      renderList();
      SecondTable();
    });
  });
  const deleteItemButton = document.querySelectorAll('[name="deleteItem"]');
  deleteItemButton.forEach((key, i) => {
    key.addEventListener("click", () => {
      onClickDelete(+key.id);
      renderList();
      SecondTable();
    });
  });

  const editItemButton = document.querySelectorAll('[name="editItem"]');
  editItemButton.forEach((key, i) => {
    key.addEventListener("click", () => {
      onClickEdit(+key.id);
      renderList();
      SecondTable();
    });
  });
  const content = document.querySelectorAll('[name="content"]');
  content.forEach((key) => {
    key.addEventListener("click", () => {
      onClickZoomContent(+key.id)
    });
  });
};
