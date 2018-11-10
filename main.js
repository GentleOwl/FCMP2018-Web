import { NewsComponent } from './news.component.js';

window.addEventListener("load", function (event) {
    const newsComponent = new NewsComponent();

    newsComponent.init();
});