"use strict";

var cov_1a59kixgmt = function () {
  var path = "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\models\\db\\migration.js";
  var hash = "f13f1acd673772a1de42e4cf02bf1df8c9f0466c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\TENIOLA\\Documents\\Projects\\WayFarer\\server\\models\\db\\migration.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 21
        },
        end: {
          line: 39,
          column: 5
        }
      },
      "1": {
        start: {
          line: 42,
          column: 0
        },
        end: {
          line: 42,
          column: 25
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
    hash: "f13f1acd673772a1de42e4cf02bf1df8c9f0466c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _db = _interopRequireDefault(require("./db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createTables = (cov_1a59kixgmt.s[0]++, "DROP TABLE IF EXISTS users CASCADE;\n  CREATE TABLE users(\n    id SERIAL PRIMARY KEY NOT NULL,\n    email VARCHAR(128) UNIQUE NOT NULL,\n    first_name VARCHAR(128),\n    last_name VARCHAR(128),\n    password VARCHAR NOT NULL,\n    is_admin BOOLEAN NOT NULL DEFAULT false,\n    is_loggedin BOOLEAN NOT NULL DEFAULT false\n  );\n  DROP TABLE IF EXISTS bus CASCADE;\n  CREATE TABLE bus(\n    id SERIAL PRIMARY KEY NOT NULL,\n    number_plate VARCHAR(15) UNIQUE NOT NULL,\n    manufacturer VARCHAR(100) NOT NULL,\n    model VARCHAR(100) NOT NULL,\n    year VARCHAR(6) NOT NULL,\n    capacity SMALLINT NOT NULL\n  );\n  DROP TABLE IF EXISTS trip CASCADE;\n  CREATE TABLE trip(\n    id SERIAL PRIMARY KEY NOT NULL,\n    bus_id SERIAL NOT NULL REFERENCES bus (id),\n    origin VARCHAR(100) NOT NULL,\n    destination VARCHAR(100) NOT NULL,\n    trip_date DATE NOT NULL,\n    fare NUMERIC(10, 2) NOT NULL,\n    status VARCHAR(10) NOT NULL DEFAULT 'active'\n  );\n  DROP TABLE IF EXISTS booking CASCADE;\n  CREATE TABLE booking(\n    id SERIAL PRIMARY KEY NOT NULL,\n    trip_id SERIAL NOT NULL  REFERENCES trip (id),\n    user_id SERIAL NOT NULL  REFERENCES users (id),\n    seat_number SMALLINT NOT NULL,\n    created_on DATE NOT NULL DEFAULT CURRENT_DATE\n  );");
cov_1a59kixgmt.s[1]++;

_db["default"].query(createTables);
//# sourceMappingURL=migration.js.map