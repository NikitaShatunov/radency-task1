import { onEditContent } from "../utils/store.js";
import { renderList } from "./renderTaskList.js";

(function () {
  const backdrop = document.querySelector(".modal__window__content__backdrop");
  const content = document.querySelector("#contentSecond");
  const name = document.querySelector('.modal__window__content__container__left__name')
  document.addEventListener("click", modalHandler);
  function modalHandler(evt) {
    const modalBtnOpen = evt.target.closest(".editZoom");
    if (modalBtnOpen) {
      const modalSelector = modalBtnOpen.dataset.modal;
      showModal(document.querySelector(modalSelector));
    }

    const modalBtnClose = evt.target.closest(".modal__content__close");
    if (modalBtnClose) {
      onEditContent(content.value, content.classList.add, name.value);
      renderList();
      evt.preventDefault();
      hideModal(modalBtnClose.closest(".modal__window__content"));
    }

    if (evt.target.matches(".modal__window__content__backdrop")) {
       content.value = content.textContent

      hideModal(document.querySelector(".modal__window__content.show"));
    }
  }

  function showModal(modalElem) {
    modalElem.classList.add("show");
    backdrop.classList.remove("hidden");
  }

  function hideModal(modalElem) {
    modalElem.classList.remove("show");
    backdrop.classList.add("hidden");
  }
})();
