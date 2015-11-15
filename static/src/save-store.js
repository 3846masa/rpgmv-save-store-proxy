import 'babel-polyfill';
import 'whatwg-fetch';
import url from 'url';
import qs from 'querystring';

/* fix audio */
import './fix-audio';

const API_ENDPOINT = '/api/v1/RPGMVSaves';

(function() {
  let hostname = url.parse(location.pathname.substr(1)).hostname;
  let storeId = null;

  restoreStorage()
    .then(replaceFunction)
    .catch((_e) => {
      console.error(_e.stack);
      alert(`Error.\n${_e.name}: ${_e.message}`);
    });

  function replaceFunction() {
    ['setItem', 'removeItem', 'clear'].forEach((funcName) => {
      let _func = localStorage[funcName];
      localStorage[funcName] = function() {
        _func.apply(localStorage, arguments);
        sendStorage();
      };
    });
  }

  async function sendStorage(isInit = false) {
    let reqUrl = API_ENDPOINT + ((isInit) ? ''  : `/${storeId}`);

    let opts = {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        storage: JSON.stringify(localStorage),
        host: hostname
      })
    };

    let res = await fetch(reqUrl, opts);
    if (!res.ok) throw new Error(res.statusText);
    let json = await res.json();
    storeId = json._id;
  }

  async function initStorage() {
    await sendStorage(true);
    console.info('Save Inited.');
  }

  async function restoreStorage() {
    let reqUrl = API_ENDPOINT + '?' + qs.stringify({
      query: JSON.stringify({
        host: hostname
      })
    });

    let res = await fetch(reqUrl, { credentials: 'same-origin' });
    if (!res.ok) throw new Error(res.statusText);
    let json = await res.json();

    if (json.length <= 0) {
      await initStorage();
      return;
    }

    storeId = json[0]._id;

    let save = JSON.parse(json[0].storage);
    localStorage.clear();
    for (let key in save) {
      localStorage.setItem(key, save[key]);
    }

    console.info('Save loaded.');
  }
})();
