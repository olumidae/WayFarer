"use strict";

var cov_j7nq7rwc5 = function () {
  var path = "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\models\\db\\seeds.js";
  var hash = "7d4f64e400f443c3f9d10d00d16a59ba9baa0f10";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\models\\db\\seeds.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 19
        },
        end: {
          line: 16,
          column: 1
        }
      },
      "1": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 18,
          column: 23
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "7d4f64e400f443c3f9d10d00d16a59ba9baa0f10"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _db = _interopRequireDefault(require("./db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var insertData = (cov_j7nq7rwc5.s[0]++, "\nINSERT INTO users (\n  id, email, first_name, last_name, password, is_admin\n) VALUES\n('1', 'oomitiran@gmail.com', 'Olumide', 'Omitiran', '$2b$10$M7KDGr9g3tKfFWC0RpuXI.mZPlEkZarOSQTmhKIxh4GXVRb2OscrO', 'true'),\n('2', 'msmith@gmail.com', 'Michael', 'Smith', '$2b$10$M7KDGr9g3tKfFWC0RpuXI.mZPlEkZarOSQTmhKIxh4GXVRb2OscrO', 'false'),\n('3', 'janesmith@jsmith.com', 'Jane', 'Smith', '$2b$10$M7KDGr9g3tKfFWC0RpuXI.mZPlEkZarOSQTmhKIxh4GXVRb2OscrO', 'false'),\n('4', 'jchinaman@mail.com', 'John', 'Chinaman', '$2b$10$M7KDGr9g3tKfFWC0RpuXI.mZPlEkZarOSQTmhKIxh4GXVRb2OscrO', 'false');\nINSERT INTO bus (\n  id, number_plate, manufacturer, model, year, capacity\n) VALUES\n('2', 'JB344KJA', 'TOYOTA', 'HIACE', '1999', 18),\n('3', 'AA492IKJ', 'TOYOTA', 'LITACE', '2009', 12);\n");
cov_j7nq7rwc5.s[1]++;

_db["default"].query(insertData);
//# sourceMappingURL=seeds.js.map