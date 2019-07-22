"use strict";

var cov_2jd578o6tp = function () {
  var path = "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\routes\\routes.js";
  var hash = "0bc5ec112d87733a12c59871549e482061b8f7be";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\routes\\routes.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 15
        },
        end: {
          line: 9,
          column: 31
        }
      },
      "1": {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 11,
          column: 64
        }
      },
      "2": {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 12,
          column: 60
        }
      },
      "3": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 13,
          column: 70
        }
      },
      "4": {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 14,
          column: 88
        }
      },
      "5": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 69
        }
      },
      "6": {
        start: {
          line: 16,
          column: 0
        },
        end: {
          line: 16,
          column: 91
        }
      },
      "7": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 17,
          column: 72
        }
      },
      "8": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 18,
          column: 88
        }
      },
      "9": {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 19,
          column: 83
        }
      },
      "10": {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 20,
          column: 109
        }
      }
    },
    fnMap: {},
    branchMap: {},
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
      "10": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "0bc5ec112d87733a12c59871549e482061b8f7be"
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

var _userController = _interopRequireDefault(require("../controllers/userController"));

var _auth = require("../middlewares/auth");

var _busController = _interopRequireDefault(require("../controllers/busController"));

var _tripController = _interopRequireDefault(require("../controllers/tripController"));

var _bookController = _interopRequireDefault(require("../controllers/bookController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (cov_2jd578o6tp.s[0]++, _express["default"].Router());
cov_2jd578o6tp.s[1]++;
router.post('/auth/signup', _auth.registerValidator, _userController["default"].signUpUser);
cov_2jd578o6tp.s[2]++;
router.post('/auth/signin', _auth.loginValidator, _userController["default"].logInUser);
cov_2jd578o6tp.s[3]++;
router.post('/bus', _auth.tokenValidator.validateAdminToken, _busController["default"].createBus);
cov_2jd578o6tp.s[4]++;
router.post('/trips', _auth.tokenValidator.validateAdminToken, _auth.validateTrip, _tripController["default"].createTrip);
cov_2jd578o6tp.s[5]++;
router.get('/trips', _auth.tokenValidator.validateToken, _tripController["default"].getAllTrips);
cov_2jd578o6tp.s[6]++;
router.post('/bookings', _auth.tokenValidator.validateToken, _auth.booktripValidate, _bookController["default"].makeBooking);
cov_2jd578o6tp.s[7]++;
router.get('/bookings', _auth.tokenValidator.validateToken, _bookController["default"].getbookings);
cov_2jd578o6tp.s[8]++;
router["delete"]('/bookings/:bookingId', _auth.tokenValidator.validateToken, _bookController["default"].deleteBooking);
cov_2jd578o6tp.s[9]++;
router.patch('/trips/:tripId', _auth.tokenValidator.validateAdminToken, _tripController["default"].cancelTrip);
cov_2jd578o6tp.s[10]++;
router.patch('/bookings/:bookingId', _auth.tokenValidator.validateToken, _auth.editBookedSeatValidate, _bookController["default"].changeSeats);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=routes.js.map