'use ctrict';

// ==================================================================
// burger============================================================
let burger = document.querySelector(".burger-menu");
let menuBody = document.querySelector(".menu__body");
burger.addEventListener('click', function (event){
	burger.classList.toggle("menu-open");
	menuBody.classList.toggle("menu-open");
});
// burger============================================================
// ==================================================================

// ==================================================================
// отступ от фиксированного header-a
let header = document.querySelector(".header");
let headerHeight = header.offsetHeight;

// Установка отступа через style
// let page = document.querySelector(".page");
// page.style.marginTop = `${headerHeight}px`;

// Установка CSS-переменной
document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);
// ==================================================================














// ==================================================================
// header-scroll-top=================================================
//   window.addEventListener('scroll', function () {
//         const header = document.querySelector('.header');
//         const headerRect = header.getBoundingClientRect();
//         // console.log(`Scroll position: ${window.scrollY}px`);

//         if (headerRect.top === 0) {
//             header.classList.add('scrolled-to-top');
//         } else {
//             header.classList.remove('scrolled-to-top');
//         }
//     });
// header-scroll-top=================================================
// ==================================================================



// ==================================================================
// slick-slider============================================================

// $(document).ready(function(){
//     $('.slider').slick({
// 		// setting-name: setting-value
// 		arrows: true,  
// 		dots: true,
// 		slidesToShow: 3,  
// 		slidesToScroll: 3,  
// 		easing: 'ease',
// 		infinite: false,
// 		prevArrow: $('.arrow-left-2'),
// 		nextArrow: $('.arrow-right-2'),
// 		responsive: [
// 			{
// 			breakpoint: 1200,
// 			settings: {
// 				slidesToShow: 2,
// 				slidesToScroll: 2,
// 				// infinite: true,
// 				// dots: true
// 			}
// 			},
// 			{
// 			breakpoint: 768,
// 			settings: {
// 				slidesToShow: 1,
// 				slidesToScroll: 1
// 			}
// 			},
// 			{
// 			breakpoint: 480,
// 			settings: {
// 				slidesToShow: 1,
// 				slidesToScroll: 1
// 			}
// 			}

// 		]

//       });
//     });



// slider============================================================
// ==================================================================










// ==================================================================
// anchors===========================================================
// ----------------
// Плавная прокрутка

// const anchors = document.querySelectorAll('a[href*="#"]');
// const headerHeight = document.querySelector('.header').offsetHeight;
// console.log(anchors);
// for (let anchor of anchors) {
// 	anchor.addEventListener("click", function (event) {
// 		event.preventDefault();
// 		const blockID = anchor.getAttribute('href');
// 		const targetBlock = document.querySelector(blockID);

// 		if (targetBlock) {
// 			const offsetTop = targetBlock.offsetTop - headerHeight;

// 			window.scrollTo({
// 				top: offsetTop,
// 				behavior: "smooth"
// 			});
// 		}
// 	});
// }

// -----------------------
//  Этот код обрабатывает событие прокрутки страницы и устанавливает активный класс
// для ссылки в навигации(.header nav a), соответствующей текущему разделу на странице.

// window.addEventListener('scroll', function () {
// 	let sections = document.querySelectorAll('section[id]');
// 	let scrollPosition = window.scrollY;

// 	sections.forEach(function (section) {
// 		let id = section.getAttribute('id');
// 		let sectionTop = section.offsetTop - headerHeight - 1;

// 		if (sectionTop < scrollPosition) {
// 			let navLink = document.querySelector('.header nav a[href="#' + id + '"]');
// 			if (navLink) {
// 				// Remove 'active' class from all links in .header
// 				document.querySelectorAll('.header a').forEach(function (link) {
// 					link.classList.remove('active');
// 				});

// 				// Add 'active' class to the current link
// 				navLink.classList.add('active');
// 			}
// 		}
// 	});
// });
// anchors===========================================================
// ==================================================================


// ==================================================================
// slider-swiper=====================================================

// const reviewsSlider = new Swiper('.reviews__slider', {
// 	speed: 400,

	// navigation: {
	// 	nextEl: '.reviews__button-next',
	// 	prevEl: '.reviews__button-prev',
	// },

