import {iosVhFix} from './utils/ios-vh-fix';
import {scrollToTop, showButton} from './modules/top-btn';
import {switchTheme} from './modules/theme-switcher';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  showButton();
  switchTheme();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    scrollToTop();
  });
});

// ---------------------------------
