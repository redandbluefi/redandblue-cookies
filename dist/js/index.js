/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styl_style_styl__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styl_style_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styl_style_styl__);\n\n\nwindow.addEventListener('load', rnbCookiesInit);\n\nfunction rnbCookiesInit() {\n\tvar rnbCookiesOk = localStorage.getItem('rnbCookies');\n\tif (rnbCookiesOk) {\n\t\trnbCookiesLoadScripts();\n\t} else {\n\t\tsetTimeout(function () {\n\t\t\trnbCookiesShowNotice();\n\t\t}, 1000);\n\t}\n}\n\nfunction rnbCookiesLoadScripts() {\n\tvar headScripts = JSON.parse(rnb_cookies_data.header_scripts);\n\n\theadScripts.forEach(function (script) {\n\t\tvar headScript = rnbCookiesParseString(script);\n\t\tvar scriptTag = document.createElement('script');\n\t\tscriptTag.text = headScript;\n\n\t\tdocument.head.appendChild(scriptTag);\n\t});\n\n\tvar body = document.querySelector('body');\n\tbody.insertAdjacentHTML('afterbegin', rnb_cookies_data.body_scripts);\n}\n\nfunction rnbCookiesParseString(s) {\n\tvar returnScript = s.replace(/<script>/, '');\n\treturnScript = returnScript.replace(/<\\/script>/, '');\n\n\treturn returnScript;\n}\n\nfunction rnbCookiesShowNotice() {\n\tvar cookiesApp = document.createElement('div');\n\tcookiesApp.setAttribute('id', 'rnb_cookies');\n\n\tvar cookiesContiner = document.createElement('div');\n\tcookiesContiner.classList.add('rnb_cookies');\n\n\tvar cookiesNotice = document.createElement('div');\n\tcookiesNotice.classList.add('rnb_cookies__notice');\n\n\tvar cookiesContent = document.createElement('div');\n\tcookiesContent.classList.add('rnb_cookies__content');\n\tcookiesContent.innerHTML = rnb_cookies_data.content;\n\n\tvar cookiesbutton = document.createElement('button');\n\tcookiesbutton.classList.add('rnb_cookies__button');\n\tcookiesbutton.innerHTML = rnb_cookies_data.button;\n\n\tcookiesNotice.appendChild(cookiesContent);\n\tcookiesNotice.appendChild(cookiesbutton);\n\n\tcookiesContiner.appendChild(cookiesNotice);\n\n\tcookiesApp.appendChild(cookiesContiner);\n\n\tdocument.body.appendChild(cookiesApp);\n\n\tvar buttons = document.querySelectorAll('.rnb_cookies__button');\n\tbuttons.forEach(function (button) {\n\t\tbutton.addEventListener('click', rnbCookiesConfirm, false);\n\t});\n\n\tsetTimeout(function () {\n\t\tcookiesNotice.classList.add('show');\n\t}, 1000);\n}\n\nfunction rnbCookiesConfirm() {\n\tvar cookiesNotice = document.querySelector('.rnb_cookies__notice');\n\tlocalStorage.setItem('rnbCookies', true);\n\tcookiesNotice.classList.remove('show');\n\n\trnbCookiesLoadScripts();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz84NzQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsL3N0eWxlLnN0eWwnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJuYkNvb2tpZXNJbml0KTtcblxuZnVuY3Rpb24gcm5iQ29va2llc0luaXQoKSB7XG5cdHZhciBybmJDb29raWVzT2sgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncm5iQ29va2llcycpO1xuXHRpZiAocm5iQ29va2llc09rKSB7XG5cdFx0cm5iQ29va2llc0xvYWRTY3JpcHRzKCk7XG5cdH0gZWxzZSB7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRybmJDb29raWVzU2hvd05vdGljZSgpO1xuXHRcdH0sIDEwMDApO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJuYkNvb2tpZXNMb2FkU2NyaXB0cygpIHtcblx0dmFyIGhlYWRTY3JpcHRzID0gSlNPTi5wYXJzZShybmJfY29va2llc19kYXRhLmhlYWRlcl9zY3JpcHRzKTtcblxuXHRoZWFkU2NyaXB0cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JpcHQpIHtcblx0XHR2YXIgaGVhZFNjcmlwdCA9IHJuYkNvb2tpZXNQYXJzZVN0cmluZyhzY3JpcHQpO1xuXHRcdHZhciBzY3JpcHRUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblx0XHRzY3JpcHRUYWcudGV4dCA9IGhlYWRTY3JpcHQ7XG5cblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdFRhZyk7XG5cdH0pO1xuXG5cdHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXHRib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHJuYl9jb29raWVzX2RhdGEuYm9keV9zY3JpcHRzKTtcbn1cblxuZnVuY3Rpb24gcm5iQ29va2llc1BhcnNlU3RyaW5nKHMpIHtcblx0dmFyIHJldHVyblNjcmlwdCA9IHMucmVwbGFjZSgvPHNjcmlwdD4vLCAnJyk7XG5cdHJldHVyblNjcmlwdCA9IHJldHVyblNjcmlwdC5yZXBsYWNlKC88XFwvc2NyaXB0Pi8sICcnKTtcblxuXHRyZXR1cm4gcmV0dXJuU2NyaXB0O1xufVxuXG5mdW5jdGlvbiBybmJDb29raWVzU2hvd05vdGljZSgpIHtcblx0dmFyIGNvb2tpZXNBcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29va2llc0FwcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JuYl9jb29raWVzJyk7XG5cblx0dmFyIGNvb2tpZXNDb250aW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb29raWVzQ29udGluZXIuY2xhc3NMaXN0LmFkZCgncm5iX2Nvb2tpZXMnKTtcblxuXHR2YXIgY29va2llc05vdGljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb29raWVzTm90aWNlLmNsYXNzTGlzdC5hZGQoJ3JuYl9jb29raWVzX19ub3RpY2UnKTtcblxuXHR2YXIgY29va2llc0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29va2llc0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgncm5iX2Nvb2tpZXNfX2NvbnRlbnQnKTtcblx0Y29va2llc0NvbnRlbnQuaW5uZXJIVE1MID0gcm5iX2Nvb2tpZXNfZGF0YS5jb250ZW50O1xuXG5cdHZhciBjb29raWVzYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGNvb2tpZXNidXR0b24uY2xhc3NMaXN0LmFkZCgncm5iX2Nvb2tpZXNfX2J1dHRvbicpO1xuXHRjb29raWVzYnV0dG9uLmlubmVySFRNTCA9IHJuYl9jb29raWVzX2RhdGEuYnV0dG9uO1xuXG5cdGNvb2tpZXNOb3RpY2UuYXBwZW5kQ2hpbGQoY29va2llc0NvbnRlbnQpO1xuXHRjb29raWVzTm90aWNlLmFwcGVuZENoaWxkKGNvb2tpZXNidXR0b24pO1xuXG5cdGNvb2tpZXNDb250aW5lci5hcHBlbmRDaGlsZChjb29raWVzTm90aWNlKTtcblxuXHRjb29raWVzQXBwLmFwcGVuZENoaWxkKGNvb2tpZXNDb250aW5lcik7XG5cblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb29raWVzQXBwKTtcblxuXHR2YXIgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ybmJfY29va2llc19fYnV0dG9uJyk7XG5cdGJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm5iQ29va2llc0NvbmZpcm0sIGZhbHNlKTtcblx0fSk7XG5cblx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0Y29va2llc05vdGljZS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG5cdH0sIDEwMDApO1xufVxuXG5mdW5jdGlvbiBybmJDb29raWVzQ29uZmlybSgpIHtcblx0dmFyIGNvb2tpZXNOb3RpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm5iX2Nvb2tpZXNfX25vdGljZScpO1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncm5iQ29va2llcycsIHRydWUpO1xuXHRjb29raWVzTm90aWNlLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcblxuXHRybmJDb29raWVzTG9hZFNjcmlwdHMoKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsL3N0eWxlLnN0eWw/MWJmYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWwvc3R5bGUuc3R5bFxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);