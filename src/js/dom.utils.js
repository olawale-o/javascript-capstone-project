import { parseDate, capitalizeStr } from './helper.js';

export const createElement = (ele, attributes = {}) => {
  const element = document.createElement(ele);
  Object.keys(attributes).forEach((key) => {
    element.setAttribute(key, attributes[key]);
  });

  return element;
};

export const createComment = (comment) => {
  const li = createElement('li', { class: 'comment' });
  li.innerHTML = `<span>${parseDate(comment.creation_date)}
  ${capitalizeStr(comment.username)}:</span> <span>${comment.comment}</span>`;
  return li;
};

export const createReservation = (reservation) => {
  const li = createElement('li', { class: 'comment' });
  li.innerHTML = `<span>${parseDate(lastReservation.date_start)} -
  ${parseDate(lastReservation.date_end)}  by  </span> <span>${lastReservation.username}</span>`;
  return li;
};

