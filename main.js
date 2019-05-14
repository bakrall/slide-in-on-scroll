const sliderImages = document.querySelectorAll('.slide-in');

function debounce(func, wait = 20, immediate = true) {
  let timeout;

  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if(!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  }
}

function checkSlide(e) {
  console.log(window.scrollY);
}

window.addEventListener('scroll', debounce(checkSlide));
