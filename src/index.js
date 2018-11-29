import './polyfills.js';
import './styles/main.scss';

window.addEventListener('load', onWindowLoad);

function onWindowLoad(event) {
    const showButton = this.document.getElementById('show-app-button');

    showButton.addEventListener('click', onShowButtonClick);
}

function onShowButtonClick(event) {
    loadNewsComponentAsync()
        .catch(e => alert(`${e.message}\nTry to reload page`));
}

async function loadNewsComponentAsync() {
    const { NewsComponent } = await import('./news.component/news.component.js');
    const { default: NewsComponentHtml } = await import('./news.component/news.component.html');

    document.body.innerHTML = NewsComponentHtml;
    const newsComponent = new NewsComponent();
    
    newsComponent.init();
}