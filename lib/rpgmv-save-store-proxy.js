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
  var ref = (0, _co.wrap)(function* (reqUrl) {
    let filename = _url2.default.parse(reqUrl).pathname.split('/').reverse()[0];
    let fetchRes = yield (0, _nodeFetch2.default)(reqUrl);
    if (filename === '' || filename.match(/^index\..*$/)) {
      return insertScript((yield fetchRes.text()));
    } else {
      return fetchRes.body;
    }
  });
  return function proxy(_x) {
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
    proxy(reqUrl).then(bodyPipe => {
      bodyPipe.pipe(res);
      bodyPipe.on('close', next);
    }).catch(_e => next(_e));
  }
});

exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ycGdtdi1zYXZlLXN0b3JlLXByb3h5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxJQUFJLE1BQU0sR0FBRyxhQVBKLE1BQU0sR0FPTSxDQUFDOztBQUV0QixJQUFJLEtBQUs7MEJBQUcsV0FBTyxNQUFNLEVBQUs7QUFDNUIsUUFBSSxRQUFRLEdBQUcsY0FBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsRSxRQUFJLFFBQVEsR0FBRyxNQUFNLHlCQUFNLE1BQU0sQ0FBQyxDQUFDO0FBQ25DLFFBQUksUUFBUSxLQUFLLEVBQUUsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFO0FBQ3BELGFBQU8sWUFBWSxFQUFDLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFBLENBQUMsQ0FBQztLQUM1QyxNQUFNO0FBQ0wsYUFBTyxRQUFRLENBQUMsSUFBSSxDQUFDO0tBQ3RCO0dBQ0Y7a0JBUkcsS0FBSzs7O0lBUVIsQ0FBQzs7QUFFRixJQUFJLFlBQVksR0FBRyxBQUFDLElBQUksSUFBSztBQUMzQixNQUFJLENBQUMsR0FBRyxrQkFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0IsR0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO0FBQy9ELE1BQUksUUFBUSxHQUFHLG1CQWxCUixvQkFBb0IsRUFrQmMsQ0FBQztBQUMxQyxVQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMvQixVQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDdkIsU0FBTyxRQUFRLENBQUM7Q0FDakIsQ0FBQzs7QUFFRixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEtBQUs7QUFDN0IsTUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0IsTUFBSSxDQUFDLGNBN0JFLEtBQUssRUE2QkksTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsS0FDM0I7QUFDSCxTQUFLLENBQUMsTUFBTSxDQUFDLENBQ1YsSUFBSSxDQUFDLEFBQUMsUUFBUSxJQUFLO0FBQ2xCLGNBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkIsY0FBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDNUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxBQUFDLEVBQUUsSUFBSyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztHQUM5QjtDQUNGLENBQUMsQ0FBQzs7a0JBRVksTUFBTSIsImZpbGUiOiJycGdtdi1zYXZlLXN0b3JlLXByb3h5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBpc1VyaSBhcyBpc1ZhbGlkVXJsIH0gZnJvbSAndmFsaWQtdXJsJztcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJztcbmltcG9ydCB1cmwgZnJvbSAndXJsJztcbmltcG9ydCB7IFJlYWRhYmxlU3RyZWFtQnVmZmVyIH0gZnJvbSAnc3RyZWFtLWJ1ZmZlcnMnO1xuaW1wb3J0IGNoZWVyaW8gZnJvbSAnY2hlZXJpbyc7XG5cbmxldCByb3V0ZXIgPSBSb3V0ZXIoKTtcblxubGV0IHByb3h5ID0gYXN5bmMgKHJlcVVybCkgPT4ge1xuICBsZXQgZmlsZW5hbWUgPSB1cmwucGFyc2UocmVxVXJsKS5wYXRobmFtZS5zcGxpdCgnLycpLnJldmVyc2UoKVswXTtcbiAgbGV0IGZldGNoUmVzID0gYXdhaXQgZmV0Y2gocmVxVXJsKTtcbiAgaWYgKGZpbGVuYW1lID09PSAnJyB8fCBmaWxlbmFtZS5tYXRjaCgvXmluZGV4XFwuLiokLykpIHtcbiAgICByZXR1cm4gaW5zZXJ0U2NyaXB0KGF3YWl0IGZldGNoUmVzLnRleHQoKSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZldGNoUmVzLmJvZHk7XG4gIH1cbn07XG5cbmxldCBpbnNlcnRTY3JpcHQgPSAoYm9keSkgPT4ge1xuICBsZXQgJCA9IGNoZWVyaW8ubG9hZChib2R5KTtcbiAgJCgnaGVhZCcpLmFwcGVuZCgnPHNjcmlwdCBzcmM9XCIvbGliL3NhdmUtc3RvcmUuanNcIj48L3NjcmlwdD4nKTtcbiAgbGV0IGJvZHlQaXBlID0gbmV3IFJlYWRhYmxlU3RyZWFtQnVmZmVyKCk7XG4gIGJvZHlQaXBlLnB1dCgkLmh0bWwoKSwgJ3V0ZjgnKTtcbiAgYm9keVBpcGUuZGVzdHJveVNvb24oKTtcbiAgcmV0dXJuIGJvZHlQaXBlO1xufTtcblxucm91dGVyLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcbiAgbGV0IHJlcVVybCA9IHJlcS51cmwuc3Vic3RyKDEpO1xuICBpZiAoIWlzVmFsaWRVcmwocmVxVXJsKSkgbmV4dCgpO1xuICBlbHNlIHtcbiAgICBwcm94eShyZXFVcmwpXG4gICAgICAudGhlbigoYm9keVBpcGUpID0+IHtcbiAgICAgICAgYm9keVBpcGUucGlwZShyZXMpO1xuICAgICAgICBib2R5UGlwZS5vbignY2xvc2UnLCBuZXh0KTtcbiAgICAgIH0pLmNhdGNoKChfZSkgPT4gbmV4dChfZSkpO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19