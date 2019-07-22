"use strict";

var cov_tbg0el8ol = function () {
  var path = "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\models\\db\\db.js";
  var hash = "aa73d35539e208db263e04d4d2fa06e5f53a57fa";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\models\\db\\db.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 4,
          column: 16
        }
      },
      "1": {
        start: {
          line: 6,
          column: 13
        },
        end: {
          line: 8,
          column: 2
        }
      },
      "2": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 20,
          column: 7
        }
      },
      "3": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 19,
          column: 11
        }
      },
      "4": {
        start: {
          line: 15,
          column: 8
        },
        end: {
          line: 15,
          column: 21
        }
      },
      "5": {
        start: {
          line: 18,
          column: 10
        },
        end: {
          line: 18,
          column: 22
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        },
        loc: {
          start: {
            line: 12,
            column: 22
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 12
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 13,
            column: 23
          },
          end: {
            line: 13,
            column: 24
          }
        },
        loc: {
          start: {
            line: 13,
            column: 44
          },
          end: {
            line: 20,
            column: 5
          }
        },
        line: 13
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 14,
            column: 36
          },
          end: {
            line: 14,
            column: 37
          }
        },
        loc: {
          start: {
            line: 14,
            column: 45
          },
          end: {
            line: 16,
            column: 7
          }
        },
        line: 14
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 17,
            column: 15
          },
          end: {
            line: 17,
            column: 16
          }
        },
        loc: {
          start: {
            line: 17,
            column: 24
          },
          end: {
            line: 19,
            column: 9
          }
        },
        line: 17
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
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "aa73d35539e208db263e04d4d2fa06e5f53a57fa"
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

var _pg = require("pg");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cov_tbg0el8ol.s[0]++;

_dotenv["default"].config();

var pool = (cov_tbg0el8ol.s[1]++, new _pg.Pool({
  connectionString: process.env.DATABASE_URL
}));
var _default = {
  query: function query(text, params) {
    cov_tbg0el8ol.f[0]++;
    cov_tbg0el8ol.s[2]++;
    return new Promise(function (resolve, reject) {
      cov_tbg0el8ol.f[1]++;
      cov_tbg0el8ol.s[3]++;
      pool.query(text, params).then(function (res) {
        cov_tbg0el8ol.f[2]++;
        cov_tbg0el8ol.s[4]++;
        resolve(res);
      })["catch"](function (err) {
        cov_tbg0el8ol.f[3]++;
        cov_tbg0el8ol.s[5]++;
        reject(err);
      });
    });
  }
};
exports["default"] = _default;
//# sourceMappingURL=db.js.map