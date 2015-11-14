import { Router } from 'express';
import { isUri as isValidUrl } from 'valid-url';
import fetch from 'node-fetch';
import url from 'url';
import { ReadableStreamBuffer } from 'stream-buffers';
import cheerio from 'cheerio';

let router = Router();

let proxy = async (req, res) => {
  let reqUrl = req.url.substr(1);
  let filename = url.parse(reqUrl).pathname.split('/').reverse()[0];
  let fetchRes = await fetch(reqUrl, {
    method: req.method,
    headers: Object.assign({}, req.headers, {
      authorization: undefined,
      host: undefined,
      referer: undefined
    })
  });

  res.status(fetchRes.status);
  Object.keys(fetchRes.headers._headers).forEach((key) => {
    if ('content-encoding' === key.toLowerCase()) return;
    let normalizedKey =
      key.toLowerCase()
         .split('-')
         .map((c) => c.replace(/^./, (c) => c.toUpperCase()))
         .join('-');
    res.setHeader(normalizedKey, fetchRes.headers._headers[key]);
  });

  if (filename === '' || filename.match(/^index\..*$/)) {
    insertScript(await fetchRes.text()).pipe(res);
  } else {
    fetchRes.body.pipe(res);
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
    proxy(req, res)
      .then(() => next())
      .catch((_e) => next(_e));
  }
});

export default router;
