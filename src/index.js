import './style.css';
import initHomePage from './initHomePage';

const page = (() => {
  initHomePage();

  const menuButtons = {
    home: document.getElementById('home-btn'),
  };

  menuButtons.home.addEventListener('click', () => console.log('click'));
})();
