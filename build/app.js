"use strict";

var cov_sfslk0ttp = function () {
  var path = "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\app.js";
  var hash = "893996bd7b1aed6a231385beb79e4d76799aa491";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\app.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 12
        },
        end: {
          line: 11,
          column: 21
        }
      },
      "1": {
        start: {
          line: 12,
          column: 13
        },
        end: {
          line: 12,
          column: 37
        }
      },
      "2": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 13,
          column: 51
        }
      },
      "3": {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 14,
          column: 27
        }
      },
      "4": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 19
        }
      },
      "5": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 18,
          column: 64
        }
      },
      "6": {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 19,
          column: 27
        }
      },
      "7": {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 22,
          column: 65
        }
      }
    },
    fnMap: {},
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 12,
            column: 13
          },
          end: {
            line: 12,
            column: 37
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 12,
            column: 13
          },
          end: {
            line: 12,
            column: 29
          }
        }, {
          start: {
            line: 12,
            column: 33
          },
          end: {
            line: 12,
            column: 37
          }
        }],
        line: 12
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
      "7": 0
    },
    f: {},
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "893996bd7b1aed6a231385beb79e4d76799aa491"
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

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

require("core-js/stable");

require("regenerator-runtime/runtime");

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swagger = _interopRequireDefault(require("./config/swagger"));

var _routes = _interopRequireDefault(require("./routes/routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (cov_sfslk0ttp.s[0]++, (0, _express["default"])());
var PORT = (cov_sfslk0ttp.s[1]++, (cov_sfslk0ttp.b[0][0]++, process.env.port) || (cov_sfslk0ttp.b[0][1]++, 7000));
cov_sfslk0ttp.s[2]++;
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
cov_sfslk0ttp.s[3]++;
app.use(_bodyParser["default"].json());
cov_sfslk0ttp.s[4]++;
app.use((0, _cors["default"])('*')); // use swagger-Ui-express for your app documentation endpoint

cov_sfslk0ttp.s[5]++;
app.use('/docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swagger["default"]));
cov_sfslk0ttp.s[6]++;
app.use('/api/v1', _routes["default"]);
cov_sfslk0ttp.s[7]++;
app.listen(PORT, console.log("Server running at port ".concat(PORT, "!")));
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=app.js.map