import pizzaPicture from './pizza.jpg';

export default function loadHomePage(mainWrapper = document.querySelector('main')) {
  mainWrapper.id = 'home-page';

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
    mainWrapper.appendChild(homePageContent[key]);
  });

  return {mainWrapper};
}