'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _json = require('json5');

var _json2 = _interopRequireDefault(_json);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class JSON5Promise {
  static parse(str) {
    return new Promise((resolve, reject) => {
      try {
        let obj = _json2.default.parse(str);
        resolve(obj);
      } catch (_e) {
        reject(_e);
      }
    });
  }

  static stringify(obj) {
    return new Promise((resolve, reject) => {
      try {
        let json5 = _json2.default.stringify(obj);
        resolve(json5);
      } catch (_e) {
        reject(_e);
      }
    });
  }
}
exports.default = JSON5Promise;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9qc29uNS1wcm9taXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVlLE1BQU0sWUFBWSxDQUFDO0FBQ2hDLFNBQU8sS0FBSyxDQUFDLEdBQUcsRUFBRTtBQUNoQixXQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sS0FBSztBQUN0QyxVQUFJO0FBQ0YsWUFBSSxHQUFHLEdBQUcsZUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0IsZUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO09BQ2QsQ0FBQyxPQUFPLEVBQUUsRUFBRTtBQUNYLGNBQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztPQUNaO0tBQ0YsQ0FBQyxDQUFDO0dBQ0o7O0FBRUQsU0FBTyxTQUFTLENBQUMsR0FBRyxFQUFDO0FBQ25CLFdBQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxLQUFLO0FBQ3RDLFVBQUk7QUFDRixZQUFJLEtBQUssR0FBRyxlQUFNLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQyxlQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7T0FDaEIsQ0FBQyxPQUFPLEVBQUUsRUFBRTtBQUNYLGNBQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztPQUNaO0tBQ0YsQ0FBQyxDQUFDO0dBQ0o7Q0FDRjtrQkF0Qm9CLFlBQVkiLCJmaWxlIjoianNvbjUtcHJvbWlzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKU09ONSBmcm9tICdqc29uNSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpTT041UHJvbWlzZSB7XG4gIHN0YXRpYyBwYXJzZShzdHIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IG9iaiA9IEpTT041LnBhcnNlKHN0cik7XG4gICAgICAgIHJlc29sdmUob2JqKTtcbiAgICAgIH0gY2F0Y2ggKF9lKSB7XG4gICAgICAgIHJlamVjdChfZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgc3RyaW5naWZ5KG9iail7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBqc29uNSA9IEpTT041LnN0cmluZ2lmeShvYmopO1xuICAgICAgICByZXNvbHZlKGpzb241KTtcbiAgICAgIH0gY2F0Y2ggKF9lKSB7XG4gICAgICAgIHJlamVjdChfZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==