import { createElement } from './dom.utils.js';

const baseModal = (args) => {
  const {
    meals, toggle,
  } = args;
  const {
    strMeal, strMealThumb, strCategory, strArea,
  } = meals[0];
  const modal = createElement('div', { class: 'modal' });
  const modalContent = createElement('div', { class: 'modal-content' });
  const modalHeader = createElement('div', { class: 'modal-header' });
  const img = createElement('img', { class: 'modal-img', src: strMealThumb, alt: strMealThumb });
  const closeIcon = createElement('i', { class: 'bx bx-x close-icon', id: 'closeModal' });
  closeIcon.addEventListener('click', () => {
    toggle();
  });
  modalHeader.append(img, closeIcon);

  const modalBody = createElement('div', { class: 'modal-body' });
  const briefDetails = createElement('div', { class: 'brief-details' });
  const h3 = createElement('h3');
  h3.textContent = strMeal;
  const listDetails = createElement('ul', { class: 'list-details' });
  const mealCategory = createElement('li', { class: 'tag' });
  mealCategory.textContent = `Category: ${strCategory}`;

  const mealArea = createElement('li', { class: 'tag' });
  mealArea.textContent = `Area: ${strArea}`;
  listDetails.append(mealCategory, mealArea);
  briefDetails.append(h3, listDetails);

  modalBody.append(briefDetails);
  modalContent.append(modalHeader, modalBody);
  modal.append(modalContent);

  return modal;
};

const createCommentModal = (args) => {
  const { meals, toggle } = args;

  return baseModal({
    meals,
    toggle,
  });
};

export default createCommentModal;