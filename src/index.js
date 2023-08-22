import './style.css';

function content() {
  const content = document.getElementById('content');

  content.innerHTML = 'This is some text added in .js';
  content.classList.add('hello');

  return content;
}

content();