"use strict";

var cov_pt1qfo4jy = function () {
  var path = "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\models\\tripModel.js";
  var hash = "d9b3ca089f2bb511ec6d870dbbd04dc2f14547f6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\models\\tripModel.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 23
        }
      },
      "1": {
        start: {
          line: 10,
          column: 20
        },
        end: {
          line: 17,
          column: 5
        }
      },
      "2": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 32
        }
      },
      "3": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 5,
            column: 3
          }
        },
        loc: {
          start: {
            line: 5,
            column: 16
          },
          end: {
            line: 7,
            column: 3
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 2
          },
          end: {
            line: 9,
            column: 3
          }
        },
        loc: {
          start: {
            line: 9,
            column: 19
          },
          end: {
            line: 20,
            column: 3
          }
        },
        line: 9
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "d9b3ca089f2bb511ec6d870dbbd04dc2f14547f6"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uuid = _interopRequireDefault(require("uuid"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Trip =
/*#__PURE__*/
function () {
  function Trip() {
    _classCallCheck(this, Trip);

    cov_pt1qfo4jy.f[0]++;
    cov_pt1qfo4jy.s[0]++;
    this.tripData = [];
  }

  _createClass(Trip, [{
    key: "createTrip",
    value: function createTrip(info) {
      cov_pt1qfo4jy.f[1]++;
      var newTrip = (cov_pt1qfo4jy.s[1]++, {
        id: _uuid["default"].v1(),
        origin: info.origin,
        destination: info.destination,
        trip_date: (0, _moment["default"])().format('LLL'),
        fare: parseFloat(info.fare),
        status: 'active'
      });
      cov_pt1qfo4jy.s[2]++;
      this.tripData.push(newTrip);
      cov_pt1qfo4jy.s[3]++;
      return newTrip;
    }
  }]);

  return Trip;
}();

var _default = new Trip();

exports["default"] = _default;
//# sourceMappingURL=tripModel.js.map