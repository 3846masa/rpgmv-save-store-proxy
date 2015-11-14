'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressRestifyMongoose = require('express-restify-mongoose');

var _expressRestifyMongoose2 = _interopRequireDefault(_expressRestifyMongoose);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect('mongodb://localhost/database');

_mongoose2.default.models = {};
{
  let _modelFunc = _mongoose2.default.model;
  _mongoose2.default.model = function (modelName) {
    let _model = _modelFunc.apply(_mongoose2.default, arguments);
    _mongoose2.default.models[modelName] = _model;
  };
}

_mongoose2.default.model('Model', new _mongoose2.default.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true }
}));

let router = _express2.default.Router();
for (let name in _mongoose2.default.models) {
  _expressRestifyMongoose2.default.serve(router, _mongoose2.default.models[name]);
}

exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yb3V0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxtQkFBUyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQzs7QUFFakQsbUJBQVMsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNyQjtBQUNFLE1BQUksVUFBVSxHQUFHLG1CQUFTLEtBQUssQ0FBQztBQUNoQyxxQkFBUyxLQUFLLEdBQUcsVUFBUyxTQUFTLEVBQUU7QUFDbkMsUUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLEtBQUsscUJBQVcsU0FBUyxDQUFDLENBQUM7QUFDbkQsdUJBQVMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztHQUNyQyxDQUFDO0NBQ0g7O0FBRUQsbUJBQVMsS0FBSyxDQUNaLE9BQU8sRUFDUCxJQUFJLG1CQUFTLE1BQU0sQ0FBQztBQUNsQixNQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7QUFDdEMsS0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0NBQ3RDLENBQUMsQ0FDSCxDQUFDOztBQUVGLElBQUksTUFBTSxHQUFHLGtCQUFRLE1BQU0sRUFBRSxDQUFDO0FBQzlCLEtBQUssSUFBSSxJQUFJLElBQUksbUJBQVMsTUFBTSxFQUFFO0FBQ2hDLG1DQUFRLEtBQUssQ0FBQyxNQUFNLEVBQUUsbUJBQVMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Q0FDOUM7O2tCQUVjLE1BQU0iLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgcmVzdGlmeSBmcm9tICdleHByZXNzLXJlc3RpZnktbW9uZ29vc2UnO1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxubW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYjovL2xvY2FsaG9zdC9kYXRhYmFzZScpO1xuXG5tb25nb29zZS5tb2RlbHMgPSB7fTtcbntcbiAgbGV0IF9tb2RlbEZ1bmMgPSBtb25nb29zZS5tb2RlbDtcbiAgbW9uZ29vc2UubW9kZWwgPSBmdW5jdGlvbihtb2RlbE5hbWUpIHtcbiAgICBsZXQgX21vZGVsID0gX21vZGVsRnVuYy5hcHBseShtb25nb29zZSwgYXJndW1lbnRzKTtcbiAgICBtb25nb29zZS5tb2RlbHNbbW9kZWxOYW1lXSA9IF9tb2RlbDtcbiAgfTtcbn1cblxubW9uZ29vc2UubW9kZWwoXG4gICdNb2RlbCcsXG4gIG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIHVybDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH1cbiAgfSlcbik7XG5cbmxldCByb3V0ZXIgPSBFeHByZXNzLlJvdXRlcigpO1xuZm9yIChsZXQgbmFtZSBpbiBtb25nb29zZS5tb2RlbHMpIHtcbiAgcmVzdGlmeS5zZXJ2ZShyb3V0ZXIsIG1vbmdvb3NlLm1vZGVsc1tuYW1lXSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==