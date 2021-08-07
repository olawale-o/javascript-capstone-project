import './stylesheets/style.css';
import { baseView, toggleModal } from './js/dom.js';
import createCommentModal from './js/modal.js';
import {
  fectchMeals, fetchSingleMeal, fetchMealLikes, createApp, fetchMealSingleComment, likeMeal,
} from './js/utils.js';
import { setStorage, getStorage } from './js/storage.js';

window.addEventListener('DOMContentLoaded', async () => {
  const root = document.querySelector('#root');
  const { meals } = await fectchMeals();
  const sixMeals = meals.slice(0, 6);
  root.innerHTML = baseView(sixMeals.length);
  const modal = document.querySelector('#modal-overlay');
  const mealList = document.querySelector('#meal-list');

  let appId = '';
  let mealLikes = [];
  if (!getStorage()) {
    appId = await createApp();
    setStorage(appId);
  } else {
    appId = getStorage();
    mealLikes = await fetchMealLikes(appId);
  }

  const handleLike = async (id) => {
    await likeMeal(id, appId);
    const results = await fetchMealLikes(appId);
    const { likes } = results.find((meal) => id === meal.item_id);
    return likes;
  };

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
      const currentMealLikes = await handleLike(idMeal);
      likeSpan.textContent = currentMealLikes;
    });

    likeDiv.append(likeSpan, heartIcon);
    const commentBtn = document.createElement('button');
    commentBtn.setAttribute('class', 'btn btn-comment');
    commentBtn.textContent = 'Comment';
    const reservationBtn = document.createElement('button');
    reservationBtn.setAttribute('class', 'btn btn-reserve');
    reservationBtn.textContent = 'Reservations';

    commentBtn.addEventListener('click', async () => {
      const { meals } = await fetchSingleMeal(idMeal);
      const comments = await fetchMealSingleComment(appId, idMeal);
      toggleModal();
      modal.appendChild(
        createCommentModal({
          meals,
          appId,
          toggle: toggleModal,
          comments,
        }),
      );
    });
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

  mealLikes.forEach((mealLike) => {
    const selectedMeal = document.querySelector(`#meal-item-${mealLike.item_id}`);
    const likeSpan = selectedMeal.querySelector(`#like-${mealLike.item_id}`);
    likeSpan.textContent = mealLike.likes;
  });
});
