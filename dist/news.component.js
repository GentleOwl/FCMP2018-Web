(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "core-js/modules/es6.promise", "core-js/modules/es6.function.name", "core-js/modules/es7.symbol.async-iterator", "core-js/modules/es6.symbol", "core-js/modules/web.dom.iterable", "regenerator-runtime/runtime", "./config.js", "./news.service.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("core-js/modules/es6.promise"), require("core-js/modules/es6.function.name"), require("core-js/modules/es7.symbol.async-iterator"), require("core-js/modules/es6.symbol"), require("core-js/modules/web.dom.iterable"), require("regenerator-runtime/runtime"), require("./config.js"), require("./news.service.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.es6, global.es6Function, global.es7Symbol, global.es6, global.webDom, global.runtime, global.config, global.newsService);
    global.newsComponent = mod.exports;
  }
})(this, function (_exports, _es, _es6Function, _es7Symbol, _es2, _webDom, _runtime, _config, _newsService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.NewsComponent = void 0;
  _config = _interopRequireDefault(_config);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

      this.newsService = new _newsService.NewsService(_config.default.apiKey);
    }

    _createClass(NewsComponent, [{
      key: "init",
      value: function init() {
        this.initElements();
        this.registerEventListeners();
        this.loadSources();
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

          _this.loadNews(_this.selectedSourceId, _this.pageSize, _this.page);
        });
        this.loadNextPageBtnEl.addEventListener('click', function (e) {
          _this.loadNextNews(_this.selectedSourceId, _this.pageSize, _this.page);
        });
      }
    }, {
      key: "loadSources",
      value: function () {
        var _loadSources = _asyncToGenerator(
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
                  return this.newsService.getSourcesProm();

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

        return function loadSources() {
          return _loadSources.apply(this, arguments);
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
      key: "loadNews",
      value: function () {
        var _loadNews = _asyncToGenerator(
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
                  return this.newsService.getNewsProm(selectedSourceId, pageSize, page);

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

        return function loadNews(_x, _x2, _x3) {
          return _loadNews.apply(this, arguments);
        };
      }()
    }, {
      key: "loadNextNews",
      value: function loadNextNews(selectedSourceId, pageSize, page) {
        var _this2 = this;

        var nextPage = page + 1;
        this.loadNews(selectedSourceId, pageSize, nextPage).then(function () {
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

  _exports.NewsComponent = NewsComponent;
});