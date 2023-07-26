

(function ()  {
  const backdrop = document.querySelector('.modal__window__content__backdrop');
  document.addEventListener('click', modalHandler);

   function modalHandler(evt) {
   
    const modalBtnOpen = evt.target.closest('.contentOfTask');
    if (modalBtnOpen) { 
      const modalSelector = modalBtnOpen.dataset.modal; 
      showModal(document.querySelector(modalSelector));
    }

    const modalBtnClose = evt.target.closest('.modal__content__close');
    if (modalBtnClose) { 
      evt.preventDefault();
       hideModal(modalBtnClose.closest('.modal__window__content'));
       
    }

    if (evt.target.matches('.modal__window__content__backdrop')) { 
      hideModal(document.querySelector('.modal__window__content.show'));
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
})()