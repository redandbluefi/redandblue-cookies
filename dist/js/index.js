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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styl_style_styl__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styl_style_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styl_style_styl__);\n\n\nwindow.addEventListener('load', rnbCookiesInit);\n\nfunction rnbCookiesInit() {\n\tvar rnbCookiesOk = localStorage.getItem('rnbCookies');\n\tif (rnbCookiesOk) {\n\t\tconsole.log('rnbCookiesOk');\n\t\trnbCookiesLoadScripts();\n\t} else {\n\t\tconsole.log('!rnbCookiesOk');\n\n\t\tsetTimeout(function () {\n\t\t\trnbCookiesShowNotice();\n\t\t}, 1000);\n\t}\n}\n\nfunction rnbCookiesLoadScripts() {\n\tvar headScript = rnbCookiesParseString(rnb_cookies_data.header_scripts);\n\tvar scriptTag = document.createElement('script');\n\tscriptTag.text = headScript;\n\n\tdocument.head.appendChild(scriptTag);\n\n\tvar body = document.querySelector('body');\n\tbody.insertAdjacentHTML('afterbegin', rnb_cookies_data.body_scripts);\n}\n\nfunction rnbCookiesParseString(s) {\n\tvar returnScript = s.replace(/<script>/, '');\n\treturnScript = returnScript.replace(/<\\/script>/, '');\n\n\treturn returnScript;\n}\n\nfunction rnbCookiesShowNotice() {\n\tconsole.log('generate notice');\n\tvar cookiesApp = document.createElement('div');\n\tcookiesApp.setAttribute('id', 'rnb_cookies');\n\n\tvar cookiesContiner = document.createElement('div');\n\tcookiesContiner.classList.add('rnb_cookies');\n\n\tvar cookiesNotice = document.createElement('div');\n\tcookiesNotice.classList.add('rnb_cookies__notice');\n\n\tvar cookiesContent = document.createElement('div');\n\tcookiesContent.classList.add('rnb_cookies__content');\n\tcookiesNotice.innerHTML = rnb_cookies_data.content;\n\n\tvar cookiesbutton = document.createElement('button');\n\tcookiesbutton.classList.add('rnb_cookies__button');\n\tcookiesbutton.innerHTML = rnb_cookies_data.button;\n\n\tcookiesNotice.appendChild(cookiesContent);\n\tcookiesNotice.appendChild(cookiesbutton);\n\n\tcookiesContiner.appendChild(cookiesNotice);\n\n\tcookiesApp.appendChild(cookiesContiner);\n\tconsole.log('generated notice', cookiesApp);\n\n\tdocument.body.appendChild(cookiesApp);\n\n\tvar buttons = document.querySelectorAll('.rnb_cookies__button');\n\tbuttons.forEach(function (button) {\n\t\tbutton.addEventListener('click', rnbCookiesConfirm, false);\n\t});\n\n\tsetTimeout(function () {\n\t\tcookiesNotice.classList.add('show');\n\t}, 1000);\n}\n\nfunction rnbCookiesConfirm() {\n\tvar cookiesNotice = document.querySelector('.rnb_cookies__notice');\n\tlocalStorage.setItem('rnbCookies', true);\n\tcookiesNotice.classList.remove('show');\n\n\trnbCookiesLoadScripts();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz84NzQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsL3N0eWxlLnN0eWwnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJuYkNvb2tpZXNJbml0KTtcblxuZnVuY3Rpb24gcm5iQ29va2llc0luaXQoKSB7XG5cdHZhciBybmJDb29raWVzT2sgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncm5iQ29va2llcycpO1xuXHRpZiAocm5iQ29va2llc09rKSB7XG5cdFx0Y29uc29sZS5sb2coJ3JuYkNvb2tpZXNPaycpO1xuXHRcdHJuYkNvb2tpZXNMb2FkU2NyaXB0cygpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUubG9nKCchcm5iQ29va2llc09rJyk7XG5cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdHJuYkNvb2tpZXNTaG93Tm90aWNlKCk7XG5cdFx0fSwgMTAwMCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcm5iQ29va2llc0xvYWRTY3JpcHRzKCkge1xuXHR2YXIgaGVhZFNjcmlwdCA9IHJuYkNvb2tpZXNQYXJzZVN0cmluZyhybmJfY29va2llc19kYXRhLmhlYWRlcl9zY3JpcHRzKTtcblx0dmFyIHNjcmlwdFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXHRzY3JpcHRUYWcudGV4dCA9IGhlYWRTY3JpcHQ7XG5cblx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHRUYWcpO1xuXG5cdHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXHRib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHJuYl9jb29raWVzX2RhdGEuYm9keV9zY3JpcHRzKTtcbn1cblxuZnVuY3Rpb24gcm5iQ29va2llc1BhcnNlU3RyaW5nKHMpIHtcblx0dmFyIHJldHVyblNjcmlwdCA9IHMucmVwbGFjZSgvPHNjcmlwdD4vLCAnJyk7XG5cdHJldHVyblNjcmlwdCA9IHJldHVyblNjcmlwdC5yZXBsYWNlKC88XFwvc2NyaXB0Pi8sICcnKTtcblxuXHRyZXR1cm4gcmV0dXJuU2NyaXB0O1xufVxuXG5mdW5jdGlvbiBybmJDb29raWVzU2hvd05vdGljZSgpIHtcblx0Y29uc29sZS5sb2coJ2dlbmVyYXRlIG5vdGljZScpO1xuXHR2YXIgY29va2llc0FwcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb29raWVzQXBwLnNldEF0dHJpYnV0ZSgnaWQnLCAncm5iX2Nvb2tpZXMnKTtcblxuXHR2YXIgY29va2llc0NvbnRpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvb2tpZXNDb250aW5lci5jbGFzc0xpc3QuYWRkKCdybmJfY29va2llcycpO1xuXG5cdHZhciBjb29raWVzTm90aWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvb2tpZXNOb3RpY2UuY2xhc3NMaXN0LmFkZCgncm5iX2Nvb2tpZXNfX25vdGljZScpO1xuXG5cdHZhciBjb29raWVzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb29raWVzQ29udGVudC5jbGFzc0xpc3QuYWRkKCdybmJfY29va2llc19fY29udGVudCcpO1xuXHRjb29raWVzTm90aWNlLmlubmVySFRNTCA9IHJuYl9jb29raWVzX2RhdGEuY29udGVudDtcblxuXHR2YXIgY29va2llc2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRjb29raWVzYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JuYl9jb29raWVzX19idXR0b24nKTtcblx0Y29va2llc2J1dHRvbi5pbm5lckhUTUwgPSBybmJfY29va2llc19kYXRhLmJ1dHRvbjtcblxuXHRjb29raWVzTm90aWNlLmFwcGVuZENoaWxkKGNvb2tpZXNDb250ZW50KTtcblx0Y29va2llc05vdGljZS5hcHBlbmRDaGlsZChjb29raWVzYnV0dG9uKTtcblxuXHRjb29raWVzQ29udGluZXIuYXBwZW5kQ2hpbGQoY29va2llc05vdGljZSk7XG5cblx0Y29va2llc0FwcC5hcHBlbmRDaGlsZChjb29raWVzQ29udGluZXIpO1xuXHRjb25zb2xlLmxvZygnZ2VuZXJhdGVkIG5vdGljZScsIGNvb2tpZXNBcHApO1xuXG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29va2llc0FwcCk7XG5cblx0dmFyIGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucm5iX2Nvb2tpZXNfX2J1dHRvbicpO1xuXHRidXR0b25zLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xuXHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJuYkNvb2tpZXNDb25maXJtLCBmYWxzZSk7XG5cdH0pO1xuXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdGNvb2tpZXNOb3RpY2UuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuXHR9LCAxMDAwKTtcbn1cblxuZnVuY3Rpb24gcm5iQ29va2llc0NvbmZpcm0oKSB7XG5cdHZhciBjb29raWVzTm90aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJuYl9jb29raWVzX19ub3RpY2UnKTtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JuYkNvb2tpZXMnLCB0cnVlKTtcblx0Y29va2llc05vdGljZS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG5cblx0cm5iQ29va2llc0xvYWRTY3JpcHRzKCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsL3N0eWxlLnN0eWw/MWJmYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWwvc3R5bGUuc3R5bFxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);