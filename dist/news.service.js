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