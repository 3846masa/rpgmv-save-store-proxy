'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

app.use(_bodyParser2.default.json({ limit: '10mb' }));
app.use((0, _methodOverride2.default)());

app.use(_passportRouter2.default);
app.use(_mongoRouter2.default);
app.use(_rpgmvSaveStoreProxy2.default);
app.use(_express2.default.static(_path2.default.resolve(_appRootPath.path, 'static')));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`${ err.name }: ${ err.message }`);
});

exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMkJBQVUsT0FBTyxFQUFFLENBQUM7O0FBV3BCLElBQUksR0FBRyxHQUFHLHdCQUFTLENBQUM7O0FBRXBCLEdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQVcsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1QyxHQUFHLENBQUMsR0FBRyxDQUFDLCtCQUFnQixDQUFDLENBQUM7O0FBRTFCLEdBQUcsQ0FBQyxHQUFHLDBCQUFnQixDQUFDO0FBQ3hCLEdBQUcsQ0FBQyxHQUFHLHVCQUFhLENBQUM7QUFDckIsR0FBRyxDQUFDLEdBQUcsK0JBQWtCLENBQUM7QUFDMUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrQkFBUSxNQUFNLENBQUMsZUFBSyxPQUFPLGNBWDFCLElBQUksRUFXc0MsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUUvRCxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxLQUFLO0FBQy9CLFNBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLEtBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRSxHQUFHLENBQUMsSUFBSSxFQUFDLEVBQUUsR0FBRSxHQUFHLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ3JELENBQUMsQ0FBQzs7a0JBRVksR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc291cmNlTWFwIGZyb20gJ3NvdXJjZS1tYXAtc3VwcG9ydCc7XG5zb3VyY2VNYXAuaW5zdGFsbCgpO1xuXG5pbXBvcnQgRXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCBtZXRob2RPdmVycmlkZSBmcm9tICdtZXRob2Qtb3ZlcnJpZGUnO1xuaW1wb3J0IHBhc3Nwb3J0Um91dGVyIGZyb20gJy4vcGFzc3BvcnQtcm91dGVyLmpzJztcbmltcG9ydCBtb25nb1JvdXRlciBmcm9tICcuL21vbmdvLXJvdXRlci5qcyc7XG5pbXBvcnQgcnBnbXZQcm94eVJvdXRlciBmcm9tICcuL3JwZ212LXNhdmUtc3RvcmUtcHJveHkuanMnO1xuaW1wb3J0IHsgcGF0aCBhcyBBUFBfUk9PVF9QQVRIIH0gZnJvbSAnYXBwLXJvb3QtcGF0aCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxubGV0IGFwcCA9IEV4cHJlc3MoKTtcblxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oeyBsaW1pdDogJzEwbWInIH0pKTtcbmFwcC51c2UobWV0aG9kT3ZlcnJpZGUoKSk7XG5cbmFwcC51c2UocGFzc3BvcnRSb3V0ZXIpO1xuYXBwLnVzZShtb25nb1JvdXRlcik7XG5hcHAudXNlKHJwZ212UHJveHlSb3V0ZXIpO1xuYXBwLnVzZShFeHByZXNzLnN0YXRpYyhwYXRoLnJlc29sdmUoQVBQX1JPT1RfUEFUSCwgJ3N0YXRpYycpKSk7XG5cbmFwcC51c2UoKGVyciwgcmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29uc29sZS5lcnJvcihlcnIuc3RhY2spO1xuICByZXMuc3RhdHVzKDUwMCkuc2VuZChgJHtlcnIubmFtZX06ICR7ZXJyLm1lc3NhZ2V9YCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIl19