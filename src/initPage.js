export default function initPage() {
  let contentContainer = document.createElement('div');
  contentContainer.classList.add('content-container');

  let pageContents = {
    header: document.createElement('header'),
    main: document.createElement('main'),
    footer: document.createElement('footer'),
  };

  pageContents.header.textContent = 'Project: Restaurant Page';
  pageContents.main.textContent = 'Some dummy text to fill space';
  pageContents.footer.textContent = 'This is a footer';

  Object.keys(pageContents).forEach(key => {
    contentContainer.appendChild(pageContents[key]);
  });

  return document.body.appendChild(contentContainer);
}