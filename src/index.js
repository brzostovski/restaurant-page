import './style.css';
import initPage from './initPage';
import loadHomePage from './loadHomePage';
import loadMenuPage from './loadMenuPage';
import loadFindUsPage from './loadFindUsPage.js';

const page = (() => {
  initPage();

  const menuButtons = {
    home: document.getElementById('home-btn'),
    menu: document.getElementById('menu-btn'),
    findUs: document.getElementById('find-us-btn'),
  };

  menuButtons.home.addEventListener('click', () => loadHomePage());
  menuButtons.menu.addEventListener('click', () => loadMenuPage());
  menuButtons.findUs.addEventListener('click', () => loadFindUsPage());
})();
