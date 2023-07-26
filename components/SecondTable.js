import { listOfAchives } from "../utils/archive.js";
import { categories } from "./renderTaskList.js";

const mainItems = document.querySelector(".listSecondTable__items__main");

export const SecondTable = () => {
    let hash = new Map()
   let unarchive = new Map()
   let archive = new Map()
   for(let key of listOfAchives) {
    hash.set(key.category)
    if(!key.archived) {
    if(unarchive.has(key.category)) unarchive.set(key.category, unarchive.get(key.category) + 1)
    else unarchive.set(key.category, 1)
    }
    else {
        if(archive.has(key.category)) archive.set(key.category, archive.get(key.category) + 1)
        else archive.set(key.category, 1)
    }
   }
   
    
    mainItems.innerHTML = "";
    for(let key of hash) {
        mainItems.innerHTML += `<ul class="taskContainerSecond">
      <li class ="task" ><img class="taskImg" src='./assets/img/${
        categories[key[0]]
      }' alt='${key[0]}'/>
      ${key[0]}
      <li class="taskSecond">${unarchive.get(key[0]) || '0'}</li>
      <li class="taskSecond">${archive.get(key[0]) || '0'}</li>
      </ul>`;
    }

}