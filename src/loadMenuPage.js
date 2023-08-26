export default function loadMenuPage(mainWrapper = document.querySelector('main')) {
  if (mainWrapper.id === 'menu-page') return 0;

  mainWrapper.innerHTML = '';
  mainWrapper.id = 'menu-page';

  let menuPageContent = {
    title: document.createElement('h1'),
  }

  menuPageContent.title.textContent = 'This is Menu page';
  
  Object.keys(menuPageContent).forEach(key => {
    mainWrapper.appendChild(menuPageContent[key]);
  });

  return {mainWrapper};
}