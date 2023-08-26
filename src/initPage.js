import loadHomePage from './loadHomePage';

export default function initPage() {
  let contentContainer = document.createElement('div');
  contentContainer.classList.add('content-container');

  let pageContents = {
    header: initHeader,
    homePage: initMain,
    footer: initFooter,
  };

  Object.keys(pageContents).forEach(key => {
    contentContainer.appendChild(pageContents[key]);
  });

  return document.body.appendChild(contentContainer);
}

const initHeader = (() => {
  let headerWrapper = document.createElement('header');

  let headerContent = {
    title: document.createElement('span'),
    menu: createPageMenu(),
  }

  headerContent.title.textContent = 'Project: Restaurant Page';

  Object.keys(headerContent).forEach(key => {
    headerWrapper.appendChild(headerContent[key]);
  });

  function createPageMenu() {
    let pageMenu = document.createElement('div');
    pageMenu.id = 'page-menu';

    let buttons = {
      home: document.createElement('button'),
      menu: document.createElement('button'),
      findUs: document.createElement('button'),
    }

    buttons.home.id = 'home-btn';
    buttons.menu.id = 'menu-btn';
    buttons.findUs.id = 'find-us-btn';

    buttons.home.textContent = 'Home';
    buttons.menu.textContent = 'Menu';
    buttons.findUs.textContent = 'Find Us';

    Object.keys(buttons).forEach(key => {
      pageMenu.appendChild(buttons[key]);
    });

    return pageMenu;
  };

  return headerWrapper;
})();

const initMain = (() => {
  let mainWrapper = document.createElement('main');
  loadHomePage(mainWrapper);

  return mainWrapper;
})();

const initFooter = (() => {
  let footerWrapper = document.createElement('footer');

  let footerContent = {
    title: document.createElement('span'),
  }

  footerContent.title.innerHTML = `<span>
    ©
    <a href="https://github.com/brzostovski" target="_blank">brzostovski</a>
    2023
  </span>`;

  Object.keys(footerContent).forEach(key => {
    footerWrapper.appendChild(footerContent[key]);
  });

  return footerWrapper;
})();