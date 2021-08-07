import './stylesheets/style.css';
import baseView from './js/dom.js';

window.addEventListener('DOMContentLoaded', async () => {
  const root = document.querySelector('#root');
  root.innerHTML = baseView();
});
