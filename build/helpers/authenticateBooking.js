"use strict";

var cov_1jw6in0zqf = function () {
  var path = "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\helpers\\authenticateBooking.js";
  var hash = "541f4746d5211ae8ed32d0e5e62149377806664a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\helpers\\authenticateBooking.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 25
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 24
        },
        end: {
          line: 9,
          column: 3
        }
      },
      "2": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 42
        }
      },
      "3": {
        start: {
          line: 13,
          column: 23
        },
        end: {
          line: 18,
          column: 1
        }
      },
      "4": {
        start: {
          line: 14,
          column: 19
        },
        end: {
          line: 16,
          column: 3
        }
      },
      "5": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 17,
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
            column: 25
          },
          end: {
            line: 3,
            column: 26
          }
        },
        loc: {
          start: {
            line: 3,
            column: 35
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 3
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
            column: 33
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 13
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
    hash: "541f4746d5211ae8ed32d0e5e62149377806664a"
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

cov_1jw6in0zqf.s[0]++;

var bookingValidator = function bookingValidator(book) {
  cov_1jw6in0zqf.f[0]++;
  var bookingFormat = (cov_1jw6in0zqf.s[1]++, {
    trip_id: _joi["default"].string().trim().required(),
    user_id: _joi["default"].string(),
    seat_number: _joi["default"].number().required(),
    createdOn: _joi["default"].date()
  });
  cov_1jw6in0zqf.s[2]++;
  return _joi["default"].validate(book, bookingFormat);
};

cov_1jw6in0zqf.s[3]++;

var editBookedSeat = function editBookedSeat(book) {
  cov_1jw6in0zqf.f[1]++;
  var seatEdit = (cov_1jw6in0zqf.s[4]++, {
    seat_number: _joi["default"].number().required()
  });
  cov_1jw6in0zqf.s[5]++;
  return _joi["default"].validate(book, seatEdit);
};

var _default = {
  bookingValidator: bookingValidator,
  editBookedSeat: editBookedSeat
};
exports["default"] = _default;
//# sourceMappingURL=authenticateBooking.js.map