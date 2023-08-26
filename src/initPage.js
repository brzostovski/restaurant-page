import pizzaPicture from './pizza.jpg';

export default function initPage() {
  let contentContainer = document.createElement('div');
  contentContainer.classList.add('content-container');

  let pageContents = {
    header: header.init,
    homePage: homePage.init,
    footer: footer.init,
  };

  Object.keys(pageContents).forEach(key => {
    contentContainer.appendChild(pageContents[key]);
  });

  return document.body.appendChild(contentContainer);
}

const header = (() => {
  let headerWrapper = document.createElement('header');

  const init = (() => {
    let headerContent = {
      title: document.createElement('span'),
      menu: createPageMenu(),
    }

    headerContent.title.textContent = 'Project: Restaurant Page';

    Object.keys(headerContent).forEach(key => {
      headerWrapper.appendChild(headerContent[key]);
    });

    return headerWrapper;
  })();

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

  return {init};
})();

const homePage = (() => {
  let homePageWrapper = document.createElement('main');

  const init = (() => {
    let homePageContent = {
      title: document.createElement('h1'),
      image: document.createElement('img'),
      mainPara: document.createElement('p'),
    }

    homePageContent.title.textContent = 'Piazza Nuova';
    homePageContent.image.src = pizzaPicture;
    homePageContent.mainPara.textContent = `Nostrud cillum officia culpa elit ipsum ut amet eiusmod officia aliquip elit. Ex voluptate reprehenderit amet incididunt aliquip cupidatat incididunt quis proident ipsum. Dolor adipisicing id ea qui irure anim. Consectetur ipsum nulla laboris do adipisicing anim. Commodo laborum labore labore duis adipisicing esse qui proident sit. Esse culpa excepteur exercitation culpa nostrud amet ut.

    Proident officia nostrud cillum aute tempor sint. Ex do ut reprehenderit ipsum proident in proident pariatur minim nisi ex mollit officia veniam. Est nulla magna dolor nulla cupidatat enim veniam aliqua id nostrud. Veniam pariatur minim nostrud ut est sit et.
  
    Consequat amet do reprehenderit deserunt minim velit irure anim magna dolore ipsum minim deserunt ex. Do sint ut ullamco excepteur. Exercitation culpa quis minim ea adipisicing irure dolore nostrud. Tempor occaecat veniam id enim eu duis sint aliquip velit velit aliqua fugiat. Nulla sit aute magna nostrud ea laboris fugiat sit anim consequat aliquip.`;

    Object.keys(homePageContent).forEach(key => {
      homePageWrapper.appendChild(homePageContent[key]);
    });

    return homePageWrapper;
  })();

  return {init};
})();

const footer = (() => {
  let footerWrapper = document.createElement('footer');

  const init = (() => {
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

  return {init};
})();