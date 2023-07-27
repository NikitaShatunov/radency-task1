import { addTask } from "../utils/store.js";

(function ()  {
    const backdrop = document.querySelector('.modal__window__backdrop');
    const category = document.querySelector('#category')
    const name = document.querySelector('#nameOfTask')
    const content = document.querySelector('#content')
    const warning = document.querySelector('.warning')
    document.addEventListener('click', modalHandler);
  
     function modalHandler(evt) {
      const modalBtnOpen = evt.target.closest('.js-modal');
      if (modalBtnOpen) { 
        const modalSelector = modalBtnOpen.dataset.modal;
       
        showModal(document.querySelector(modalSelector));
      }
  
      const modalBtnClose = evt.target.closest('.modal__close');
      if (modalBtnClose) { 
       if(category.value && name.value && content.value) {
        warning.classList.add('hidden')
         addTask(category.value, name.value, content.value)
        evt.preventDefault();
         hideModal(modalBtnClose.closest('.modal__window'));
       }
       else {
        warning.classList.remove('hidden')
       }
      }
  
      if (evt.target.matches('.modal__window__backdrop')) { 
        hideModal(document.querySelector('.modal__window.show'));
      }
    }
  
    function showModal(modalElem) {
      modalElem.classList.add('show');
      backdrop.classList.remove('hidden');
    }
  
    function hideModal(modalElem) {
      modalElem.classList.remove('show');
      backdrop.classList.add('hidden');
    }
  })();
  