// 	navigation: {
// 		nextEl: '.arrow-reviews.arrow-reviews__button-next',
// 		prevEl: '.arrow-reviews.arrow-reviews__button-prev',
// 	},

// 	pagination: {
// 		el: '.reviews-pagination',
// 		type: 'bullets',
// 		clickable: true,
// 	},
// 	// loop: true,
// 	autoHeight: true,
// });

// slider-swiper=====================================================
// ==================================================================



// ==================================================================
// SPOLLERS==========================================================

/*
Для родителя слойлеров пишем атрибут data-spollers
Для заголовков слойлеров пишем атрибут data-spoller
Если нужно включать\выключать работу спойлеров на разных размерах экранов
пишем параметры ширины и типа брейкпоинта.

Например: 
data-spollers="992,max" - спойлеры будут работать только на экранах меньше или равно 992px
data-spollers="768,min" - спойлеры будут работать только на экранах больше или равно 768px

data-spollers-speed - скорость открытия

Если нужно что бы в блоке открывался болько один слойлер добавляем атрибут data-one-spoller

*/

// let _slideUp = (target, duration = 500, showmore = 0) => {
// 	if (!target.classList.contains("_slide")) {
// 		target.classList.add("_slide");
// 		target.style.transitionProperty = "height, margin, padding";
// 		target.style.transitionDuration = duration + "ms";
// 		target.style.height = `${target.offsetHeight}px`;
// 		target.offsetHeight;
// 		target.style.overflow = "hidden";
// 		target.style.height = showmore ? `${showmore}px` : `0px`;
// 		target.style.paddingTop = 0;
// 		target.style.paddingBottom = 0;
// 		target.style.marginTop = 0;
// 		target.style.marginBottom = 0;
// 		window.setTimeout(() => {
// 			target.hidden = !showmore ? true : false;
// 			!showmore ? target.style.removeProperty("height") : null;
// 			target.style.removeProperty("padding-top");
// 			target.style.removeProperty("padding-bottom");
// 			target.style.removeProperty("margin-top");
// 			target.style.removeProperty("margin-bottom");
// 			!showmore ? target.style.removeProperty("overflow") : null;
// 			target.style.removeProperty("transition-duration");
// 			target.style.removeProperty("transition-property");
// 			target.classList.remove("_slide");
// 			// Создаем событие
// 			document.dispatchEvent(
// 				new CustomEvent("slideUpDone", {
// 					detail: {
// 						target: target
// 					}
// 				})
// 			);
// 		}, duration);
// 	}
// };
// let _slideDown = (target, duration = 500, showmore = 0) => {
// 	if (!target.classList.contains("_slide")) {
// 		target.classList.add("_slide");
// 		target.hidden = target.hidden ? false : null;
// 		showmore ? target.style.removeProperty("height") : null;
// 		let height = target.offsetHeight;
// 		target.style.overflow = "hidden";
// 		target.style.height = showmore ? `${showmore}px` : `0px`;
// 		target.style.paddingTop = 0;
// 		target.style.paddingBottom = 0;
// 		target.style.marginTop = 0;
// 		target.style.marginBottom = 0;
// 		target.offsetHeight;
// 		target.style.transitionProperty = "height, margin, padding";
// 		target.style.transitionDuration = duration + "ms";
// 		target.style.height = height + "px";
// 		target.style.removeProperty("padding-top");
// 		target.style.removeProperty("padding-bottom");
// 		target.style.removeProperty("margin-top");
// 		target.style.removeProperty("margin-bottom");
// 		window.setTimeout(() => {
// 			target.style.removeProperty("height");
// 			target.style.removeProperty("overflow");
// 			target.style.removeProperty("transition-duration");
// 			target.style.removeProperty("transition-property");
// 			target.classList.remove("_slide");
// 			// Создаем событие
// 			document.dispatchEvent(
// 				new CustomEvent("slideDownDone", {
// 					detail: {
// 						target: target
// 					}
// 				})
// 			);
// 		}, duration);
// 	}
// };
// let _slideToggle = (target, duration = 500) => {
// 	if (target.hidden) {
// 		return _slideDown(target, duration);
// 	} else {
// 		return _slideUp(target, duration);
// 	}
// };
// function dataMediaQueries(array, dataSetValue) {
// 	// Получение объектов с медиа запросами
// 	const media = Array.from(array).filter(function (item, index, self) {
// 		if (item.dataset[dataSetValue]) {
// 			return item.dataset[dataSetValue].split(",")[0];
// 		}
// 	});
// 	// Инициализация объектов с медиа запросами
// 	if (media.length) {
// 		const breakpointsArray = [];
// 		media.forEach((item) => {
// 			const params = item.dataset[dataSetValue];
// 			const breakpoint = {};
// 			const paramsArray = params.split(",");
// 			breakpoint.value = paramsArray[0];
// 			breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
// 			breakpoint.item = item;
// 			if (item.hasAttribute("data-em")) {
// 				breakpoint.dataEm = true;
// 			}
// 			breakpointsArray.push(breakpoint);
// 		});
// 		// Получаем уникальные брейкпоинты
// 		let mdQueries = breakpointsArray.map(function (item) {
// 			if (item.dataEm) {
// 				item.value = (item.value / 16).toString();
// 				return (
// 					"(" +
// 					item.type +
// 					"-width: " +
// 					item.value +
// 					"em)," +
// 					item.value +
// 					"," +
// 					item.type
// 				);
// 			} else {
// 				return (
// 					"(" +
// 					item.type +
// 					"-width: " +
// 					item.value +
// 					"px)," +
// 					item.value +
// 					"," +
// 					item.type
// 				);
// 			}
// 			// item.value = (item.value / 16).toString()
// 			// return '(' + item.type + "-width: " + item.value + "em)," + item.value + ',' + item.type;
// 		});
// 		mdQueries = uniqArray(mdQueries);
// 		const mdQueriesArray = [];

