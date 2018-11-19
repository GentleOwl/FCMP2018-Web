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