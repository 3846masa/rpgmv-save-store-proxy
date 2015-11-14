'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _co = require('co');

var _express = require('express');

var _validUrl = require('valid-url');

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _streamBuffers = require('stream-buffers');

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let router = (0, _express.Router)();

let proxy = (function () {
  var ref = (0, _co.wrap)(function* (reqUrl, reqObj) {
    console.log(reqObj.headers);
    let filename = _url2.default.parse(reqUrl).pathname.split('/').reverse()[0];
    let fetchRes = yield (0, _nodeFetch2.default)(reqUrl, {
      method: reqObj.method,
      headers: Object.assign({}, reqObj.headers, {
        authorization: undefined,
        host: undefined
      })
    });
    if (filename === '' || filename.match(/^index\..*$/)) {
      return insertScript((yield fetchRes.text()));
    } else {
      return fetchRes.body;
    }
  });
  return function proxy(_x, _x2) {
    return ref.apply(this, arguments);
  };
})();

let insertScript = body => {
  let $ = _cheerio2.default.load(body);
  $('head').append('<script src="/lib/save-store.js"></script>');
  let bodyPipe = new _streamBuffers.ReadableStreamBuffer();
  bodyPipe.put($.html(), 'utf8');
  bodyPipe.destroySoon();
  return bodyPipe;
};

router.use((req, res, next) => {
  let reqUrl = req.url.substr(1);
  if (!(0, _validUrl.isUri)(reqUrl)) next();else {
    proxy(reqUrl, req).then(bodyPipe => {
      bodyPipe.pipe(res);
      bodyPipe.on('close', next);
    }).catch(_e => next(_e));
  }
});

exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ycGdtdi1zYXZlLXN0b3JlLXByb3h5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxJQUFJLE1BQU0sR0FBRyxhQVBKLE1BQU0sR0FPTSxDQUFDOztBQUV0QixJQUFJLEtBQUs7MEJBQUcsV0FBTyxNQUFNLEVBQUUsTUFBTSxFQUFLO0FBQ3BDLFdBQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVCLFFBQUksUUFBUSxHQUFHLGNBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEUsUUFBSSxRQUFRLEdBQUcsTUFBTSx5QkFBTSxNQUFNLEVBQUU7QUFDakMsWUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO0FBQ3JCLGFBQU8sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFO0FBQ3pDLHFCQUFhLEVBQUUsU0FBUztBQUN4QixZQUFJLEVBQUUsU0FBUztPQUNoQixDQUFDO0tBQ0gsQ0FBQyxDQUFDO0FBQ0gsUUFBSSxRQUFRLEtBQUssRUFBRSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEVBQUU7QUFDcEQsYUFBTyxZQUFZLEVBQUMsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUEsQ0FBQyxDQUFDO0tBQzVDLE1BQU07QUFDTCxhQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7S0FDdEI7R0FDRjtrQkFmRyxLQUFLOzs7SUFlUixDQUFDOztBQUVGLElBQUksWUFBWSxHQUFHLEFBQUMsSUFBSSxJQUFLO0FBQzNCLE1BQUksQ0FBQyxHQUFHLGtCQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzQixHQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLDRDQUE0QyxDQUFDLENBQUM7QUFDL0QsTUFBSSxRQUFRLEdBQUcsbUJBekJSLG9CQUFvQixFQXlCYyxDQUFDO0FBQzFDLFVBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQy9CLFVBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN2QixTQUFPLFFBQVEsQ0FBQztDQUNqQixDQUFDOztBQUVGLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksS0FBSztBQUM3QixNQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvQixNQUFJLENBQUMsY0FwQ0UsS0FBSyxFQW9DSSxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxLQUMzQjtBQUNILFNBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQ2YsSUFBSSxDQUFDLEFBQUMsUUFBUSxJQUFLO0FBQ2xCLGNBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkIsY0FBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDNUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxBQUFDLEVBQUUsSUFBSyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztHQUM5QjtDQUNGLENBQUMsQ0FBQzs7a0JBRVksTUFBTSIsImZpbGUiOiJycGdtdi1zYXZlLXN0b3JlLXByb3h5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBpc1VyaSBhcyBpc1ZhbGlkVXJsIH0gZnJvbSAndmFsaWQtdXJsJztcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJztcbmltcG9ydCB1cmwgZnJvbSAndXJsJztcbmltcG9ydCB7IFJlYWRhYmxlU3RyZWFtQnVmZmVyIH0gZnJvbSAnc3RyZWFtLWJ1ZmZlcnMnO1xuaW1wb3J0IGNoZWVyaW8gZnJvbSAnY2hlZXJpbyc7XG5cbmxldCByb3V0ZXIgPSBSb3V0ZXIoKTtcblxubGV0IHByb3h5ID0gYXN5bmMgKHJlcVVybCwgcmVxT2JqKSA9PiB7XG4gIGNvbnNvbGUubG9nKHJlcU9iai5oZWFkZXJzKTtcbiAgbGV0IGZpbGVuYW1lID0gdXJsLnBhcnNlKHJlcVVybCkucGF0aG5hbWUuc3BsaXQoJy8nKS5yZXZlcnNlKClbMF07XG4gIGxldCBmZXRjaFJlcyA9IGF3YWl0IGZldGNoKHJlcVVybCwge1xuICAgIG1ldGhvZDogcmVxT2JqLm1ldGhvZCxcbiAgICBoZWFkZXJzOiBPYmplY3QuYXNzaWduKHt9LCByZXFPYmouaGVhZGVycywge1xuICAgICAgYXV0aG9yaXphdGlvbjogdW5kZWZpbmVkLFxuICAgICAgaG9zdDogdW5kZWZpbmVkXG4gICAgfSlcbiAgfSk7XG4gIGlmIChmaWxlbmFtZSA9PT0gJycgfHwgZmlsZW5hbWUubWF0Y2goL15pbmRleFxcLi4qJC8pKSB7XG4gICAgcmV0dXJuIGluc2VydFNjcmlwdChhd2FpdCBmZXRjaFJlcy50ZXh0KCkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmZXRjaFJlcy5ib2R5O1xuICB9XG59O1xuXG5sZXQgaW5zZXJ0U2NyaXB0ID0gKGJvZHkpID0+IHtcbiAgbGV0ICQgPSBjaGVlcmlvLmxvYWQoYm9keSk7XG4gICQoJ2hlYWQnKS5hcHBlbmQoJzxzY3JpcHQgc3JjPVwiL2xpYi9zYXZlLXN0b3JlLmpzXCI+PC9zY3JpcHQ+Jyk7XG4gIGxldCBib2R5UGlwZSA9IG5ldyBSZWFkYWJsZVN0cmVhbUJ1ZmZlcigpO1xuICBib2R5UGlwZS5wdXQoJC5odG1sKCksICd1dGY4Jyk7XG4gIGJvZHlQaXBlLmRlc3Ryb3lTb29uKCk7XG4gIHJldHVybiBib2R5UGlwZTtcbn07XG5cbnJvdXRlci51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGxldCByZXFVcmwgPSByZXEudXJsLnN1YnN0cigxKTtcbiAgaWYgKCFpc1ZhbGlkVXJsKHJlcVVybCkpIG5leHQoKTtcbiAgZWxzZSB7XG4gICAgcHJveHkocmVxVXJsLCByZXEpXG4gICAgICAudGhlbigoYm9keVBpcGUpID0+IHtcbiAgICAgICAgYm9keVBpcGUucGlwZShyZXMpO1xuICAgICAgICBib2R5UGlwZS5vbignY2xvc2UnLCBuZXh0KTtcbiAgICAgIH0pLmNhdGNoKChfZSkgPT4gbmV4dChfZSkpO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19