"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentMethod = exports.FlowStatus = undefined;

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var axios = require("axios");
var axiosRetry = require("axios-retry");
var CryptoJS = require("crypto-js");

axiosRetry(axios, { retries: 3 });

var FlowApi = function () {
  function FlowApi(_ref) {
    var apiKey = _ref.apiKey,
        secretKey = _ref.secretKey,
        apiURL = _ref.apiURL;
    (0, _classCallCheck3.default)(this, FlowApi);

    this.apiKey = apiKey;
    this.secretKey = secretKey;
    this.apiURL = apiURL;
  }

  (0, _createClass3.default)(FlowApi, [{
    key: "send",
    value: function send(service, params) {
      var _this = this;

      var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "GET";

      return new _promise2.default(function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve, reject) {
          var url, data, sign, response, code, body;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  method = method.toUpperCase();
                  url = _this.apiURL + "/" + service;

                  params = (0, _extends3.default)({
                    apiKey: _this.apiKey
                  }, params);
                  data = _this.getPack(params, method);
                  sign = _this.sign(params);
                  response = void 0;

                  if (!(method == "GET")) {
                    _context.next = 12;
                    break;
                  }

                  _context.next = 9;
                  return _this.httpGet(url, data, sign);

                case 9:
                  response = _context.sent;
                  _context.next = 15;
                  break;

                case 12:
                  _context.next = 14;
                  return _this.httpPost(url, data, sign);

                case 14:
                  response = _context.sent;

                case 15:

                  if (!!response["info"]) {
                    code = response.info.http_code;
                    body = response.output;

                    if (code === 200) {
                      resolve(body);
                    } else if ([400, 401].includes(code)) {
                      reject(Error(body.message));
                    } else {
                      reject(Error("Unexpected error occurred. HTTP_CODE: " + code));
                    }
                  } else {
                    reject(Error("Unexpected error occurred."));
                  }

                case 16:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }));

        return function (_x2, _x3) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "getPack",
    value: function getPack(params, method) {
      var keys = (0, _keys2.default)(params).map(function (key) {
        return key;
      }).sort(function (a, b) {
        if (a > b) return 1;else if (a < b) return -1;
        return 0;
      });
      var data = [];
      keys.map(function (key) {
        if (method == "GET") {
          data.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
        } else {
          data.push(key + "=" + params[key]);
        }
      });
      return data.join("&");
    }
  }, {
    key: "sign",
    value: function sign(params) {
      var keys = (0, _keys2.default)(params).map(function (key) {
        return key;
      }).sort(function (a, b) {
        if (a > b) return 1;else if (a < b) return -1;
        return 0;
      });
      var toSign = [];
      keys.map(function (key) {
        toSign.push(key + "=" + params[key]);
      });
      toSign = toSign.join("&");

      return CryptoJS.HmacSHA256(toSign, this.secretKey);
    }
  }, {
    key: "httpGet",
    value: function httpGet(url, data, sign) {
      url = url + "?" + data + "&s=" + sign;

      return axios.get(url).then(function (response) {
        return {
          output: response.data,
          info: {
            http_code: response.status
          }
        };
      }).catch(function (error) {
        return {
          output: error.response.data,
          info: {
            http_code: error.response.status
          }
        };
      });
    }
  }, {
    key: "httpPost",
    value: function httpPost(url, data, sign) {
      return axios.post(url, data + "&s=" + sign).then(function (response) {
        return {
          output: response.data,
          info: {
            http_code: response.status
          }
        };
      }).catch(function (error) {
        return {
          output: error.response.data,
          info: {
            http_code: error.response.status
          }
        };
      });
    }
  }]);
  return FlowApi;
}();

exports.default = FlowApi;
var FlowStatus = exports.FlowStatus = {
  PENDING_PAYMENT: 1,
  PAIED: 2,
  REJECTED: 3,
  CANCELED: 4
};
var PaymentMethod = exports.PaymentMethod = {
  WEBPAY: 1,
  SERVIPAG: 2,
  MULTICAJA: 3,
  ONEPAY: 4,
  CRYPOMONEDA: 5,
  TODOS_LOS_MEDIOS: 9
};
//# sourceMappingURL=index.js.map