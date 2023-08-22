import './style.css';
import Icon from './icon.png';

function content() {
  const content = document.getElementById('content');

  content.innerHTML = 'This is some text added in .js';
  content.classList.add('hello');

  const credit = document.createElement('div');
  credit.innerHTML = '<a href="https://www.flaticon.com/free-icons/emoji" title="emoji icons">Emoji icons created by ARIF MIFTAHUL ANWAR - Flaticon</a>'
  
  content.appendChild(credit);

  const myIcon = new Image();
  myIcon.src = Icon;

  content.appendChild(myIcon);

  return content;
}

content();