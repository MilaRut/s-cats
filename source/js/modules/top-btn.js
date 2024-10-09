const toTopBtn = document.querySelector('.to-top-btn');

function scrollToTop() {
  toTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    }
    );
  });
}

function showButton() {
  if (!toTopBtn) {
    return;
  }

  window.addEventListener('scroll', function () {
    const coeff = window.scrollY / 1000;
    if (window.scrollY <= 1000) {
      toTopBtn.style.opacity = coeff;
    } else {
      toTopBtn.style.opacity = 1;
    }
  });
}

export {scrollToTop, showButton};
