export const burgerMenu = function () {
   const openMobileMenuBtn = document.querySelector('.burgers-btn');
   const headerMenu = document.querySelector('.burger-menu');

   openMobileMenuBtn.addEventListener('click', () => {
      if (openMobileMenuBtn.classList.contains('open')) {
         openMobileMenuBtn.classList.remove('open');
         headerMenu.classList.remove('active');
      } else {
         headerMenu.classList.add('active');
         openMobileMenuBtn.classList.add('open');
      }
   });
}