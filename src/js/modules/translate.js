export const translate = function () {
   const langDropBtn = document.querySelector('.top-navbar__lang-dropbtn'),
      langOptions = document.querySelectorAll('.top-navbar__lang-dropcontent'),
      langDropdown = document.querySelector('.top-navbar__lang-dropdown'),
      languages = {
         'home': {
            am: 'գլխավոր',
            ru: 'главное',
            en: 'home',
         },
         'about-us': {
            am: 'մեր մասին',
            ru: 'О НАС',
            en: 'ABOUT US',
         },
         'road-cargo-transportation': {
            am: 'ցամաքային բեռնափոխադրումներ',
            ru: 'СУХОПУТНЫЕ ГРУЗАПЕРЕВОЗКИ',
            en: 'Road Cargo Transportation',
         },
         'air-cargo-transportation': {
            am: 'օդային բեռնափոխադրումներ',
            ru: 'ВОЗДУШНЫЕ 	ГРУЗАПЕРЕВОЗКИ',
            en: 'Air Cargo Transportation',
         },
         'sea-freight-transportation': {
            am: 'ծովային բեռնափոխադրումներ',
            ru: 'МОРСКИЕ ГРУЗАПЕРЕВОЗКИ',
            en: 'Sea freight Transportation',
         },
         'costums-clearance-service': {
            am: 'մաքսային ձեվակերպումներ',
            ru: 'ТАМОЖЕННОЕ ОФОРМЛЕНИЕ ',
            en: 'Customs clearance service',
         },
         'contact': {
            am: 'կապ',
            ru: 'КОНТАКТЫ',
            en: 'CONTACT',
         },
         'main-big-title': {
            am: '«Սիրիուս Լոջիստիկս» ՍՊԸ - Ձեր վստահելի գործընկերը լոգիստիկայի աշխարհում',
            ru: 'ООО "Сириус Лоджистикс" - Ваш надежный партнер в мире логистики',
            en: '"Sirius Logistics" LLC - Your reliable partner in the world of logistics',
         },
         'our-services': {
            am: 'Մեր ծառայությունները',
            ru: 'НАШИ УСЛУГИ',
            en: 'Our services',
         },
         'our-services__subtitle': {
            am: 'Սիրիուս Լոջիստիկս-ն առաջարկում է լոգիստիկ ծառայությունների լայն ընտրանի․',
            ru: '"Сириус Лоджистикс" предлагает широкий спектр логистических услуг:',
            en: 'Sirius Logistics offers a wide range of logistics services:',
         },
         'backup-services': {
            am: 'պահեստային ծառայություններ',
            ru: 'СКЛАДСКИЕ УСЛУГИ',
            en: 'Warehousing services',
         }, 'groupage-cargo-transportation': {
            am: 'հավաքական բեռների փոխադրում',
            ru: 'ПЕРЕВОЗКИ СБОРНЫХ ГРУЗОВ',
            en: 'Groupage cargo transportation',
         }, 'company-name': {
            am: 'Սիրիուս Լոջիստիկս ՍՊԸ',
            ru: 'ООО «Сириус Логджистикс» ',
            en: 'Sirius Logistics LLC',
         },'address': {
            am: 'ՀՀ, ք․ Երևան, 0082, Բարձրաբերդի 27/1',
            ru: 'РА,Ереван, 0082, ул. Бардзраберд 27/1',
            en: 'RA, Yerevan, 0082, Bardzraberd str. 27/1',
         },'phone': {
            am: 'Հեռ։ ',
            ru: 'Тел. ',
            en: 'Tel. ',
         },'email': {
            am: 'Էլ․ փոստ։ ',
            ru: 'Эл. Почта: ',
            en: 'Email: ',
         },'work-time': {
            am: 'Աշխ․ ժամեր։ Երկ․-Ուրբ․։ 09։00-18։00',
            ru: 'Раб.часы: Пн.-Пт. 09:00-18:00',
            en: 'Working hours: Mon.-Fri. 09:00-18:00',
         },
         'name': {
            am: 'Անուն:',
            ru: 'Имя:',
            en: 'Name:',
         },
         'message': {
            am: 'Հաղորդագրություն:',
            ru: 'Сообщение:',
            en: 'Message:',
         },
         'submit-btn': {
            am: 'Ուղարկել',
            ru: 'Отправить',
            en: 'Send',
         },
         'about-info': {
            am: '«Սիրիուս Լոջիստիկս» ՍՊԸ-ն հիմնադրվել է 2022թ․-ին։ Ընկերության նպատակը իր հաճախորդներին որակյալ լոգիստիկ ծառայությունների մատուցումն է՝ անկախ դրանց տեսակից։',
            ru: 'ООО «Сириус Лоджистикс» основано в 2022 году. Цель компании – оказать своим клиентам качественные логистические услугы, независимо от их типа.',
            en: `"Sirius Logistics" LLC was founded in 2022. The company's goal is to provide its customers quality logistic services, regardless of their type.`,
         }, 'road-cargo-info1': {
            am: `Ցամաքային բեռնափոխադրումը իր մատչելիության, օպերատիվության, հուսալիության, ինչպես նաև ամբողջ աշխարհում ավտոճանապարհների
                  ճյուղավորված ցանցի շնորհիվ բեռնափոխադրման ամենաճանաչված տեսակներից մեկն է։`,
            ru: `Сухопутные грузаперевозки являются одним из самых популярных видов грузоперевозок благодаря своей доступности, оперативности, надежности, а также разветвленной сети автомобильных дорог по всему миру.`,
            en: `Road Cargo transportation is one of the most popular modes of transportation due to its accessibility, efficiency, reliability, and extensive network of highways around the world.
`,
         },
         'road-cargo-info2': {
            am: `Ցամաքային բեռնափոխադրումների աշխարհագրությունը․`,
            ru: `География сухопутных грузаперевозок.`,
            en: `Geography of road cargo transportation.`,
         },'road-cargo-info3': {
            am: `• ավտոմոբիլային բեռնափոխադրումներ դեպի ՌԴ, ԱՊՀ երկրներ և հակառակ ուղղությամբ`,
            ru: `• автомобильные грузоперевозки в РФ, страны СНГ и в обратном направлении`,
            en: `• road transportation to the Russian Federation, CIS countries and in the opposite direction
`,
         },'road-cargo-info4': {
            am: `• ավտոմոբիլային բեռնափոխադրումներ դեպի Եվրոպա և հակառակ ուղղությամբ`,
            ru: `• автомобильные грузоперевозки в и из Европы`,
            en: `• road transportation to and from Europe
`,
         },'road-cargo-info5': {
            am: `• ներքին բեռնափոխադրումներ Հայաստանի տարածքում`,
            ru: `• внутренние грузоперевозки по территории Армении`,
            en: `• internal cargo transportation in the territory of Armenia
`,
         }, 'road-cargo-info6': {
            am: `Մեր կողմից առաջարկվող ցամաքային բեռնափոխադրման ծառայությունները ներառում են`,
            ru: `Предлагаемые нами услуги по сухопутным перевозкам включают в себя:`,
            en: `Our road cargo services include:`,
         },'road-cargo-info7': {
            am: `• Ստանդարտ բեռների փոխադրում`,
            ru: `• Стандартные грузовые перевозки`,
            en: `• Standard freight`,
         }, 'road-cargo-info8': {
            am: `• Ջերմային ռեժիմ պահանջող բեռներ`,
            ru: `• Грузовые перевозки, требующие тепловой режим`,
            en: `• Loads requiring thermal regime`,
         },'road-cargo-info9': {
            am: `• Ջերմային ռեժիմ պահանջող բեռներ`,
            ru: `• Перевозка опасных грузов (ADR)`,
            en: `• Transportation of dangerous goods (ADR)`,
         },
         'air-cargo-info1': {
            am: 'Օդային բեռնափոխադրումներն իդեալական լուծում են այն պարագայում, երբ առաջնային խնդիրն արագությունն է:Օդային բեռնափոխադրման առավելություններից են նաև անվտանգության բարձր մակարդակը, մեկնման և ժամանման ժամկետների հստակությունը:',
            ru: 'Авиаперевозки — идеальное решение, когда скорость важнее всего. Среди преимуществ авиаперевозок также высокий уровень безопасности, четкость дат отправления и прибытия.',
            en: 'Air transportation is the ideal solution when speed is the primary concern. Among the advantages of air cargo transportation are also the high level of security, clarity of departure and arrival dates.',
         }, 'air-cargo-info2': {
            am: '«Սիրիուս Լոջիստիկս»-ն իրականացնում է օդային բեռնափոխադրումներ բոլոր ուղղություններով «դռնից դուռ» կամ «օդանավակայանից օդանավակայան» պայմաններով, որոնք ներառում են այնպիսի բեռների փոխադրում, ինչպիսիք են.',
            ru: '«Сириус Лоджистикс» осуществляет авиаперевозки грузов по всем направлениям на условиях «от двери до двери» или «аэропорт-аэропорт», которые включают перевозку таких грузов, как:',
            en: 'Sirius Logistics carries out air cargo transportation in all directions on "door-to-door" or "airport-to-airport" terms, which include the transportation of such cargo as:',
         }, 'air-cargo-info3': {
            am: '• Ստանդարտ բեռներ',
            ru: '• Стандартные грузы ',
            en: '• Standard cargo',
         }, 'air-cargo-info4': {
            am: '• Վտանգավոր բեռներ',
            ru: '• Опасные грузы',
            en: '• Dangerous goods(DGR)',
         }, 'air-cargo-info5': {
            am: '• Արտածավալային բեռներ',
            ru: '• Объемные грузы',
            en: '• Volumetric cargo',
         },'air-cargo-info6': {
            am: '• Թանկարժեք բեռներ',
            ru: '• Дорогие грузы',
            en: '• Expensive cargo',
         },'sea-freight-info1': {
            am: `Ծովային բեռնափոխադրումը ամբողջ աշխարհում ապրանքների տեղափոխման ամենահին և շահավետ տարբերակներից է: Տարբեր հաշվարկներով՝ աշխարհում փոխադրվող ապրանքների ավելի քան 90%-ը տեղափոխվում են ծովային բեռնափոխադրման միջոցով։`,
            ru: `Морские грузаперевозки — один из старейших и наиболее выгодных вариантов перемещения грузов по всему миру. По разным оценкам, более 90% грузов, перевозимых в мире, перевозится морским транспортом.`,
            en: `Sea shipping  is one of the oldest and most profitable options for moving goods around the world. According to various estimates, more than 90% of goods transported in the world are transported by sea.`,
         }, 'sea-freight-info2': {
            am: `Մենք առաջարկում ենք ծովային բեռնափոփադրման ծառայություններ հետևյալ տարբերակներով.`,
            ru: `Мы предлагаем морские перевозки по следующими вариантами:`,
            en: `We offer sea freight services with the following options:`,
         },'sea-freight-info3': {
            am: `• FCL(Կոնտեյների ամբողջական բեռնում)-երբ կոնտեյները բեռնված է մեկ ուղարկողի կողմից և շարժվում է մեկ ստացողի հասցեով՝ անկախ բեռի չափից: ուղղությամբ`,
            ru: `• FCL(Full Container Load) – когда контейнер загружается одним грузоотправителем и движется по одному адресу грузополучателя, независимо от размера груза.`,
            en: `• FCL (Full Container Load) - when a container is loaded by a single shipper and moves to a single consignee address, regardless of cargo size.`,
         }, 'sea-freight-info4': {
            am: `• LCL(Կոնտեյների մասնակի բեռնում) կամ հավաքական բեռ-երբ ձեր բեռի հետ միասին կոնտեյներում փոխադրվում են նաև այլ ուղարկողների բեռներ:`,
            ru: `• LCL(Less than Container Load) или сборный груз - когда вместе с вашим грузом в контейнере перевозится грузы от других грузоотправителей.`,
            en: `• LCL (Less than Container Load) or collective cargo - when cargo from other shippers is transported in the container along with your cargo.`,
         }, 'costums-clearance-info1': {
            am: `«Սիրիուս Լոջիստիկս»-ը մատուցում է մաքսային ձևակերպումների(բրոկերային) ծառայություններ բեռների ներմուծման, արտահանման,
                  ինչպես նաև տրանզիտ փոխադրման ժամանակ:`,
            ru: `«Сириус Лоджистикс» оказывает услуги по таможенному оформлению (брокерские) при импорте, экспорте и транзитных перевозках грузов.`,
            en: `Sirius Logistics provides customs clearance (brokerage) services during cargo import, export, and transit transportation.`,
         }, 'costums-clearance-info2': {
            am: `Մատուցվող ծառայությունները ներառում են.`,
            ru: `Предоставляемые услуги включают в себя:`,
            en: `Provided services include:`,
         }, 'costums-clearance-info3': {
            am: `• մաքսային փաստաթղթերի կազմում`,
            ru: `• подготовка таможенных документов`,
            en: `• preparation of customs documents`,
         }, 'costums-clearance-info4': {
            am: `• հավաստագրերի, լիցենզիաների, թույլտվությունների և այլ փաստաթղթերի ձևակերպում`,
            ru: `• оформление сертификатов, лицензий, разрешений и других документов`,
            en: `• drafting of certificates, licenses, permits and other documents`,
         }, 'costums-clearance-info5': {
            am: `• ներմուծման, արտահանման և տրանզիտ փոխադրման հայտարարագրերի ձևակերպում և ներկայացում մաքսային ծառայություն,`,
            ru: `• оформление и подача импортных, экспортных и транзитных транспортных деклараций в таможенную службу`,
            en: `• formulation and submission of import, export and transit transport declarations to the customs service,`,
         }, 'costums-clearance-info6': {
            am: `• մաքսային պահեստից փաստաթղթերի ստացում`,
            ru: `• получение документов с таможенного склада`,
            en: `• receipt of documents from the customs warehouse`,
         }, 'costums-clearance-info7': {
            am: `• ապրանքների ֆիզիկական և մաքսային զննման ապահովում`,
            ru: `• обеспечение физического и таможенного досмотра товаров`,
            en: `• provision of physical and customs inspection of goods`,
         }, 'backup-services-info1': {
            am: `Մենք առաջարկում ենք նաև պահեստային ծառայություններ Հայաստանում և Հայաստանից դուրս: Մեր գործընկերների պահեստները թույլ են
               տալիս կատարել այնպիսի գործողություններ, ինչպիսիք են.`,
            ru: `Мы также предлагаем складские услуги в Армении и за ее пределами. Склады наших партнеров позволяют выполнять такие действия, как:`,
            en: `We also offer warehousing services in Armenia and outside of Armenia. Warehouses of our partners allow you to perform such actions as:`,
         }, 'backup-services-info2': {
            am: `• բարձման և բեռնաթափման աշխատանքներ`,
            ru: `• погрузочно-разгрузочные работы`,
            en: `• loading and unloading operations`,
         }, 'backup-services-info3': {
            am: `• ապրանքների պատասխանատու պահպանություն`,
            ru: `• ответственное хранение продукции`,
            en: `• responsible storage of goods`,
         }, 'backup-services-info4': {
            am: `• բեռների փաթեթավորում և կոմպլեկտավորում`,
            ru: `• упаковка и сборка груза`,
            en: `• packing and assembling of cargo`,
         }, 'groupage-cargo-info1': {
            am: `Հավաքական բեռնափոփադրումները իրենց մատչելիության և հարմարավետության շնորհիվ այսօր աշխարհում շատ պահանջված են: Դրանք
                  թույլ են տալիս կրճատել տրանսպորտային ծախսերը: Բեռների կոնսոլիդացիան սովորաբար տեղի է ունենում հիմնական ճանապարհներին մոտ
                  գտնվող պահեստներում, որտեղ մեկ տրանսպորտային միջոցի մեջ հավաքվում են տարբեր ստացողների բեռներ: Մենք առաջարկում ենք
                  հավաքական բեռների փոխադրումներ.`,
            ru: `Благодаря своей доступности и удобству сборные грузаперевозки сегодня пользуются большим спросом в мире. Они позволяют снизить транспортные расходы. Консолидация грузов обычно происходит на складах вблизи основных дорог, где грузы от разных грузополучателей объединяются в одно транспортное средство. Мы предлагаем сборные грузоперевозки.:`,
            en: `Due to their affordability and convenience, groupage transportation services are in high demand in the world today. They allow to reduce transportation costs. Consolidation of loads usually takes place in warehouses close to main roads, where loads from different consignees are combined into one truck or container. We offer groupage cargo transportation`,
         },'groupage-cargo-info2': {
            am: `• Ռուսաստանից և ԵԱՏՄ երկրներից`,
            ru: `• Из России и стран ЕАЭС`,
            en: `• From Russia and EAEU countries`,
         },'groupage-cargo-info3': {
            am: `• Եվրոպայից`,
            ru: `• Из Европы`,
            en: `• From Europe`,
         },'groupage-cargo-info4': {
            am: `• Չինաստանիցy`,
            ru: `• Из Китая`,
            en: `• From China`,
         },'groupage-cargo-info5': {
            am: `Անհրաժեշտության դեպքում առաջարկում ենք ուղեկցող մաքսային փաստաթղթերի ձևակերպում (ЕХ1, Т1 և այլն):`,
            ru: `При необходимости предлагаем оформление сопроводительных таможенных документов (Ex1, Т1 и др.).`,
            en: `If necessary, we offer drafting of accompanying customs documents (Ex1, T1, etc.).`,
         },
         'popup-success': {
            am: `Հաղորդագրությունը հաջողությամբ ուղարկվեց`,
            ru: `Сообщение успешно отправлено`,
            en: `Message successfully sent`,
         }, 'popup-fail': {
            am: `Ուղարկման սխալ`,
            ru: `Ошыбка отправки`,
            en: `Sending error`,
         },
      };

   // CHANGE LANGUAGE FUNCTION

   const getAllItems = function (params) {
      langDropBtn.querySelector('img').src = document.querySelector(`[data-value=${params}]`).querySelector('img').src
      for (let key in languages) {
         if (document.querySelector(`[data-lang=${key}]`)) {
            document.querySelectorAll(`[data-lang=${key}]`).forEach(item => item.innerText = languages[key][params])
         }
      }
   }

   if (!window.location.hash && !sessionStorage.getItem("language")) {
      window.location.hash = 'am';
   } else if (!window.location.hash && sessionStorage.getItem("language")) {
      window.location.hash = sessionStorage.getItem("language");
   }
   getAllItems(window.location.hash.slice(1).slice(0, 2))


   // Language dropdown functions



   // ? language dropdown activeate functionality
   document.querySelector('body').addEventListener('click', (e) => {
      const activeClass = 'top-navbar__lang-dropdown_active';
      if (!langDropdown.classList.contains(activeClass)) {
         if (e.target === langDropBtn || e.target === langDropBtn.querySelector('img')) {
            langDropdown.classList.add(activeClass)
         }
      } else {
         langDropdown.classList.remove(activeClass)
      }
   })
   // ? lang option click event
   langOptions.forEach(item => {
      item.addEventListener("click", (e) => {

         getCurrentLanguage(e)
      })
   })

   const getCurrentLanguage = function (e) {
      const value = e.currentTarget.dataset.value
      sessionStorage.setItem("language", value);
      window.location.hash = value
      getAllItems(value)
   }
}

