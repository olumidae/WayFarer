"use strict";

var cov_1dhu84hbsy = function () {
  var path = "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\helpers\\authenticateUser.js";
  var hash = "4a0f8b90e837cd1c2c21922ec034453c32f39218";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\helpers\\authenticateUser.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 27
        },
        end: {
          line: 9,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 22
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
          column: 40
        }
      },
      "3": {
        start: {
          line: 11,
          column: 16
        },
        end: {
          line: 11,
          column: 44
        }
      },
      "4": {
        start: {
          line: 12,
          column: 24
        },
        end: {
          line: 21,
          column: 1
        }
      },
      "5": {
        start: {
          line: 13,
          column: 23
        },
        end: {
          line: 19,
          column: 3
        }
      },
      "6": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 20,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 27
          },
          end: {
            line: 3,
            column: 28
          }
        },
        loc: {
          start: {
            line: 3,
            column: 37
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
            line: 12,
            column: 24
          },
          end: {
            line: 12,
            column: 25
          }
        },
        loc: {
          start: {
            line: 12,
            column: 34
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 12
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "4a0f8b90e837cd1c2c21922ec034453c32f39218"
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

cov_1dhu84hbsy.s[0]++;

var UserLoginValidator = function UserLoginValidator(user) {
  cov_1dhu84hbsy.f[0]++;
  var loginformat = (cov_1dhu84hbsy.s[1]++, _joi["default"].object().keys({
    email: _joi["default"].string().email().required(),
    password: _joi["default"].string().min(6).required()
  })["with"]('email', 'password'));
  cov_1dhu84hbsy.s[2]++;
  return _joi["default"].validate(user, loginformat);
};

var pattern = (cov_1dhu84hbsy.s[3]++, /^[a-zA-Z0-9!@#$%&*]{3,25}$/);
cov_1dhu84hbsy.s[4]++;

var signupValidator = function signupValidator(user) {
  cov_1dhu84hbsy.f[1]++;
  var signupFormat = (cov_1dhu84hbsy.s[5]++, {
    first_name: _joi["default"].string().min(3).trim().required(),
    last_name: _joi["default"].string().min(3).required(),
    email: _joi["default"].string().email().required(),
    password: _joi["default"].string().regex(pattern).min(4).required(),
    is_admin: _joi["default"]["boolean"]().valid('true', 'false')
  });
  cov_1dhu84hbsy.s[6]++;
  return _joi["default"].validate(user, signupFormat);
};

var _default = {
  signupValidator: signupValidator,
  UserLoginValidator: UserLoginValidator
};
exports["default"] = _default;
//# sourceMappingURL=authenticateUser.js.map