'use strict';

var _sourceMapSupport = require('source-map-support');

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _passportRouter = require('./passport-router.js');

var _passportRouter2 = _interopRequireDefault(_passportRouter);

var _mongoRouter = require('./mongo-router.js');

var _mongoRouter2 = _interopRequireDefault(_mongoRouter);

var _rpgmvSaveStoreProxy = require('./rpgmv-save-store-proxy.js');

var _rpgmvSaveStoreProxy2 = _interopRequireDefault(_rpgmvSaveStoreProxy);

var _appRootPath = require('app-root-path');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_sourceMapSupport2.default.install();

let app = (0, _express2.default)();

app.set('PORT', process.env.PORT || 3000);

app.use(_bodyParser2.default.json());
app.use((0, _methodOverride2.default)());

app.use(_passportRouter2.default);
app.use(_mongoRouter2.default);
app.use(_rpgmvSaveStoreProxy2.default);
app.use(_express2.default.static(_path2.default.resolve(_appRootPath.path, 'static')));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`${ err.name }: ${ err.message }`);
});
app.listen(app.get('PORT'), '0.0.0.0', () => {
  console.log('Express server listening on port ' + app.get('PORT'));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJCQUFVLE9BQU8sRUFBRSxDQUFDOztBQVdwQixJQUFJLEdBQUcsR0FBRyx3QkFBUyxDQUFDOztBQUVwQixHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQzs7QUFFMUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxQkFBVyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsK0JBQWdCLENBQUMsQ0FBQzs7QUFFMUIsR0FBRyxDQUFDLEdBQUcsMEJBQWdCLENBQUM7QUFDeEIsR0FBRyxDQUFDLEdBQUcsdUJBQWEsQ0FBQztBQUNyQixHQUFHLENBQUMsR0FBRywrQkFBa0IsQ0FBQztBQUMxQixHQUFHLENBQUMsR0FBRyxDQUFDLGtCQUFRLE1BQU0sQ0FBQyxlQUFLLE9BQU8sY0FiMUIsSUFBSSxFQWFzQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRS9ELEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEtBQUs7QUFDL0IsU0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekIsS0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUMsRUFBRSxHQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDckQsQ0FBQyxDQUFDO0FBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNO0FBQzNDLFNBQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0NBQ3BFLENBQUMsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzb3VyY2VNYXAgZnJvbSAnc291cmNlLW1hcC1zdXBwb3J0JztcbnNvdXJjZU1hcC5pbnN0YWxsKCk7XG5cbmltcG9ydCBFeHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0IG1ldGhvZE92ZXJyaWRlIGZyb20gJ21ldGhvZC1vdmVycmlkZSc7XG5pbXBvcnQgcGFzc3BvcnRSb3V0ZXIgZnJvbSAnLi9wYXNzcG9ydC1yb3V0ZXIuanMnO1xuaW1wb3J0IG1vbmdvUm91dGVyIGZyb20gJy4vbW9uZ28tcm91dGVyLmpzJztcbmltcG9ydCBycGdtdlByb3h5Um91dGVyIGZyb20gJy4vcnBnbXYtc2F2ZS1zdG9yZS1wcm94eS5qcyc7XG5pbXBvcnQgeyBwYXRoIGFzIEFQUF9ST09UX1BBVEggfSBmcm9tICdhcHAtcm9vdC1wYXRoJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5sZXQgYXBwID0gRXhwcmVzcygpO1xuXG5hcHAuc2V0KCdQT1JUJywgcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwKTtcblxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAudXNlKG1ldGhvZE92ZXJyaWRlKCkpO1xuXG5hcHAudXNlKHBhc3Nwb3J0Um91dGVyKTtcbmFwcC51c2UobW9uZ29Sb3V0ZXIpO1xuYXBwLnVzZShycGdtdlByb3h5Um91dGVyKTtcbmFwcC51c2UoRXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKEFQUF9ST09UX1BBVEgsICdzdGF0aWMnKSkpO1xuXG5hcHAudXNlKChlcnIsIHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrKTtcbiAgcmVzLnN0YXR1cyg1MDApLnNlbmQoYCR7ZXJyLm5hbWV9OiAke2Vyci5tZXNzYWdlfWApO1xufSk7XG5hcHAubGlzdGVuKGFwcC5nZXQoJ1BPUlQnKSwgJzAuMC4wLjAnLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAnICsgYXBwLmdldCgnUE9SVCcpKTtcbn0pO1xuIl19