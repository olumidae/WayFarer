"use strict";

var cov_xfg4oyt6k = function () {
  var path = "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\models\\busModel.js";
  var hash = "72f1de6c1f5666045accb0835719e8f783015c7e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\models\\busModel.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 5,
          column: 22
        }
      },
      "1": {
        start: {
          line: 9,
          column: 19
        },
        end: {
          line: 16,
          column: 5
        }
      },
      "2": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 30
        }
      },
      "3": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 18
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 4,
            column: 3
          }
        },
        loc: {
          start: {
            line: 4,
            column: 16
          },
          end: {
            line: 6,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 8,
            column: 3
          }
        },
        loc: {
          start: {
            line: 8,
            column: 18
          },
          end: {
            line: 19,
            column: 3
          }
        },
        line: 8
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
    hash: "72f1de6c1f5666045accb0835719e8f783015c7e"
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bus =
/*#__PURE__*/
function () {
  function Bus() {
    _classCallCheck(this, Bus);

    cov_xfg4oyt6k.f[0]++;
    cov_xfg4oyt6k.s[0]++;
    this.BusData = [];
  }

  _createClass(Bus, [{
    key: "createBus",
    value: function createBus(info) {
      cov_xfg4oyt6k.f[1]++;
      var newBus = (cov_xfg4oyt6k.s[1]++, {
        id: _uuid["default"].v1(),
        number_plate: info.numberPlate,
        manufacturer: info.manufacturer,
        model: info.model,
        year: info.year,
        capacity: parseInt(info.capacity)
      });
      cov_xfg4oyt6k.s[2]++;
      this.BusData.push(newBus);
      cov_xfg4oyt6k.s[3]++;
      return newBus;
    }
  }]);

  return Bus;
}();

var _default = new Bus();

exports["default"] = _default;
//# sourceMappingURL=busModel.js.map