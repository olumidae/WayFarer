"use strict";

var cov_19tolzcxky = function () {
  var path = "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\helpers\\authenticateTrip.js";
  var hash = "ca42fe2aaa96d64550b5d31d4060b2337ab0acd1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\helpers\\authenticateTrip.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 19
        },
        end: {
          line: 9,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 27
        },
        end: {
          line: 7,
          column: 30
        }
      },
      "2": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 45
        }
      },
      "3": {
        start: {
          line: 11,
          column: 22
        },
        end: {
          line: 21,
          column: 1
        }
      },
      "4": {
        start: {
          line: 12,
          column: 21
        },
        end: {
          line: 19,
          column: 3
        }
      },
      "5": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 20,
          column: 39
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 19
          },
          end: {
            line: 3,
            column: 20
          }
        },
        loc: {
          start: {
            line: 3,
            column: 29
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 11,
            column: 22
          },
          end: {
            line: 11,
            column: 23
          }
        },
        loc: {
          start: {
            line: 11,
            column: 32
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 11
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "ca42fe2aaa96d64550b5d31d4060b2337ab0acd1"
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

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cov_19tolzcxky.s[0]++;

var tripGetter = function tripGetter(trip) {
  cov_19tolzcxky.f[0]++;
  var tripGetterFormat = (cov_19tolzcxky.s[1]++, _joi["default"].object().keys({
    user_id: _joi["default"].string(),
    is_admin: _joi["default"]["boolean"]().valid('true', 'false')
  })["with"]('email', 'password'));
  cov_19tolzcxky.s[2]++;
  return _joi["default"].validate(trip, tripGetterFormat);
};

cov_19tolzcxky.s[3]++;

var tripValidator = function tripValidator(trip) {
  cov_19tolzcxky.f[1]++;
  var tripFormat = (cov_19tolzcxky.s[4]++, {
    bus_id: _joi["default"].string().required(),
    origin: _joi["default"].string().required(),
    destination: _joi["default"].string().required(),
    trip_date: _joi["default"].date().required(),
    fare: _joi["default"].number().required(),
    status: _joi["default"].string().valid('active', 'cancelled')
  });
  cov_19tolzcxky.s[5]++;
  return _joi["default"].validate(trip, tripFormat);
};

var _default = {
  tripValidator: tripValidator,
  tripGetter: tripGetter
};
exports["default"] = _default;
//# sourceMappingURL=authenticateTrip.js.map