import './style.css';
import Icon from './icon.png';
import printMe from './print';

function content() {
  const contentContainer = document.createElement('div');
  const btn = document.createElement('button');

  contentContainer.innerHTML = 'This is some text added in .js';
  contentContainer.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  contentContainer.appendChild(btn);

  const credit = document.createElement('div');
  credit.innerHTML = '<a href="https://www.flaticon.com/free-icons/emoji" title="emoji icons">Emoji icons created by ARIF MIFTAHUL ANWAR - Flaticon</a>'
  
  contentContainer.appendChild(credit);

  const myIcon = new Image();
  myIcon.src = Icon;

  contentContainer.appendChild(myIcon);

  return contentContainer;
}

document.body.appendChild(content());