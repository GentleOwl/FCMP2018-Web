(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/config.json":
/*!*************************!*\
  !*** ./src/config.json ***!
  \*************************/
/*! exports provided: apiKey, default */
/***/ (function(module) {

module.exports = {"apiKey":"05262e686cf847ba8e38d00b2db13e68"};

/***/ }),

/***/ "./src/news.component/news.component.js":
/*!**********************************************!*\
  !*** ./src/news.component/news.component.js ***!
  \**********************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../config.json */ "./src/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../config.json */ "./src/config.json", 1);
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/news.service */ "./src/news.component/services/news.service.js");







function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var NewsComponent =
/*#__PURE__*/
function () {
  function NewsComponent() {
    _classCallCheck(this, NewsComponent);

    this.newsService = new _services_news_service__WEBPACK_IMPORTED_MODULE_7__["NewsService"](_config_json__WEBPACK_IMPORTED_MODULE_6__.apiKey);
  }

  _createClass(NewsComponent, [{
    key: "init",
    value: function init() {
      this.initElements();
      this.registerEventListeners();
      this.loadSourcesAsync();
    }
  }, {
    key: "initElements",
    value: function initElements() {
      this.sourcesSelectEl = document.getElementById('sources');
      this.loadNewsBtnEl = document.getElementById('load-news-btn');
      this.pageSizeInputEl = document.getElementById('page-size');
      this.pageInputEl = document.getElementById('page');
      this.newsEl = document.getElementById('news');
      this.newsFormEl = document.getElementById('news-form');
      this.loadNextPageBtnEl = document.getElementById('load-next-page-btn');
    }
  }, {
    key: "registerEventListeners",
    value: function registerEventListeners() {
      var _this = this;

      this.newsFormEl.addEventListener('submit', function (e) {
        e.preventDefault();

        _this.loadNewsAsync(_this.selectedSourceId, _this.pageSize, _this.page);
      });
      this.loadNextPageBtnEl.addEventListener('click', function (e) {
        _this.loadNextNews(_this.selectedSourceId, _this.pageSize, _this.page);
      });
    }
  }, {
    key: "loadSourcesAsync",
    value: function () {
      var _loadSourcesAsync = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var sources;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.lockForm();
                _context.next = 4;
                return this.newsService.getSourcesAsync();

              case 4:
                sources = _context.sent;
                this.updateSources(sources);
                this.unlockForm();
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                alert("".concat(_context.t0, "\nTry to reload page."));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      return function loadSourcesAsync() {
        return _loadSourcesAsync.apply(this, arguments);
      };
    }()
  }, {
    key: "updateSources",
    value: function updateSources(sources) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = sources[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var source = _step.value;
          var opt = document.createElement('option');
          opt.value = source.id;
          opt.innerHTML = source.name;
          this.sourcesSelectEl.appendChild(opt);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "loadNewsAsync",
    value: function () {
      var _loadNewsAsync = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(selectedSourceId, pageSize, page) {
        var news;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.lockForm();
                _context2.next = 4;
                return this.newsService.getNewsAsync(selectedSourceId, pageSize, page);

              case 4:
                news = _context2.sent;
                this.updateNews(news);
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                alert("".concat(_context2.t0, "\nTry again."));

              case 11:
                _context2.prev = 11;
                this.unlockForm();
                return _context2.finish(11);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8, 11, 14]]);
      }));

      return function loadNewsAsync(_x, _x2, _x3) {
        return _loadNewsAsync.apply(this, arguments);
      };
    }()
  }, {
    key: "loadNextNews",
    value: function loadNextNews(selectedSourceId, pageSize, page) {
      var _this2 = this;

      var nextPage = page + 1;
      this.loadNewsAsync(selectedSourceId, pageSize, nextPage).then(function () {
        _this2.page = nextPage;
        window.scrollTo(0, 0);
      });
    }
  }, {
    key: "updateNews",
    value: function updateNews(news) {
      this.newsEl.innerHTML = '';
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = news[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var n = _step2.value;
          var li = document.createElement('li');
          li.classList.add('list-group-item');
          li.innerHTML = n.content;
          this.newsEl.appendChild(li);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "lockForm",
    value: function lockForm() {
      this.toggleLoadNewsBtn(false);
      this.toggleLoadNextPageBtn(false);
    }
  }, {
    key: "unlockForm",
    value: function unlockForm() {
      this.toggleLoadNewsBtn(true);
      this.toggleLoadNextPageBtn(true);
    }
  }, {
    key: "toggleLoadNewsBtn",
    value: function toggleLoadNewsBtn(value) {
      this.loadNewsBtnEl.disabled = !value;
    }
  }, {
    key: "toggleLoadNextPageBtn",
    value: function toggleLoadNextPageBtn(value) {
      this.loadNextPageBtnEl.disabled = !value;
    }
  }, {
    key: "selectedSourceId",
    get: function get() {
      return this.sourcesSelectEl.options[this.sourcesSelectEl.selectedIndex].value;
    }
  }, {
    key: "pageSize",
    get: function get() {
      return +this.pageSizeInputEl.value;
    }
  }, {
    key: "page",
    get: function get() {
      return +this.pageInputEl.value;
    },
    set: function set(value) {
      this.pageInputEl.value = value;
    }
  }]);

  return NewsComponent;
}();

