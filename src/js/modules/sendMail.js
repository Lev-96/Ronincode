export const sendMail = () => {

   const form = document.querySelector('#send-mail-form');
   const popup = document.querySelector('.popup')
   const popupSuccess = document.querySelector('.popup__success')
   const popupFail = document.querySelector('.popup__fail')
   const popupLoading = document.querySelector('.popup__loading')
   const popupBtn = document.querySelector('.popup__close-btn')
   const popupBackdrop = document.querySelector('.popup__backdrop')
   const popupActiveClass = 'popup__active'
   const popupContentActiveClass = 'popup__content_active'

   // change class function

   const classChange = function (element, activeClass, isRemove) {
      isRemove ? element.classList.remove(activeClass) : element.classList.add(activeClass)
   }

   // hide popup function

   const closePopup = function () {
      if (!popupLoading.classList.contains(popupContentActiveClass)) {
         classChange(popup, popupActiveClass, true)
         classChange(popupLoading, popupContentActiveClass, true)
         classChange(popupFail, popupContentActiveClass, true)
         classChange(popupSuccess, popupContentActiveClass, true)
      }

   }

   // show fetch result at popup

   const showResult = function (element) {
      classChange(popupLoading, popupContentActiveClass, true)
      classChange(element, popupContentActiveClass, false)
   }

   // fetch event

   const fetchToMail = async function (e) {
      e.preventDefault();
      const formData = new FormData(form)
      classChange(popup, popupActiveClass, false)
      classChange(popupLoading, popupContentActiveClass, false)

      try {
         let response = await fetch('./php/sendMail.php', {
            method: 'post',
            body: formData
         });
         if (response.ok) {
            let result = await response.json();
            showResult(popupSuccess)
         } else {
            console.log(response);
            throw new Error(`Error ${response.status}: ${statusText}`)
         }
      } catch (error) {
         console.log(error)
         showResult(popupFail)
      } finally {
         form.reset();
      }
   }

   // popup hide events

   popupBtn.addEventListener('click', () => {
      closePopup()
   })

   popupBackdrop.addEventListener('click', (e) => {
      if (e.currentTarget == e.target) {
         closePopup()
      }
   })

   // Fetch send event

   form.addEventListener('submit', e => {
      fetchToMail(e)
   })
}