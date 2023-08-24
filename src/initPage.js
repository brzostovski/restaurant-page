export default function initPage() {
  let contentContainer = document.createElement('div');
  contentContainer.classList.add('content-container');

  let pageContents = {
    header: document.createElement('header'),
    homePage: homePage.init(),
    footer: document.createElement('footer'),
  };

  pageContents.header.textContent = 'Project: Restaurant Page';
  pageContents.footer.textContent = 'This is a footer';

  Object.keys(pageContents).forEach(key => {
    contentContainer.appendChild(pageContents[key]);
  });

  return document.body.appendChild(contentContainer);
}

const homePage = (() => {
  let homePageWrapper = document.createElement('main');

  function init() {
    let homePageContent = {
      title: document.createElement('h1'),
    }

    homePageContent.title.textContent = 'Piazza Nuova';

    Object.keys(homePageContent).forEach(key => {
      homePageWrapper.appendChild(homePageContent[key]);
    });

    return homePageWrapper;
  }

  return {init};
})();