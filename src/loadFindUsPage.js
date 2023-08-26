export default function loadFindUsPage(mainWrapper = document.querySelector('main')) {
  if (mainWrapper.id === 'find-us-page') return 0;

  mainWrapper.innerHTML = '';
  mainWrapper.id = 'find-us-page';

  let findUsPageContent = {
    title: document.createElement('h1'),
  }

  findUsPageContent.title.textContent = 'This is Find Us';
  
  Object.keys(findUsPageContent).forEach(key => {
    mainWrapper.appendChild(findUsPageContent[key]);
  });

  return {mainWrapper};
}