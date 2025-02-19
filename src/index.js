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

  headScripts.forEach(rawScript => {
    const sleep = rawScript.substr(0, 5) === 'sleep';
    const script = sleep ? rawScript.slice(5) : rawScript;

    const scriptTemplate = document.createElement('template');
    scriptTemplate.insertAdjacentHTML('afterbegin', script);
    const tag = scriptTemplate.querySelector("script");
    const scriptAttriputes = tag.attributes;

    const scriptTag = document.createElement('script');
    scriptTag.text = tag.innerHTML;

    if (scriptAttriputes.length) {
      Object.keys(scriptAttriputes).forEach(key => {
        scriptTag.setAttribute(scriptAttriputes[key].name, scriptAttriputes[key].value);
      })
    }
    if (sleep) {
      rnbCookiesSleep(1000).then(() => { document.head.appendChild(scriptTag); });
    }
    else {
      document.head.appendChild(scriptTag);
    }
  });

  const body = document.querySelector('body');
  body.insertAdjacentHTML('afterbegin', rnb_cookies_data.body_scripts);
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

  const cookiesbuttonCancel = document.createElement('button');
  cookiesbuttonCancel.classList.add('rnb_cookies__buttonCancel');
  cookiesbuttonCancel.innerHTML = rnb_cookies_data.buttonCancel;

  cookiesNotice.appendChild(cookiesContent);
  cookiesNotice.appendChild(cookiesbutton);
  cookiesNotice.appendChild(cookiesbuttonCancel);

  cookiesContiner.appendChild(cookiesNotice);

  cookiesApp.appendChild(cookiesContiner);

  document.body.appendChild(cookiesApp);

  const buttons = document.querySelectorAll('.rnb_cookies__button');
  buttons.forEach((button) => {
    button.addEventListener('click', rnbCookiesConfirm, false);
  });

  const buttonsCancel = document.querySelectorAll('.rnb_cookies__buttonCancel');
  buttonsCancel.forEach((button) => {
    button.addEventListener('click', rnbCookiesCancel, false);
  });

  rnbCookiesSleep(1000).then(() => {
    cookiesNotice.classList.add('show');
    cookiesApp.classList.add('open');
  });
}

function rnbCookiesConfirm() {
  const cookieApp = document.querySelector('#rnb_cookies');
  const cookiesNotice = document.querySelector('.rnb_cookies__notice');
  localStorage.setItem('rnbCookies', true);
  cookiesNotice.classList.remove('show');
  cookieApp.classList.remove('open');

  rnbCookiesLoadScripts();
}

function rnbCookiesCancel() {
  const cookieApp = document.querySelector('#rnb_cookies');
  const cookiesNotice = document.querySelector('.rnb_cookies__notice');
  localStorage.setItem('rnbCookies', false);
  cookiesNotice.classList.remove('show');
  cookieApp.classList.remove('open');

}

function rnbCookiesSleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
