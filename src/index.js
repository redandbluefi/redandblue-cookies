import './styl/style.styl';

window.addEventListener('load', rnbCookiesInit);

function rnbCookiesInit() {
	const rnbCookiesOk = localStorage.getItem('rnbCookies');
	if (rnbCookiesOk) {
		rnbCookiesLoadScripts();
	}
	else {
		rnbCookiesSleep(1000).then(() => { rnbCookiesShowNotice(); });
	}
}

function rnbCookiesLoadScripts() {
	const headScripts = JSON.parse(rnb_cookies_data.header_scripts);

	headScripts.forEach(script => {
		const headScript = rnbCookiesParseString(script);
		const scriptTag = document.createElement('script');
		scriptTag.text = headScript;
	
		document.head.appendChild(scriptTag);
	});
	
	const body = document.querySelector('body');
	body.insertAdjacentHTML('afterbegin', rnb_cookies_data.body_scripts);
}

function rnbCookiesParseString(s) {
	let returnScript = s.replace(/<script>/, '');
	returnScript = returnScript.replace(/<\/script>/, '');

	return returnScript;
}

function rnbCookiesShowNotice() {
	const cookiesApp = document.createElement('div');
	cookiesApp.setAttribute('id', 'rnb_cookies');

	const cookiesContiner = document.createElement('div');
	cookiesContiner.classList.add('rnb_cookies');

	const cookiesNotice = document.createElement('div');
	cookiesNotice.classList.add('rnb_cookies__notice');

	const cookiesContent = document.createElement('div');
	cookiesContent.classList.add('rnb_cookies__content');
	cookiesContent.innerHTML = rnb_cookies_data.content;

	const cookiesbutton = document.createElement('button');
	cookiesbutton.classList.add('rnb_cookies__button');
	cookiesbutton.innerHTML = rnb_cookies_data.button;

	cookiesNotice.appendChild(cookiesContent);
	cookiesNotice.appendChild(cookiesbutton);

	cookiesContiner.appendChild(cookiesNotice);

	cookiesApp.appendChild(cookiesContiner);

	document.body.appendChild(cookiesApp);

	const buttons = document.querySelectorAll('.rnb_cookies__button');
	buttons.forEach((button) => {
		button.addEventListener('click', rnbCookiesConfirm, false);
	});

	rnbCookiesSleep(1000).then(() => { cookiesNotice.classList.add('show'); });
}

function rnbCookiesConfirm() {
	const cookiesNotice = document.querySelector('.rnb_cookies__notice');
	localStorage.setItem('rnbCookies', true);
	cookiesNotice.classList.remove('show');

	rnbCookiesLoadScripts();
}

function rnbCookiesSleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
