import Logo from '../assets/logo.png';

const modal = document.querySelector('#modal-overlay');
const body = document.querySelector('body');
const main = document.querySelector('main');

export const toggleModal = async () => {
  if (body.style.overflow === '') {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
    modal.innerHTML = '';
  }
  main.classList.toggle('open-modal');
};

export const baseView = () => `<header class="header">
  <div class="container">
    <nav class="nav">
      <div class="logo">
        <img src="${Logo}" alt="logo" />
      </div>
      <ul class="nav-list">
        <li class="nav-item">
            <a href="#" class="nav-link">Meal <span></span></a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link">Categories</a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link">Areas</a>
        </li>
      </ul>
    </nav>
  </div>
</header>
<div class="main-content">
  <div class="container">
      <div class="meals-container">
          <ul class="meal-list" id="meal-list"></ul>
      </div>
  </div>
</div>
<div class="footer">
    <p>Created by Microverse under CC License</p>
</div>
`;