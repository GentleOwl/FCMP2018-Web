(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.config = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    apiKey: '05262e686cf847ba8e38d00b2db13e68'
  };
  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./news.component.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./news.component.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.newsComponent);
    global.index = mod.exports;
  }
})(this, function (_newsComponent) {
  "use strict";

  window.addEventListener("load", function (event) {
    var newsComponent = new _newsComponent.NewsComponent();
    newsComponent.init();
  });
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./config.js", "./news.service.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./config.js"), require("./news.service.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.config, global.newsService);
    global.newsComponent = mod.exports;
  }
})(this, function (_exports, _config, _newsService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.NewsComponent = void 0;
  _config = _interopRequireDefault(_config);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      value: function loadSources() {
        var _this2 = this;

        this.lockForm();
        this.newsService.getSourcesProm().then(function (sources) {
          _this2.updateSources(sources);

          _this2.unlockForm();
        }).catch(function (e) {
          return alert("".concat(e, "\nTry to reload page."));
        });
      }
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
      value: function loadNews(selectedSourceId, pageSize, page) {
        var _this3 = this;

        this.lockForm();
        return this.newsService.getNewsProm(selectedSourceId, pageSize, page).then(function (news) {
          return _this3.updateNews(news);
        }).catch(function (e) {
          return alert("".concat(e, "\nTry again."));
        }).finally(function () {
          return _this3.unlockForm();
        });
      }
    }, {
      key: "loadNextNews",
      value: function loadNextNews(selectedSourceId, pageSize, page) {
        var _this4 = this;

        var nextPage = page + 1;
        this.loadNews(selectedSourceId, pageSize, nextPage).then(function () {
          _this4.page = nextPage;
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
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.newsService = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.NewsService = void 0;

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
      value: function getSourcesProm() {
        var _this = this;

        var sourceUrl = this.getUrl('sources');
        return fetch(sourceUrl).then(function (request) {
          return request.json();
        }).then(function (result) {
          _this.checkForError(result);

          return result.sources;
        });
      }
    }, {
      key: "getNewsProm",
      value: function getNewsProm(sourceId, pageSize, page) {
        var _this2 = this;

        var newsUrl = this.getUrl('everything');
        newsUrl.searchParams.set('sources', sourceId);
        newsUrl.searchParams.set('pageSize', pageSize);
        newsUrl.searchParams.set('page', page);
        return fetch(newsUrl).then(function (request) {
          return request.json();
        }).then(function (result) {
          _this2.checkForError(result);

          return result.articles;
        });
      }
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
