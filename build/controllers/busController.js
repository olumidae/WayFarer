"use strict";

var cov_1sygeylesa = function () {
  var path = "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\controllers\\busController.js";
  var hash = "37a96996bc7322bf7bdaed74ec946ed93c117039";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\controllers\\busController.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 12
        },
        end: {
          line: 34,
          column: 1
        }
      },
      "1": {
        start: {
          line: 9,
          column: 22
        },
        end: {
          line: 9,
          column: 47
        }
      },
      "2": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 10,
          column: 93
        }
      },
      "3": {
        start: {
          line: 10,
          column: 15
        },
        end: {
          line: 10,
          column: 93
        }
      },
      "4": {
        start: {
          line: 12,
          column: 22
        },
        end: {
          line: 13,
          column: 16
        }
      },
      "5": {
        start: {
          line: 15,
          column: 66
        },
        end: {
          line: 15,
          column: 74
        }
      },
      "6": {
        start: {
          line: 16,
          column: 19
        },
        end: {
          line: 16,
          column: 70
        }
      },
      "7": {
        start: {
          line: 17,
          column: 26
        },
        end: {
          line: 17,
          column: 69
        }
      },
      "8": {
        start: {
          line: 18,
          column: 21
        },
        end: {
          line: 18,
          column: 68
        }
      },
      "9": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 112
        }
      },
      "10": {
        start: {
          line: 20,
          column: 25
        },
        end: {
          line: 20,
          column: 112
        }
      },
      "11": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 32,
          column: 5
        }
      },
      "12": {
        start: {
          line: 23,
          column: 35
        },
        end: {
          line: 23,
          column: 70
        }
      },
      "13": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 29,
          column: 9
        }
      },
      "14": {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 31,
          column: 87
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
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
            column: 28
          },
          end: {
            line: 33,
            column: 3
          }
        },
        line: 8
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 10,
            column: 93
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 10,
            column: 93
          }
        }, {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 10,
            column: 93
          }
        }],
        line: 10
      },
      "1": {
        loc: {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 20,
            column: 112
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 20,
            column: 112
          }
        }, {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 20,
            column: 112
          }
        }],
        line: 20
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "37a96996bc7322bf7bdaed74ec946ed93c117039"
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

var _db = _interopRequireDefault(require("../models/db/db"));

var _authenticateBus = _interopRequireDefault(require("../helpers/authenticateBus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Bus = (cov_1sygeylesa.s[0]++, {
  createBus: function () {
    var _createBus = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(req, res) {
      var _ref, error, queryText, _ref2, number_plate, manufacturer, model, year, capacity, values, existingPlate, _ref3, rows, _ref4, rowsInsert;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cov_1sygeylesa.f[0]++;
              _ref = (cov_1sygeylesa.s[1]++, (0, _authenticateBus["default"])(req.body)), error = _ref.error;
              cov_1sygeylesa.s[2]++;

              if (!error) {
                _context.next = 9;
                break;
              }

              cov_1sygeylesa.b[0][0]++;
              cov_1sygeylesa.s[3]++;
              return _context.abrupt("return", res.status(400).json({
                status: 400,
                error: error.details[0].message
              }));

            case 9:
              cov_1sygeylesa.b[0][1]++;

            case 10:
              queryText = (cov_1sygeylesa.s[4]++, "INSERT INTO bus(number_plate, manufacturer, model, year, capacity) VALUES($1, $2, $3, $4, $5)\n    RETURNING *");
              _ref2 = (cov_1sygeylesa.s[5]++, req.body), number_plate = _ref2.number_plate, manufacturer = _ref2.manufacturer, model = _ref2.model, year = _ref2.year, capacity = _ref2.capacity;
              values = (cov_1sygeylesa.s[6]++, [number_plate, manufacturer, model, year, capacity]);
              existingPlate = (cov_1sygeylesa.s[7]++, 'SELECT * FROM bus WHERE number_plate = $1');
              cov_1sygeylesa.s[8]++;
              _context.next = 17;
              return _db["default"].query(existingPlate, [number_plate]);

            case 17:
              _ref3 = _context.sent;
              rows = _ref3.rows;
              cov_1sygeylesa.s[9]++;

              if (!(rows.length > 0)) {
                _context.next = 26;
                break;
              }

              cov_1sygeylesa.b[1][0]++;
              cov_1sygeylesa.s[10]++;
              return _context.abrupt("return", res.status(409).json({
                status: 'error',
                error: 'Number plate already exists'
              }));

            case 26:
              cov_1sygeylesa.b[1][1]++;

            case 27:
              cov_1sygeylesa.s[11]++;
              _context.prev = 28;
              cov_1sygeylesa.s[12]++;
              _context.next = 32;
              return _db["default"].query(queryText, values);

            case 32:
              _ref4 = _context.sent;
              rowsInsert = _ref4.rows;
              cov_1sygeylesa.s[13]++;
              return _context.abrupt("return", res.status(200).json({
                status: 'success',
                data: {
                  rowsInsert: rowsInsert
                }
              }));

            case 38:
              _context.prev = 38;
              _context.t0 = _context["catch"](28);
              cov_1sygeylesa.s[14]++;
              return _context.abrupt("return", res.status(500).json({
                status: 'error',
                error: 'Internal server error'
              }));

            case 42:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[28, 38]]);
    }));

    function createBus(_x, _x2) {
      return _createBus.apply(this, arguments);
    }

    return createBus;
  }()
});
var _default = Bus;
exports["default"] = _default;
//# sourceMappingURL=busController.js.map