import './styles/main.scss';

import { NewsComponent } from './news.component';

window.addEventListener("load", function (event) {
    const newsComponent = new NewsComponent();

    newsComponent.init();
});