// 		if (mdQueries.length) {
// 			// Работаем с каждым брейкпоинтом
// 			mdQueries.forEach((breakpoint) => {
// 				const paramsArray = breakpoint.split(",");
// 				const mediaBreakpoint = paramsArray[1];
// 				const mediaType = paramsArray[2];
// 				const matchMedia = window.matchMedia(paramsArray[0]);
// 				// Объекты с нужными условиями
// 				const itemsArray = breakpointsArray.filter(function (item) {
// 					if (item.value === mediaBreakpoint && item.type === mediaType) {
// 						return true;
// 					}
// 				});
// 				mdQueriesArray.push({
// 					itemsArray,
// 					matchMedia
// 				});
// 			});
// 			return mdQueriesArray;
// 		}
// 	}
// }
// function spollers() {
// 	const spollersArray = document.querySelectorAll("[data-spollers]");
// 	if (spollersArray.length > 0) {
// 		// Получение обычных слойлеров
// 		const spollersRegular = Array.from(spollersArray).filter(function (
// 			item,
// 			index,
// 			self
// 		) {
// 			return !item.dataset.spollers.split(",")[0];
// 		});
// 		// Инициализация обычных слойлеров
// 		if (spollersRegular.length) {
// 			initSpollers(spollersRegular);
// 		}
// 		let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
// 		if (mdQueriesArray && mdQueriesArray.length) {
// 			mdQueriesArray.forEach((mdQueriesItem) => {
// 				// Событие
// 				// mdQueriesItem.matchMedia.addEventListener("change", function () {
// 				// 	initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
// 				// });
// 				mdQueriesItem.matchMedia.onchange = () => {
// 					initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
// 				};
// 				initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
// 			});
// 		}
// 		// Инициализация
// 		function initSpollers(spollersArray, matchMedia = false) {
// 			spollersArray.forEach((spollersBlock) => {
// 				spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
// 				if (matchMedia.matches || !matchMedia) {
// 					spollersBlock.classList.add("_spoller-init");
// 					initSpollerBody(spollersBlock);
// 					spollersBlock.addEventListener("click", setSpollerAction);
// 				} else {
// 					spollersBlock.classList.remove("_spoller-init");
// 					initSpollerBody(spollersBlock, false);
// 					spollersBlock.removeEventListener("click", setSpollerAction);
// 				}
// 			});
// 		}
// 		// Работа с контентом
// 		function initSpollerBody(spollersBlock, hideSpollerBody = true) {
// 			let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
// 			if (spollerTitles.length) {
// 				spollerTitles = Array.from(spollerTitles).filter(
// 					(item) => item.closest("[data-spollers]") === spollersBlock
// 				);
// 				spollerTitles.forEach((spollerTitle) => {
// 					if (hideSpollerBody) {
// 						spollerTitle.removeAttribute("tabindex");
// 						if (!spollerTitle.classList.contains("_spoller-active")) {
// 							spollerTitle.nextElementSibling.hidden = true;
// 						}
// 					} else {
// 						spollerTitle.setAttribute("tabindex", "-1");
// 						spollerTitle.nextElementSibling.hidden = false;
// 					}
// 				});
// 			}
// 		}
// 		function setSpollerAction(e) {
// 			const el = e.target;
// 			if (el.closest("[data-spoller]")) {
// 				const spollerTitle = el.closest("[data-spoller]");
// 				const spollersBlock = spollerTitle.closest("[data-spollers]");
// 				const spollerItem = spollerTitle.closest(".spollers__item"); // Получаем родительский элемент с классом spollers__item
// 				const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
// 				const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;

