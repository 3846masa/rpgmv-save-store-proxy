'use strict';

var _cluster = require('cluster');

var _cluster2 = _interopRequireDefault(_cluster);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _os = require('os');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CPU_NUM = (0, _os.cpus)().length;
const PORT = process.env.PORT || 3000;

if (_cluster2.default.isMaster) {
  for (var i = 0; i < CPU_NUM; i++) {
    _cluster2.default.fork();
  }
} else {
  _app2.default.listen(PORT, '0.0.0.0', () => {});
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUdBLE1BQU0sT0FBTyxHQUFHLFFBRFAsSUFBSSxHQUNTLENBQUMsTUFBTSxDQUFDO0FBQzlCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQzs7QUFFdEMsSUFBSSxrQkFBUSxRQUFRLEVBQUU7QUFDcEIsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNoQyxzQkFBUSxJQUFJLEVBQUUsQ0FBQztHQUNoQjtDQUNGLE1BQU07QUFDTCxnQkFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0NBQ3ZDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsdXN0ZXIgZnJvbSAnY2x1c3Rlcic7XG5pbXBvcnQgYXBwIGZyb20gJy4vYXBwJztcbmltcG9ydCB7IGNwdXMgfSBmcm9tICdvcyc7XG5jb25zdCBDUFVfTlVNID0gY3B1cygpLmxlbmd0aDtcbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XG5cbmlmIChjbHVzdGVyLmlzTWFzdGVyKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgQ1BVX05VTTsgaSsrKSB7XG4gICAgY2x1c3Rlci5mb3JrKCk7XG4gIH1cbn0gZWxzZSB7XG4gIGFwcC5saXN0ZW4oUE9SVCwgJzAuMC4wLjAnLCAoKSA9PiB7fSk7XG59XG4iXX0=