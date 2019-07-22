"use strict";

var cov_240s56p7q6 = function () {
  var path = "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\helpers\\authenticateBus.js";
  var hash = "f73df340bf704110e0a93e60c876b56eaf01d10d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\helpers\\authenticateBus.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 21
        },
        end: {
          line: 12,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 20
        },
        end: {
          line: 10,
          column: 3
        }
      },
      "2": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 11,
          column: 37
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 21
          },
          end: {
            line: 3,
            column: 22
          }
        },
        loc: {
          start: {
            line: 3,
            column: 30
          },
          end: {
            line: 12,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "f73df340bf704110e0a93e60c876b56eaf01d10d"
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

cov_240s56p7q6.s[0]++;

var busValidator = function busValidator(bus) {
  cov_240s56p7q6.f[0]++;
  var busFormat = (cov_240s56p7q6.s[1]++, {
    number_plate: _joi["default"].string().required(),
    manufacturer: _joi["default"].string().required(),
    model: _joi["default"].string().required(),
    year: _joi["default"].string().required(),
    capacity: _joi["default"].number().required()
  });
  cov_240s56p7q6.s[2]++;
  return _joi["default"].validate(bus, busFormat);
};

var _default = busValidator;
exports["default"] = _default;
//# sourceMappingURL=authenticateBus.js.map