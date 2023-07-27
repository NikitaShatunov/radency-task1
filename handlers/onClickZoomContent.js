import { listOfAchives } from "../utils/store.js";
//onClick on the content or edit button
export const onClickZoomContent = (id) => {
  const currentTask = listOfAchives.filter((key) => key.id === id);
  
  const label = document.querySelector(
    ".modal__window__content__container__header"
  );
  const name = document.querySelector(
    ".modal__window__content__container__left__name"
  );
  const created = document.querySelector(
    ".modal__window__content__container__left__created"
  );
  const content = document.querySelector("#contentSecond");
  content.classList.add = id;
  label.innerHTML = currentTask[0].category;
  name.value = currentTask[0].name;
  created.innerHTML = currentTask[0].created;
  content.value = currentTask[0].content
}