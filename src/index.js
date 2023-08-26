import './style.css';
import initPage from './initPage';
import loadHomePage from './loadHomePage';

const page = (() => {
  initPage();

  const menuButtons = {
    home: document.getElementById('home-btn'),
    menu: document.getElementById('menu-btn'),
  };

  menuButtons.home.addEventListener('click', () => loadHomePage());
  menuButtons.menu.addEventListener('click', () => {
    document.querySelector('main').innerHTML = '';
  });
})();
