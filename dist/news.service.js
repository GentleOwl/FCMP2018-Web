(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "core-js/modules/es6.promise", "regenerator-runtime/runtime"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("core-js/modules/es6.promise"), require("regenerator-runtime/runtime"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.es6, global.runtime);
    global.newsService = mod.exports;
  }
})(this, function (_exports, _es, _runtime) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.NewsService = void 0;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var NewsService =
  /*#__PURE__*/
  function () {
    function NewsService(apiKey) {
      _classCallCheck(this, NewsService);

      this.baseUrl = new URL('https://newsapi.org/v2/');
      this.apiKey = apiKey;
    }

    _createClass(NewsService, [{
      key: "getSourcesProm",
      value: function () {
        var _getSourcesProm = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var sourceUrl, response, result;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  sourceUrl = this.getUrl('sources');
                  _context.next = 3;
                  return fetch(sourceUrl);

                case 3:
                  response = _context.sent;
                  _context.next = 6;
                  return response.json();

                case 6:
                  result = _context.sent;
                  this.checkForError(result);
                  return _context.abrupt("return", result.sources);

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function getSourcesProm() {
          return _getSourcesProm.apply(this, arguments);
        };
      }()
    }, {
      key: "getNewsProm",
      value: function () {
        var _getNewsProm = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2(sourceId, pageSize, page) {
          var newsUrl, response, result;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  newsUrl = this.getUrl('everything');
                  newsUrl.searchParams.set('sources', sourceId);
                  newsUrl.searchParams.set('pageSize', pageSize);
                  newsUrl.searchParams.set('page', page);
                  _context2.next = 6;
                  return fetch(newsUrl);

                case 6:
                  response = _context2.sent;
                  _context2.next = 9;
                  return response.json();

                case 9:
                  result = _context2.sent;
                  this.checkForError(result);
                  return _context2.abrupt("return", result.articles);

                case 12:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function getNewsProm(_x, _x2, _x3) {
          return _getNewsProm.apply(this, arguments);
        };
      }()
    }, {
      key: "getUrl",
      value: function getUrl(section) {
        var url = new URL(section, this.baseUrl);
        url.searchParams.set('apiKey', this.apiKey);
        return url;
      }
    }, {
      key: "checkForError",
      value: function checkForError(_ref) {
        var status = _ref.status,
            message = _ref.message;

        if (status === 'error') {
          throw new Error(message || 'Unexpected error');
        }
      }
    }]);

    return NewsService;
  }();

  _exports.NewsService = NewsService;
});