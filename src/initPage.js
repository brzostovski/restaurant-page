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
    }

    headerContent.title.textContent = 'Project: Restaurant Page';

    Object.keys(headerContent).forEach(key => {
      headerWrapper.appendChild(headerContent[key]);
    });

    return headerWrapper;
  })();

  return {init};
})();

const homePage = (() => {
  let homePageWrapper = document.createElement('main');

  const init = (() => {
    let homePageContent = {
      title: document.createElement('h1'),
      image: document.createElement('img'),
    }

    homePageContent.title.textContent = 'Piazza Nuova';
    homePageContent.image.src = pizzaPicture;

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

    footerContent.title.textContent = 'This is a footer';

    Object.keys(footerContent).forEach(key => {
      footerWrapper.appendChild(footerContent[key]);
    });

    return footerWrapper;
  })();

  return {init};
})();