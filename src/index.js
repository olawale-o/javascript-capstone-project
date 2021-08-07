import './stylesheets/style.css';
import baseView from './js/dom.js';
import fectchMeals from './js/utils.js';

window.addEventListener('DOMContentLoaded', async () => {
  const root = document.querySelector('#root');
  const { meals } = await fectchMeals();
  const sixMeals = meals.slice(0, 6);
  root.innerHTML = baseView();
  const mealList = document.querySelector('#meal-list');

  const createMealElement = ({ idMeal, strMeal, strMealThumb }) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'meal-item');
    li.setAttribute('id', `meal-item-${idMeal}`);
    const div = document.createElement('div');
    div.setAttribute('class', 'meal-item__container');
    const imgDiv = document.createElement('div');
    imgDiv.setAttribute('class', 'meal-img');
    const img = document.createElement('img');
    img.setAttribute('src', strMealThumb);
    img.setAttribute('alt', 'alt');
    const nameLikeDiv = document.createElement('div');
    nameLikeDiv.setAttribute('class', 'meal-name-likes');
    const spanName = document.createElement('span');
    spanName.setAttribute('class', 'meal-name');
    spanName.textContent = strMeal;
    const likeDiv = document.createElement('div');
    likeDiv.setAttribute('class', 'likes');
    const likeSpan = document.createElement('span');
    likeSpan.setAttribute('class', 'meal-likes');
    likeSpan.setAttribute('id', `like-${idMeal}`);
    likeSpan.textContent = '0';
    const heartIcon = document.createElement('i');
    heartIcon.setAttribute('class', 'bx bx-heart');
    heartIcon.addEventListener('click', async () => {
    });

    likeDiv.append(likeSpan, heartIcon);
    const commentBtn = document.createElement('button');
    commentBtn.setAttribute('class', 'btn btn-comment');
    commentBtn.textContent = 'Comment';
    const reservationBtn = document.createElement('button');
    reservationBtn.setAttribute('class', 'btn btn-reserve');
    reservationBtn.textContent = 'Reservations';

    commentBtn.addEventListener('click', async () => {});
    reservationBtn.addEventListener('click', async () => {});

    imgDiv.appendChild(img);
    nameLikeDiv.append(spanName, likeDiv);
    div.append(imgDiv, nameLikeDiv, commentBtn, reservationBtn);
    li.append(div);
    return li;
  };

  sixMeals.forEach((meal) => {
    mealList.appendChild(createMealElement(meal));
  });
});
