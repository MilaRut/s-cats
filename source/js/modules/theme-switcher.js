const switcher = document.querySelector('.theme-switcher');

function switchTheme() {
  switcher.addEventListener('click', () => {
    switcher.classList.toggle('is-active');
  });
}

export {switchTheme};
