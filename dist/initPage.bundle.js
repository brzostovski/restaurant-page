/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/loadHomePage.js":
/*!*****************************!*\
  !*** ./src/loadHomePage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHomePage)
/* harmony export */ });
/* harmony import */ var _pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pizza.jpg */ "./src/pizza.jpg");


function loadHomePage(mainWrapper = document.querySelector('main')) {
  if (mainWrapper.id === 'home-page') return 0;

  mainWrapper.innerHTML = '';
  mainWrapper.id = 'home-page';

  let homePageContent = {
    title: document.createElement('h1'),
    image: document.createElement('img'),
    mainPara: document.createElement('p'),
  }

  homePageContent.title.textContent = 'Piazza Nuova';
  homePageContent.image.src = _pizza_jpg__WEBPACK_IMPORTED_MODULE_0__;
  homePageContent.mainPara.textContent = `Nostrud cillum officia culpa elit ipsum ut amet eiusmod officia aliquip elit. Ex voluptate reprehenderit amet incididunt aliquip cupidatat incididunt quis proident ipsum. Dolor adipisicing id ea qui irure anim. Consectetur ipsum nulla laboris do adipisicing anim. Commodo laborum labore labore duis adipisicing esse qui proident sit. Esse culpa excepteur exercitation culpa nostrud amet ut.

  Proident officia nostrud cillum aute tempor sint. Ex do ut reprehenderit ipsum proident in proident pariatur minim nisi ex mollit officia veniam. Est nulla magna dolor nulla cupidatat enim veniam aliqua id nostrud. Veniam pariatur minim nostrud ut est sit et.

  Consequat amet do reprehenderit deserunt minim velit irure anim magna dolore ipsum minim deserunt ex. Do sint ut ullamco excepteur. Exercitation culpa quis minim ea adipisicing irure dolore nostrud. Tempor occaecat veniam id enim eu duis sint aliquip velit velit aliqua fugiat. Nulla sit aute magna nostrud ea laboris fugiat sit anim consequat aliquip.`;

  Object.keys(homePageContent).forEach(key => {
    mainWrapper.appendChild(homePageContent[key]);
  });

  return {mainWrapper};
}

/***/ }),

/***/ "./src/pizza.jpg":
/*!***********************!*\
  !*** ./src/pizza.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c424983ea6d69223b86d.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/initPage.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initPage)
/* harmony export */ });
/* harmony import */ var _loadHomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadHomePage */ "./src/loadHomePage.js");


function initPage() {
  let contentContainer = document.createElement('div');
  contentContainer.classList.add('content-container');

  let pageContents = {
    header: initHeader,
    homePage: initMain,
    footer: initFooter,
  };

  Object.keys(pageContents).forEach(key => {
    contentContainer.appendChild(pageContents[key]);
  });

  return document.body.appendChild(contentContainer);
}

const initHeader = (() => {
  let headerWrapper = document.createElement('header');

  let headerContent = {
    title: document.createElement('span'),
    menu: createPageMenu(),
  }

  headerContent.title.textContent = 'Project: Restaurant Page';

  Object.keys(headerContent).forEach(key => {
    headerWrapper.appendChild(headerContent[key]);
  });

  function createPageMenu() {
    let pageMenu = document.createElement('div');
    pageMenu.id = 'page-menu';

    let buttons = {
      home: document.createElement('button'),
      menu: document.createElement('button'),
      findUs: document.createElement('button'),
    }

    buttons.home.id = 'home-btn';
    buttons.menu.id = 'menu-btn';
    buttons.findUs.id = 'find-us-btn';

    buttons.home.textContent = 'Home';
    buttons.menu.textContent = 'Menu';
    buttons.findUs.textContent = 'Find Us';

    Object.keys(buttons).forEach(key => {
      pageMenu.appendChild(buttons[key]);
    });

    return pageMenu;
  };

  return headerWrapper;
})();

const initMain = (() => {
  let mainWrapper = document.createElement('main');
  (0,_loadHomePage__WEBPACK_IMPORTED_MODULE_0__["default"])(mainWrapper);

  return mainWrapper;
})();

