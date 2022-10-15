import { isWebp } from './modules/testWebp.js';
import { translate } from './modules/translate.js'
import { activeNavLinks } from './modules/activeNavLinks.js'
import { sendMail } from './modules/sendMail.js'
import { burgerMenu } from './modules/burgerMenu.js'


// check webp
isWebp();

// make active nav links function
window.addEventListener('DOMContentLoaded', () => {
  activeNavLinks('.main-navbar__link');
  activeNavLinks('.burger-menu__link');
})

/*************** BURGER MENU **************************/
burgerMenu()

// translate
translate()
// ***************

// Send mail functionality
sendMail()

