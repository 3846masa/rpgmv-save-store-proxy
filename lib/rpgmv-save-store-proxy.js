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
  var ref = (0, _co.wrap)(function* (req, res) {
    let reqUrl = req.url.substr(1);
    let filename = _url2.default.parse(reqUrl).pathname.split('/').reverse()[0];
    let fetchRes = yield (0, _nodeFetch2.default)(reqUrl, {
      method: req.method,
      headers: Object.assign({}, req.headers, {
        authorization: undefined,
        host: undefined,
        referer: undefined
      })
    });

    res.status(fetchRes.status);
    Object.keys(fetchRes.headers._headers).forEach(key => {
      if ('content-encoding' === key.toLowerCase()) return;
      let normalizedKey = key.toLowerCase().split('-').map(c => c.replace(/^./, c => c.toUpperCase())).join('-');
      res.setHeader(normalizedKey, fetchRes.headers._headers[key]);
    });

    if (filename === '' || filename.match(/^index\..*$/)) {
      insertScript((yield fetchRes.text())).pipe(res);
    } else {
      fetchRes.body.pipe(res);
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
    proxy(req, res).then(() => next()).catch(_e => next(_e));
  }
});

exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ycGdtdi1zYXZlLXN0b3JlLXByb3h5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxJQUFJLE1BQU0sR0FBRyxhQVBKLE1BQU0sR0FPTSxDQUFDOztBQUV0QixJQUFJLEtBQUs7MEJBQUcsV0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFLO0FBQzlCLFFBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9CLFFBQUksUUFBUSxHQUFHLGNBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEUsUUFBSSxRQUFRLEdBQUcsTUFBTSx5QkFBTSxNQUFNLEVBQUU7QUFDakMsWUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO0FBQ2xCLGFBQU8sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFO0FBQ3RDLHFCQUFhLEVBQUUsU0FBUztBQUN4QixZQUFJLEVBQUUsU0FBUztBQUNmLGVBQU8sRUFBRSxTQUFTO09BQ25CLENBQUM7S0FDSCxDQUFDLENBQUM7O0FBRUgsT0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDNUIsVUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxBQUFDLEdBQUcsSUFBSztBQUN0RCxVQUFJLGtCQUFrQixLQUFLLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxPQUFPO0FBQ3JELFVBQUksYUFBYSxHQUNmLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FDYixLQUFLLENBQUMsR0FBRyxDQUFDLENBQ1YsR0FBRyxDQUFDLEFBQUMsQ0FBQyxJQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEFBQUMsQ0FBQyxJQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQ25ELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNoQixTQUFHLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQzlELENBQUMsQ0FBQzs7QUFFSCxRQUFJLFFBQVEsS0FBSyxFQUFFLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRTtBQUNwRCxrQkFBWSxFQUFDLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDL0MsTUFBTTtBQUNMLGNBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3pCO0dBQ0Y7a0JBNUJHLEtBQUs7OztJQTRCUixDQUFDOztBQUVGLElBQUksWUFBWSxHQUFHLEFBQUMsSUFBSSxJQUFLO0FBQzNCLE1BQUksQ0FBQyxHQUFHLGtCQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzQixHQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLDRDQUE0QyxDQUFDLENBQUM7QUFDL0QsTUFBSSxRQUFRLEdBQUcsbUJBdENSLG9CQUFvQixFQXNDYyxDQUFDO0FBQzFDLFVBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQy9CLFVBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN2QixTQUFPLFFBQVEsQ0FBQztDQUNqQixDQUFDOztBQUVGLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksS0FBSztBQUM3QixNQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvQixNQUFJLENBQUMsY0FqREUsS0FBSyxFQWlESSxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxLQUMzQjtBQUNILFNBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQ1osSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FDbEIsS0FBSyxDQUFDLEFBQUMsRUFBRSxJQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0dBQzVCO0NBQ0YsQ0FBQyxDQUFDOztrQkFFWSxNQUFNIiwiZmlsZSI6InJwZ212LXNhdmUtc3RvcmUtcHJveHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IGlzVXJpIGFzIGlzVmFsaWRVcmwgfSBmcm9tICd2YWxpZC11cmwnO1xuaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnO1xuaW1wb3J0IHVybCBmcm9tICd1cmwnO1xuaW1wb3J0IHsgUmVhZGFibGVTdHJlYW1CdWZmZXIgfSBmcm9tICdzdHJlYW0tYnVmZmVycyc7XG5pbXBvcnQgY2hlZXJpbyBmcm9tICdjaGVlcmlvJztcblxubGV0IHJvdXRlciA9IFJvdXRlcigpO1xuXG5sZXQgcHJveHkgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgbGV0IHJlcVVybCA9IHJlcS51cmwuc3Vic3RyKDEpO1xuICBsZXQgZmlsZW5hbWUgPSB1cmwucGFyc2UocmVxVXJsKS5wYXRobmFtZS5zcGxpdCgnLycpLnJldmVyc2UoKVswXTtcbiAgbGV0IGZldGNoUmVzID0gYXdhaXQgZmV0Y2gocmVxVXJsLCB7XG4gICAgbWV0aG9kOiByZXEubWV0aG9kLFxuICAgIGhlYWRlcnM6IE9iamVjdC5hc3NpZ24oe30sIHJlcS5oZWFkZXJzLCB7XG4gICAgICBhdXRob3JpemF0aW9uOiB1bmRlZmluZWQsXG4gICAgICBob3N0OiB1bmRlZmluZWQsXG4gICAgICByZWZlcmVyOiB1bmRlZmluZWRcbiAgICB9KVxuICB9KTtcblxuICByZXMuc3RhdHVzKGZldGNoUmVzLnN0YXR1cyk7XG4gIE9iamVjdC5rZXlzKGZldGNoUmVzLmhlYWRlcnMuX2hlYWRlcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICgnY29udGVudC1lbmNvZGluZycgPT09IGtleS50b0xvd2VyQ2FzZSgpKSByZXR1cm47XG4gICAgbGV0IG5vcm1hbGl6ZWRLZXkgPVxuICAgICAga2V5LnRvTG93ZXJDYXNlKClcbiAgICAgICAgIC5zcGxpdCgnLScpXG4gICAgICAgICAubWFwKChjKSA9PiBjLnJlcGxhY2UoL14uLywgKGMpID0+IGMudG9VcHBlckNhc2UoKSkpXG4gICAgICAgICAuam9pbignLScpO1xuICAgIHJlcy5zZXRIZWFkZXIobm9ybWFsaXplZEtleSwgZmV0Y2hSZXMuaGVhZGVycy5faGVhZGVyc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKGZpbGVuYW1lID09PSAnJyB8fCBmaWxlbmFtZS5tYXRjaCgvXmluZGV4XFwuLiokLykpIHtcbiAgICBpbnNlcnRTY3JpcHQoYXdhaXQgZmV0Y2hSZXMudGV4dCgpKS5waXBlKHJlcyk7XG4gIH0gZWxzZSB7XG4gICAgZmV0Y2hSZXMuYm9keS5waXBlKHJlcyk7XG4gIH1cbn07XG5cbmxldCBpbnNlcnRTY3JpcHQgPSAoYm9keSkgPT4ge1xuICBsZXQgJCA9IGNoZWVyaW8ubG9hZChib2R5KTtcbiAgJCgnaGVhZCcpLmFwcGVuZCgnPHNjcmlwdCBzcmM9XCIvbGliL3NhdmUtc3RvcmUuanNcIj48L3NjcmlwdD4nKTtcbiAgbGV0IGJvZHlQaXBlID0gbmV3IFJlYWRhYmxlU3RyZWFtQnVmZmVyKCk7XG4gIGJvZHlQaXBlLnB1dCgkLmh0bWwoKSwgJ3V0ZjgnKTtcbiAgYm9keVBpcGUuZGVzdHJveVNvb24oKTtcbiAgcmV0dXJuIGJvZHlQaXBlO1xufTtcblxucm91dGVyLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcbiAgbGV0IHJlcVVybCA9IHJlcS51cmwuc3Vic3RyKDEpO1xuICBpZiAoIWlzVmFsaWRVcmwocmVxVXJsKSkgbmV4dCgpO1xuICBlbHNlIHtcbiAgICBwcm94eShyZXEsIHJlcylcbiAgICAgIC50aGVuKCgpID0+IG5leHQoKSlcbiAgICAgIC5jYXRjaCgoX2UpID0+IG5leHQoX2UpKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==