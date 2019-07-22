"use strict";

var cov_4kt748hzp = function () {
  var path = "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\config\\swagger.js";
  var hash = "99c7f5b9331af60e3ca16cefc248024e62dc843c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\config\\swagger.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 26
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 14,
          column: 16
        },
        end: {
          line: 19,
          column: 1
        }
      },
      "2": {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 22,
          column: 39
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "99c7f5b9331af60e3ca16cefc248024e62dc843c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Swagger definition
var swaggerDefinition = (cov_4kt748hzp.s[0]++, {
  info: {
    title: 'REST API for WayFarer app',
    // Title of the documentation
    version: '1.0.0',
    // Version of the app
    description: 'This is the REST API for a public bus transportation booking server' // short description of the app

  },
  host: 'localhost:6000',
  // the host or url of the app
  basePath: '/api/v1' // the basepath of your endpoint

}); // options for the swagger docs

var options = (cov_4kt748hzp.s[1]++, {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./docs/**/*.yaml']
}); // initialize swagger-jsdoc

cov_4kt748hzp.s[2]++;
module.exports = (0, _swaggerJsdoc["default"])(options);
//# sourceMappingURL=swagger.js.map