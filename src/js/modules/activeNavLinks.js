export const activeNavLinks = function (linkClass) {
   const mainNavLinks = document.querySelectorAll(linkClass);
   const pageHref = window.location.href;
   const activeClass = linkClass.slice(1) + '_active';

   mainNavLinks.forEach((item) => {
      item.classList.remove(activeClass);
   });
   mainNavLinks.forEach((item) => {
      if (pageHref.includes(item.href)) {
         item.classList.add(activeClass);
      }
   });
   if (!pageHref.includes('html')) {
      mainNavLinks[0].classList.add(activeClass);
   }
};