// 				if (!spollersBlock.querySelectorAll("._slide").length) {
// 					if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) {
// 						hideSpollersBody(spollersBlock);
// 					}

// 					spollerTitle.classList.toggle("_spoller-active");
// 					_slideToggle(spollerTitle.nextElementSibling, spollerSpeed);

// 					// Добавляем/удаляем класс _spoller-item-active у родительского элемента spollers__item
// 					if (spollerItem) {
// 						spollerItem.classList.toggle("_spoller-item-active");
// 					}
// 				}
// 				e.preventDefault();
// 			}
// 		}
// 		function hideSpollersBody(spollersBlock) {
// 			const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
// 			const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
// 			if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
// 				// Удаляем класс _spoller-item-active у элемента с классом spollers__item
// 				const spollerItem = spollerActiveTitle.closest(".spollers__item");
// 				if (spollerItem) {
// 					spollerItem.classList.remove("_spoller-item-active");
// 				}
// 				spollerActiveTitle.classList.remove("_spoller-active");
// 				_slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
// 			}
// 		}
// 		// Закрытие при клике вне спойлера
// 		const spollersClose = document.querySelectorAll("[data-spoller-close]");
// 		if (spollersClose.length) {
// 			document.addEventListener("click", function (e) {
// 				const el = e.target;
// 				if (!el.closest("[data-spollers]")) {
// 					spollersClose.forEach((spollerClose) => {
// 						const spollersBlock = spollerClose.closest("[data-spollers]");
// 						const spollerSpeed = spollersBlock.dataset.spollersSpeed
// 							? parseInt(spollersBlock.dataset.spollersSpeed)
// 							: 500;
// 						spollerClose.classList.remove("_spoller-active");
// 						_slideUp(spollerClose.nextElementSibling, spollerSpeed);
// 					});
// 				}
// 			});
// 		}
// 	}
// }

// spollers();

// автор Фрилансер по Жизни


// SPOLLERS==========================================================
// ==================================================================


// ==================================================================
// Валидация INPUT-a=================================================


// const subscribeInput = document.querySelector(".input");

// subscribeInput.addEventListener("input", oninput);

// const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

// function onInput() {
// 	if (isEmailValid(input.value)) {
// 		input.style.borderColor = 'green';
// 	} else {
// 		input.style.borderColor = 'red';
// 	}
// }

// function isEmailValid(value) {
// 	return EMAIL_REGEXP.test(value);
// }


// const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
// const input = document.querySelector('input');

// function isEmailValid(value) {
// 	return EMAIL_REGEXP.test(value);
// }

// function onInput() {
// 	if (isEmailValid(input.value)) {
// 		input.style.borderColor = 'green';
// 	} else {
// 		input.style.borderColor = 'red';
// 	}
// }

// input.addEventListener('input', onInput);











