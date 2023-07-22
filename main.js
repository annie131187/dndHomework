/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 562:
/***/ (() => {

const columns = document.querySelectorAll(".column");
columns.forEach(col => {
  const addNewCard = () => {
    const card = col.querySelector(".cards");
    const btn = col.querySelector(".add-btn");
    const addBtn = col.querySelector(".add-card-btn");
    const closeBtn = col.querySelector(".close-card-btn");
    const textarea = col.querySelector("textarea");
    const form = col.querySelector(".form");
    btn.addEventListener("click", () => {
      form.style.display = "block";
      btn.style.display = "none";
    });
    closeBtn.addEventListener("click", () => {
      textarea.value = "";
      form.style.display = "none";
      btn.style.display = "block";
    });
    const addNewCardItem = text => {
      const newCard = document.createElement("div");
      newCard.classList.add("cards-item");
      let dataId = performance.now();
      newCard.setAttribute("data-id", dataId);
      newCard.draggable = "true";
      newCard.textContent = text;
      if (card.style.display === "none" && text !== "") {
        card.style.display = "block";
      }
      if (text === "") return;
      card.append(newCard);
      const removeBtn = document.createElement("button");
      removeBtn.classList.add("remove-btn");
      newCard.append(removeBtn);

      // localStorage.setItem(newCard.getAttribute("data-id"), text);
      // console.log(localStorage);
    };

    addBtn.addEventListener("click", () => {
      addNewCardItem(textarea.value);
      textarea.value = "";
      form.style.display = "none";
      btn.style.display = "block";
      dragNdrop();
    });
  };
  addNewCard();
});
let draggedItem = null;
const dragNdrop = () => {
  const cardsElems = document.querySelectorAll(".cards");
  const cardsItems = document.querySelectorAll(".cards-item");
  for (let i = 0; i < cardsItems.length; i++) {
    const item = cardsItems[i];
    item.addEventListener("dragstart", () => {
      draggedItem = item;
      setTimeout(() => {
        item.style.display = "none";
      }, 0);
    });
    item.addEventListener("dragend", () => {
      setTimeout(() => {
        item.style.display = "block";
        draggedItem = null;
      }, 0);
    });
    const removeBtn = item.querySelector(".remove-btn");
    removeBtn.addEventListener("click", e => {
      e.preventDefault();
      item.remove();

      // localStorage.removeItem(item.dataset.id);
      // console.log(localStorage);
    });

    for (let j = 0; j < cardsElems.length; j++) {
      const card = cardsElems[j];
      card.addEventListener("dragover", e => e.preventDefault());
      card.addEventListener("dragenter", function (e) {
        e.preventDefault();
        this.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        this.style.margin = "5px";
        this.style.borderRadius = "5px";
      });
      card.addEventListener("dragleave", function () {
        this.style.backgroundColor = "rgba(0, 0, 0, 0)";
      });
      card.addEventListener("drop", function (e) {
        this.style.backgroundColor = "rgba(0, 0, 0, 0)";
        if (this.children.length === 0) {
          this.append(draggedItem);
        } else {
          this.insertBefore(draggedItem, e.target);
        }
      });
    }
  }
};
dragNdrop();
window.addEventListener("beforeunload", () => {
  const data = {};
  const cardsItems = document.querySelectorAll(".cards-item");
  cardsItems.forEach(item => {
    data[item.dataset.id] = item.textContent;
  });
  localStorage.setItem("data", JSON.stringify(data));
});
document.addEventListener("DOMContentLoaded", () => {
  const json = localStorage.getItem("data");
  let data;
  try {
    data = JSON.parse(json);
  } catch (error) {
    console.log(error);
  }
  if (data) {
    Object.keys(data).forEach(key => {
      document.querySelector(`[data-id="${key}"]`).textContent = data[key];
    });
  }
});

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(562);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_app__WEBPACK_IMPORTED_MODULE_0__);



// TODO: write your code in app.js
})();

/******/ })()
;
//# sourceMappingURL=main.js.map