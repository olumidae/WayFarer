"use strict";

var cov_1n8nrx1ewq = function () {
  var path = "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\models\\userModel.js";
  var hash = "86d2c808d3d650523314fd6e0c7710f7d36823a7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\models\\userModel.js",
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
            column: 15
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
    hash: "86d2c808d3d650523314fd6e0c7710f7d36823a7"
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

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _uuid = _interopRequireDefault(require("uuid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User =
/*#__PURE__*/
function () {
  function User() {
    _classCallCheck(this, User);

    cov_1n8nrx1ewq.f[0]++;
    cov_1n8nrx1ewq.s[0]++;
    this.UserData = [];
  }

  _createClass(User, [{
    key: "signUp",
    value: function signUp(info) {
      cov_1n8nrx1ewq.f[1]++;
      var newUser = (cov_1n8nrx1ewq.s[1]++, {
        id: _uuid["default"].v4(),
        first_name: info.firstName,
        last_name: info.lastName,
        email: info.email,
        password: _bcrypt["default"].hashSync(info.password, 5),
        is_admin: false
      });
      cov_1n8nrx1ewq.s[2]++;
      this.UserData.push(newUser);
      cov_1n8nrx1ewq.s[3]++;
      return newUser;
    }
  }]);

  return User;
}();

var _default = new User();

exports["default"] = _default;
//# sourceMappingURL=userModel.js.map