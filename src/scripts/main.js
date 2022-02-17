'use strict';

const link = function() {
  const links = document.querySelectorAll('.links__item');

  links.forEach(item => {
    const linkBlur = function() {
      item.classList.remove('is-active');
      item.classList.add('visited');
      item.classList.add('border');
    };

    item.addEventListener('click', function() {
      item.classList.toggle('is-active');
      item.onblur = linkBlur;
    });
  });
};

const select = function() {
  const mainSelect = document.querySelector('.select');
  const formIcon = document.querySelector('.form__icon');
  const formHeader = document.querySelector('.form__header');
  const selectIcon = document.querySelector('.select__icon');
  const selectItem = document.querySelectorAll('.select__item');
  const formSelected = document.querySelector('.form__selected');
  const currentSelect = document.querySelector('.select__current');

  selectIcon.addEventListener('click', function() {
    mainSelect.classList.toggle('is-active');

    if (mainSelect.classList.contains('is-active')) {
      currentSelect.innerText = 'Select';
    } else {
      currentSelect.innerText = 'No selected element';
    }
  });

  formIcon.addEventListener('click', function() {
    if (currentSelect.innerText !== 'No selected element'
        && currentSelect.innerText !== 'Select') {
      const div = document.createElement('div');

      div.className = 'select__current form__selected';
      div.innerText = currentSelect.innerText;
      formHeader.after(div);
    }
  });

  selectItem.forEach(item => {
    item.addEventListener('click', function() {
      const text = this.innerText;
      const currentText = currentSelect;

      currentText.innerText = text;
      mainSelect.classList.remove('is-active');
      formSelected.innerText = text;
    });
  });
};

link();
select();