/***/ }),

/***/ "./src/news.component/services/news.service.js":
/*!*****************************************************!*\
  !*** ./src/news.component/services/news.service.js ***!
  \*****************************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);



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
    key: "getSourcesAsync",
    value: function () {
      var _getSourcesAsync = _asyncToGenerator(
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

      return function getSourcesAsync() {
        return _getSourcesAsync.apply(this, arguments);
      };
    }()
  }, {
    key: "getNewsAsync",
    value: function () {
      var _getNewsAsync = _asyncToGenerator(
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

      return function getNewsAsync(_x, _x2, _x3) {
        return _getNewsAsync.apply(this, arguments);
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbmV3cy5jb21wb25lbnQvbmV3cy5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ld3MuY29tcG9uZW50L3NlcnZpY2VzL25ld3Muc2VydmljZS5qcyJdLCJuYW1lcyI6WyJOZXdzQ29tcG9uZW50IiwibmV3c1NlcnZpY2UiLCJOZXdzU2VydmljZSIsImNvbmZpZyIsImFwaUtleSIsImluaXRFbGVtZW50cyIsInJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMiLCJsb2FkU291cmNlc0FzeW5jIiwic291cmNlc1NlbGVjdEVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImxvYWROZXdzQnRuRWwiLCJwYWdlU2l6ZUlucHV0RWwiLCJwYWdlSW5wdXRFbCIsIm5ld3NFbCIsIm5ld3NGb3JtRWwiLCJsb2FkTmV4dFBhZ2VCdG5FbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJsb2FkTmV3c0FzeW5jIiwic2VsZWN0ZWRTb3VyY2VJZCIsInBhZ2VTaXplIiwicGFnZSIsImxvYWROZXh0TmV3cyIsImxvY2tGb3JtIiwiZ2V0U291cmNlc0FzeW5jIiwic291cmNlcyIsInVwZGF0ZVNvdXJjZXMiLCJ1bmxvY2tGb3JtIiwiYWxlcnQiLCJzb3VyY2UiLCJvcHQiLCJjcmVhdGVFbGVtZW50IiwidmFsdWUiLCJpZCIsImlubmVySFRNTCIsIm5hbWUiLCJhcHBlbmRDaGlsZCIsImdldE5ld3NBc3luYyIsIm5ld3MiLCJ1cGRhdGVOZXdzIiwibmV4dFBhZ2UiLCJ0aGVuIiwid2luZG93Iiwic2Nyb2xsVG8iLCJuIiwibGkiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250ZW50IiwidG9nZ2xlTG9hZE5ld3NCdG4iLCJ0b2dnbGVMb2FkTmV4dFBhZ2VCdG4iLCJkaXNhYmxlZCIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwiYmFzZVVybCIsIlVSTCIsInNvdXJjZVVybCIsImdldFVybCIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwiY2hlY2tGb3JFcnJvciIsInNvdXJjZUlkIiwibmV3c1VybCIsInNlYXJjaFBhcmFtcyIsInNldCIsImFydGljbGVzIiwic2VjdGlvbiIsInVybCIsInN0YXR1cyIsIm1lc3NhZ2UiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxhQUFiO0FBQUE7QUFBQTtBQUNJLDJCQUFjO0FBQUE7O0FBQ1YsU0FBS0MsV0FBTCxHQUFtQixJQUFJQyxrRUFBSixDQUFnQkMseUNBQU0sQ0FBQ0MsTUFBdkIsQ0FBbkI7QUFDSDs7QUFITDtBQUFBO0FBQUEsMkJBcUJXO0FBQ0gsV0FBS0MsWUFBTDtBQUNBLFdBQUtDLHNCQUFMO0FBRUEsV0FBS0MsZ0JBQUw7QUFDSDtBQTFCTDtBQUFBO0FBQUEsbUNBNEJtQjtBQUNYLFdBQUtDLGVBQUwsR0FBdUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixDQUF2QjtBQUNBLFdBQUtDLGFBQUwsR0FBcUJGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixDQUFyQjtBQUNBLFdBQUtFLGVBQUwsR0FBdUJILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUF2QjtBQUNBLFdBQUtHLFdBQUwsR0FBbUJKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFuQjtBQUNBLFdBQUtJLE1BQUwsR0FBY0wsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQWQ7QUFDQSxXQUFLSyxVQUFMLEdBQWtCTixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBbEI7QUFDQSxXQUFLTSxpQkFBTCxHQUF5QlAsUUFBUSxDQUFDQyxjQUFULENBQXdCLG9CQUF4QixDQUF6QjtBQUNIO0FBcENMO0FBQUE7QUFBQSw2Q0FzQzZCO0FBQUE7O0FBQ3JCLFdBQUtLLFVBQUwsQ0FBZ0JFLGdCQUFoQixDQUFp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QixFQUFxQzlDLFFBQXJDO0FBQ0E0Qyx1QkFBTyxDQUFDQyxZQUFSLENBQXFCQyxHQUFyQixDQUF5QixNQUF6QixFQUFpQzdDLElBQWpDO0FBdEJSO0FBQUEsdUJBd0IrQnFDLEtBQUssQ0FBQ00sT0FBRCxDQXhCcEM7O0FBQUE7QUF3QmNMLHdCQXhCZDtBQUFBO0FBQUEsdUJBeUI2QkEsUUFBUSxDQUFDQyxJQUFULEVBekI3Qjs7QUFBQTtBQXlCY0Msc0JBekJkO0FBMkJRLHFCQUFLQyxhQUFMLENBQW1CRCxNQUFuQjtBQTNCUixrREE2QmVBLE1BQU0sQ0FBQ00sUUE3QnRCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQWdDV0MsT0FoQ1gsRUFnQ29CO0FBQ1osVUFBTUMsR0FBRyxHQUFHLElBQUlkLEdBQUosQ0FBUWEsT0FBUixFQUFpQixLQUFLZCxPQUF0QixDQUFaO0FBQ0FlLFNBQUcsQ0FBQ0osWUFBSixDQUFpQkMsR0FBakIsQ0FBcUIsUUFBckIsRUFBK0IsS0FBS2hFLE1BQXBDO0FBQ0EsYUFBT21FLEdBQVA7QUFDSDtBQXBDTDtBQUFBO0FBQUEsd0NBc0N1QztBQUFBLFVBQW5CQyxNQUFtQixRQUFuQkEsTUFBbUI7QUFBQSxVQUFYQyxPQUFXLFFBQVhBLE9BQVc7O0FBQy9CLFVBQUlELE1BQU0sS0FBSyxPQUFmLEVBQXdCO0FBQ3BCLGNBQU0sSUFBSUUsS0FBSixDQUFVRCxPQUFPLElBQUksa0JBQXJCLENBQU47QUFDSDtBQUNKO0FBMUNMOztBQUFBO0FBQUEsSSIsImZpbGUiOiIxLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLi8uLi9jb25maWcuanNvbic7XHJcbmltcG9ydCB7IE5ld3NTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9uZXdzLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld3NDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5uZXdzU2VydmljZSA9IG5ldyBOZXdzU2VydmljZShjb25maWcuYXBpS2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2VsZWN0ZWRTb3VyY2VJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VzU2VsZWN0RWwub3B0aW9uc1t0aGlzLnNvdXJjZXNTZWxlY3RFbC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcGFnZVNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuICt0aGlzLnBhZ2VTaXplSW5wdXRFbC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcGFnZSgpIHtcclxuICAgICAgICByZXR1cm4gK3RoaXMucGFnZUlucHV0RWwudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHBhZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnBhZ2VJbnB1dEVsLnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmluaXRFbGVtZW50cygpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRTb3VyY2VzQXN5bmMoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0RWxlbWVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VzU2VsZWN0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc291cmNlcycpO1xyXG4gICAgICAgIHRoaXMubG9hZE5ld3NCdG5FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkLW5ld3MtYnRuJyk7XHJcbiAgICAgICAgdGhpcy5wYWdlU2l6ZUlucHV0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1zaXplJyk7XHJcbiAgICAgICAgdGhpcy5wYWdlSW5wdXRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlJyk7XHJcbiAgICAgICAgdGhpcy5uZXdzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3cycpO1xyXG4gICAgICAgIHRoaXMubmV3c0Zvcm1FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdzLWZvcm0nKTtcclxuICAgICAgICB0aGlzLmxvYWROZXh0UGFnZUJ0bkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWQtbmV4dC1wYWdlLWJ0bicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5uZXdzRm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZE5ld3NBc3luYyh0aGlzLnNlbGVjdGVkU291cmNlSWQsIHRoaXMucGFnZVNpemUsIHRoaXMucGFnZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZE5leHRQYWdlQnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkTmV4dE5ld3ModGhpcy5zZWxlY3RlZFNvdXJjZUlkLCB0aGlzLnBhZ2VTaXplLCB0aGlzLnBhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGxvYWRTb3VyY2VzQXN5bmMoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5sb2NrRm9ybSgpO1xyXG4gICAgICAgICAgICBjb25zdCBzb3VyY2VzID0gYXdhaXQgdGhpcy5uZXdzU2VydmljZS5nZXRTb3VyY2VzQXN5bmMoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU291cmNlcyhzb3VyY2VzKTtcclxuICAgICAgICAgICAgdGhpcy51bmxvY2tGb3JtKCk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGAke2V9XFxuVHJ5IHRvIHJlbG9hZCBwYWdlLmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTb3VyY2VzKHNvdXJjZXMpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHNvdXJjZSBvZiBzb3VyY2VzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG5cclxuICAgICAgICAgICAgb3B0LnZhbHVlID0gc291cmNlLmlkO1xyXG4gICAgICAgICAgICBvcHQuaW5uZXJIVE1MID0gc291cmNlLm5hbWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZXNTZWxlY3RFbC5hcHBlbmRDaGlsZChvcHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBsb2FkTmV3c0FzeW5jKHNlbGVjdGVkU291cmNlSWQsIHBhZ2VTaXplLCBwYWdlKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5sb2NrRm9ybSgpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdzID0gYXdhaXQgdGhpcy5uZXdzU2VydmljZS5nZXROZXdzQXN5bmMoc2VsZWN0ZWRTb3VyY2VJZCwgcGFnZVNpemUsIHBhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU5ld3MobmV3cyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBhbGVydChgJHtlfVxcblRyeSBhZ2Fpbi5gKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0aGlzLnVubG9ja0Zvcm0oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE5leHROZXdzKHNlbGVjdGVkU291cmNlSWQsIHBhZ2VTaXplLCBwYWdlKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dFBhZ2UgPSBwYWdlICsgMTtcclxuICAgICAgICB0aGlzLmxvYWROZXdzQXN5bmMoc2VsZWN0ZWRTb3VyY2VJZCwgcGFnZVNpemUsIG5leHRQYWdlKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSBuZXh0UGFnZTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTmV3cyhuZXdzKSB7XHJcbiAgICAgICAgdGhpcy5uZXdzRWwuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgbiBvZiBuZXdzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHJcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2xpc3QtZ3JvdXAtaXRlbScpO1xyXG4gICAgICAgICAgICBsaS5pbm5lckhUTUwgPSBuLmNvbnRlbnQ7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5ld3NFbC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvY2tGb3JtKCkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlTG9hZE5ld3NCdG4oZmFsc2UpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlTG9hZE5leHRQYWdlQnRuKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICB1bmxvY2tGb3JtKCkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlTG9hZE5ld3NCdG4odHJ1ZSk7XHJcbiAgICAgICAgdGhpcy50b2dnbGVMb2FkTmV4dFBhZ2VCdG4odHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTG9hZE5ld3NCdG4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLmxvYWROZXdzQnRuRWwuZGlzYWJsZWQgPSAhdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTG9hZE5leHRQYWdlQnRuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkTmV4dFBhZ2VCdG5FbC5kaXNhYmxlZCA9ICF2YWx1ZTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBOZXdzU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcGlLZXkpIHtcclxuICAgICAgICB0aGlzLmJhc2VVcmwgPSBuZXcgVVJMKCdodHRwczovL25ld3NhcGkub3JnL3YyLycpO1xyXG4gICAgICAgIHRoaXMuYXBpS2V5ID0gYXBpS2V5O1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldFNvdXJjZXNBc3luYygpIHtcclxuICAgICAgICBjb25zdCBzb3VyY2VVcmwgPSB0aGlzLmdldFVybCgnc291cmNlcycpO1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHNvdXJjZVVybCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICB0aGlzLmNoZWNrRm9yRXJyb3IocmVzdWx0KTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gcmVzdWx0LnNvdXJjZXM7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0TmV3c0FzeW5jKHNvdXJjZUlkLCBwYWdlU2l6ZSwgcGFnZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld3NVcmwgPSB0aGlzLmdldFVybCgnZXZlcnl0aGluZycpO1xyXG5cclxuICAgICAgICBuZXdzVXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3NvdXJjZXMnLCBzb3VyY2VJZCk7XHJcbiAgICAgICAgbmV3c1VybC5zZWFyY2hQYXJhbXMuc2V0KCdwYWdlU2l6ZScsIHBhZ2VTaXplKTtcclxuICAgICAgICBuZXdzVXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3BhZ2UnLCBwYWdlKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChuZXdzVXJsKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tGb3JFcnJvcihyZXN1bHQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXN1bHQuYXJ0aWNsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXJsKHNlY3Rpb24pIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHNlY3Rpb24sIHRoaXMuYmFzZVVybCk7XHJcbiAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2FwaUtleScsIHRoaXMuYXBpS2V5KTtcclxuICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrRm9yRXJyb3IoeyBzdGF0dXMsIG1lc3NhZ2UgfSkge1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09ICdlcnJvcicpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgfHwgJ1VuZXhwZWN0ZWQgZXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9