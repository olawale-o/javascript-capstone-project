import Logo from '../assets/logo.png';

const baseView = () => `<header class="header">
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
`;

export default baseView;