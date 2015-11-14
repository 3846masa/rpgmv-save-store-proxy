import { Router } from 'express';
import { isUri as isValidUrl } from 'valid-url';
import fetch from 'node-fetch';
import url from 'url';
import { ReadableStreamBuffer } from 'stream-buffers';
import cheerio from 'cheerio';

let router = Router();

let proxy = async (reqUrl) => {
  let filename = url.parse(reqUrl).pathname.split('/').reverse()[0];
  let fetchRes = await fetch(reqUrl);
  if (filename === '' || filename.match(/^index\..*$/)) {
    return insertScript(await fetchRes.text());
  } else {
    return fetchRes.body;
  }
};

let insertScript = (body) => {
  let $ = cheerio.load(body);
  $('head').append('<script src="/lib/save-store.js"></script>');
  let bodyPipe = new ReadableStreamBuffer();
  bodyPipe.put($.html(), 'utf8');
  bodyPipe.destroySoon();
  return bodyPipe;
};

router.use((req, res, next) => {
  let reqUrl = req.url.substr(1);
  if (!isValidUrl(reqUrl)) next();
  else {
    proxy(reqUrl)
      .then((bodyPipe) => {
        bodyPipe.pipe(res);
        bodyPipe.on('close', next);
      }).catch((_e) => next(_e));
  }
});

export default router;