const initFooter = (() => {
  let footerWrapper = document.createElement('footer');

  let footerContent = {
    title: document.createElement('span'),
  }

  footerContent.title.innerHTML = `<span>
    ©
    <a href="https://github.com/brzostovski" target="_blank">brzostovski</a>
    2023
  </span>`;

  Object.keys(footerContent).forEach(key => {
    footerWrapper.appendChild(footerContent[key]);
  });

  return footerWrapper;
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdFBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF1Qzs7QUFFeEI7QUFDZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsdUNBQVk7QUFDMUM7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUgsVUFBVTtBQUNWOzs7Ozs7Ozs7Ozs7Ozs7O1VDM0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQjBDOztBQUUzQjtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSx5REFBWTs7QUFFZDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkSG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0UGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGl6emFQaWN0dXJlIGZyb20gJy4vcGl6emEuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWVQYWdlKG1haW5XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpKSB7XG4gIGlmIChtYWluV3JhcHBlci5pZCA9PT0gJ2hvbWUtcGFnZScpIHJldHVybiAwO1xuXG4gIG1haW5XcmFwcGVyLmlubmVySFRNTCA9ICcnO1xuICBtYWluV3JhcHBlci5pZCA9ICdob21lLXBhZ2UnO1xuXG4gIGxldCBob21lUGFnZUNvbnRlbnQgPSB7XG4gICAgdGl0bGU6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyksXG4gICAgaW1hZ2U6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpLFxuICAgIG1haW5QYXJhOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksXG4gIH1cblxuICBob21lUGFnZUNvbnRlbnQudGl0bGUudGV4dENvbnRlbnQgPSAnUGlhenphIE51b3ZhJztcbiAgaG9tZVBhZ2VDb250ZW50LmltYWdlLnNyYyA9IHBpenphUGljdHVyZTtcbiAgaG9tZVBhZ2VDb250ZW50Lm1haW5QYXJhLnRleHRDb250ZW50ID0gYE5vc3RydWQgY2lsbHVtIG9mZmljaWEgY3VscGEgZWxpdCBpcHN1bSB1dCBhbWV0IGVpdXNtb2Qgb2ZmaWNpYSBhbGlxdWlwIGVsaXQuIEV4IHZvbHVwdGF0ZSByZXByZWhlbmRlcml0IGFtZXQgaW5jaWRpZHVudCBhbGlxdWlwIGN1cGlkYXRhdCBpbmNpZGlkdW50IHF1aXMgcHJvaWRlbnQgaXBzdW0uIERvbG9yIGFkaXBpc2ljaW5nIGlkIGVhIHF1aSBpcnVyZSBhbmltLiBDb25zZWN0ZXR1ciBpcHN1bSBudWxsYSBsYWJvcmlzIGRvIGFkaXBpc2ljaW5nIGFuaW0uIENvbW1vZG8gbGFib3J1bSBsYWJvcmUgbGFib3JlIGR1aXMgYWRpcGlzaWNpbmcgZXNzZSBxdWkgcHJvaWRlbnQgc2l0LiBFc3NlIGN1bHBhIGV4Y2VwdGV1ciBleGVyY2l0YXRpb24gY3VscGEgbm9zdHJ1ZCBhbWV0IHV0LlxuXG4gIFByb2lkZW50IG9mZmljaWEgbm9zdHJ1ZCBjaWxsdW0gYXV0ZSB0ZW1wb3Igc2ludC4gRXggZG8gdXQgcmVwcmVoZW5kZXJpdCBpcHN1bSBwcm9pZGVudCBpbiBwcm9pZGVudCBwYXJpYXR1ciBtaW5pbSBuaXNpIGV4IG1vbGxpdCBvZmZpY2lhIHZlbmlhbS4gRXN0IG51bGxhIG1hZ25hIGRvbG9yIG51bGxhIGN1cGlkYXRhdCBlbmltIHZlbmlhbSBhbGlxdWEgaWQgbm9zdHJ1ZC4gVmVuaWFtIHBhcmlhdHVyIG1pbmltIG5vc3RydWQgdXQgZXN0IHNpdCBldC5cblxuICBDb25zZXF1YXQgYW1ldCBkbyByZXByZWhlbmRlcml0IGRlc2VydW50IG1pbmltIHZlbGl0IGlydXJlIGFuaW0gbWFnbmEgZG9sb3JlIGlwc3VtIG1pbmltIGRlc2VydW50IGV4LiBEbyBzaW50IHV0IHVsbGFtY28gZXhjZXB0ZXVyLiBFeGVyY2l0YXRpb24gY3VscGEgcXVpcyBtaW5pbSBlYSBhZGlwaXNpY2luZyBpcnVyZSBkb2xvcmUgbm9zdHJ1ZC4gVGVtcG9yIG9jY2FlY2F0IHZlbmlhbSBpZCBlbmltIGV1IGR1aXMgc2ludCBhbGlxdWlwIHZlbGl0IHZlbGl0IGFsaXF1YSBmdWdpYXQuIE51bGxhIHNpdCBhdXRlIG1hZ25hIG5vc3RydWQgZWEgbGFib3JpcyBmdWdpYXQgc2l0IGFuaW0gY29uc2VxdWF0IGFsaXF1aXAuYDtcblxuICBPYmplY3Qua2V5cyhob21lUGFnZUNvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICBtYWluV3JhcHBlci5hcHBlbmRDaGlsZChob21lUGFnZUNvbnRlbnRba2V5XSk7XG4gIH0pO1xuXG4gIHJldHVybiB7bWFpbldyYXBwZXJ9O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgbG9hZEhvbWVQYWdlIGZyb20gJy4vbG9hZEhvbWVQYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdFBhZ2UoKSB7XG4gIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudC1jb250YWluZXInKTtcblxuICBsZXQgcGFnZUNvbnRlbnRzID0ge1xuICAgIGhlYWRlcjogaW5pdEhlYWRlcixcbiAgICBob21lUGFnZTogaW5pdE1haW4sXG4gICAgZm9vdGVyOiBpbml0Rm9vdGVyLFxuICB9O1xuXG4gIE9iamVjdC5rZXlzKHBhZ2VDb250ZW50cykuZm9yRWFjaChrZXkgPT4ge1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZUNvbnRlbnRzW2tleV0pO1xuICB9KTtcblxuICByZXR1cm4gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcbn1cblxuY29uc3QgaW5pdEhlYWRlciA9ICgoKSA9PiB7XG4gIGxldCBoZWFkZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgbGV0IGhlYWRlckNvbnRlbnQgPSB7XG4gICAgdGl0bGU6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSxcbiAgICBtZW51OiBjcmVhdGVQYWdlTWVudSgpLFxuICB9XG5cbiAgaGVhZGVyQ29udGVudC50aXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0OiBSZXN0YXVyYW50IFBhZ2UnO1xuXG4gIE9iamVjdC5rZXlzKGhlYWRlckNvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICBoZWFkZXJXcmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRlbnRba2V5XSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVBhZ2VNZW51KCkge1xuICAgIGxldCBwYWdlTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2VNZW51LmlkID0gJ3BhZ2UtbWVudSc7XG5cbiAgICBsZXQgYnV0dG9ucyA9IHtcbiAgICAgIGhvbWU6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxuICAgICAgbWVudTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXG4gICAgICBmaW5kVXM6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxuICAgIH1cblxuICAgIGJ1dHRvbnMuaG9tZS5pZCA9ICdob21lLWJ0bic7XG4gICAgYnV0dG9ucy5tZW51LmlkID0gJ21lbnUtYnRuJztcbiAgICBidXR0b25zLmZpbmRVcy5pZCA9ICdmaW5kLXVzLWJ0bic7XG5cbiAgICBidXR0b25zLmhvbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgYnV0dG9ucy5tZW51LnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIGJ1dHRvbnMuZmluZFVzLnRleHRDb250ZW50ID0gJ0ZpbmQgVXMnO1xuXG4gICAgT2JqZWN0LmtleXMoYnV0dG9ucykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgcGFnZU1lbnUuYXBwZW5kQ2hpbGQoYnV0dG9uc1trZXldKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwYWdlTWVudTtcbiAgfTtcblxuICByZXR1cm4gaGVhZGVyV3JhcHBlcjtcbn0pKCk7XG5cbmNvbnN0IGluaXRNYWluID0gKCgpID0+IHtcbiAgbGV0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBsb2FkSG9tZVBhZ2UobWFpbldyYXBwZXIpO1xuXG4gIHJldHVybiBtYWluV3JhcHBlcjtcbn0pKCk7XG5cbmNvbnN0IGluaXRGb290ZXIgPSAoKCkgPT4ge1xuICBsZXQgZm9vdGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG4gIGxldCBmb290ZXJDb250ZW50ID0ge1xuICAgIHRpdGxlOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG4gIH1cblxuICBmb290ZXJDb250ZW50LnRpdGxlLmlubmVySFRNTCA9IGA8c3Bhbj5cbiAgICDCqVxuICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnJ6b3N0b3Zza2lcIiB0YXJnZXQ9XCJfYmxhbmtcIj5icnpvc3RvdnNraTwvYT5cbiAgICAyMDIzXG4gIDwvc3Bhbj5gO1xuXG4gIE9iamVjdC5rZXlzKGZvb3RlckNvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICBmb290ZXJXcmFwcGVyLmFwcGVuZENoaWxkKGZvb3RlckNvbnRlbnRba2V5XSk7XG4gIH0pO1xuXG4gIHJldHVybiBmb290ZXJXcmFwcGVyO1xufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=