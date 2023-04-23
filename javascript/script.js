'use strict';

// A tiny script to disable page links
document.body.onclick = (event) => {
  if (event.target.closest('.sns-link') || event.target.classList.contains('btn')) {
    event.preventDefault();
    console.log('Link event default aborted from script');
  }
}