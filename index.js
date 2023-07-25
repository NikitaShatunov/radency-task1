import onClickArchive from "./handlers/onClickArchive.js";
import onClickDelete from "./handlers/onClickDelete.js";
import onClickEdit from "./handlers/onCLickEdit.js";
import { listOfAchives } from "./assets/img/utils/archive.js";

const mainItems = document.querySelector(".list__items__main ");
const categories = {
    "Shop" : 'task.svg',
    "Random Thought": 'thought.svg',
    "Gym" : 'gym.svg',
    "Idea" : 'idea.svg'
}

const saveBtn = document.querySelector('.modal__close')

export const render = () => {
  mainItems.innerHTML = ''
  listOfAchives.forEach((key, i) => {
    if(!key.archived) 
    mainItems.innerHTML += `<ul class="taskContainer">
    <li class ="task"><img class="taskImg" src='./assets/img/${categories[key.category]}' alt='${key.category}'/>${key.name}</li>
    <li class ="task">${key.created}</li>
    <li class ="task">${key.category}</li>
    <li class ="task">${key.content.length > 30 ? key.content.slice(0, 30)+'...' : key.content}</li>
    <li class ="task">${key.date}</li>
    <li class="sidebar">
    <img class='sidebar__buttons' src='./assets/img/archive.svg' name="archiveItem" id='${key.id}' alt="archive">
    <img class='sidebar__buttons' src= "./assets/img/pencil.svg" name="editItem" id='${key.id}' alt="pencil">
    <img class='sidebar__buttons' src= "./assets/img/trash.svg" name="deleteItem" id='${key.id}' alt="trash">
    </li>
    </ul>`;
  });
  console.log('render');
  const archiveItemButton = document.querySelectorAll('[name="archiveItem"]');
archiveItemButton.forEach((key, i) => {
  key.removeEventListener("click", () => {
    onClickArchive(+key.id);
    render()
  });
  key.addEventListener("click", () => {
    onClickArchive(+key.id);
    render()
  });
})

const deleteItemButton = document.querySelectorAll('[name="deleteItem"]');
deleteItemButton.forEach((key, i) => {
  key.removeEventListener("click", () => {
    onClickDelete(+key.id);
    render()
  });
  key.addEventListener("click", () => {
    onClickDelete(+key.id);
    render()
  });
})

const editItemButton = document.querySelectorAll('[name="editItem"]');
editItemButton.forEach((key, i) => {
  key.removeEventListener("click", () => {
    onClickEdit(+key.id);
    render()
  });
  key.addEventListener("click", () => {
    onClickEdit(+key.id);
    render()
  });
})
}
saveBtn.addEventListener('click', () => {
  // is it good?
  setTimeout(() => {
    render()
  }, 0)
  
})


render()