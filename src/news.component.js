import config from './config.js';
import { NewsService } from './news.service.js';

export class NewsComponent {
    constructor() {
        this.newsService = new NewsService(config.apiKey);
    }

    get selectedSourceId() {
        return this.sourcesSelectEl.options[this.sourcesSelectEl.selectedIndex].value;
    }

    get pageSize() {
        return +this.pageSizeInputEl.value;
    }

    get page() {
        return +this.pageInputEl.value;
    }

    set page(value) {
        this.pageInputEl.value = value;
    }

    init() {
        this.initElements();
        this.registerEventListeners();

        this.loadSources();
    }

    initElements() {
        this.sourcesSelectEl = document.getElementById('sources');
        this.loadNewsBtnEl = document.getElementById('load-news-btn');
        this.pageSizeInputEl = document.getElementById('page-size');
        this.pageInputEl = document.getElementById('page');
        this.newsEl = document.getElementById('news');
        this.newsFormEl = document.getElementById('news-form');
        this.loadNextPageBtnEl = document.getElementById('load-next-page-btn');
    }

    registerEventListeners() {
        this.newsFormEl.addEventListener('submit', e => {
            e.preventDefault();
            this.loadNews(this.selectedSourceId, this.pageSize, this.page);
        });

        this.loadNextPageBtnEl.addEventListener('click', e => {
            this.loadNextNews(this.selectedSourceId, this.pageSize, this.page);
        });
    }

    loadSources() {
        this.lockForm();
        this.newsService.getSourcesProm()
            .then(sources => {
                this.updateSources(sources);
                this.unlockForm();
            })
            .catch(e => alert(`${e}\nTry to reload page.`));
    }

    updateSources(sources) {
        for (const source of sources) {
            const opt = document.createElement('option');

            opt.value = source.id;
            opt.innerHTML = source.name;

            this.sourcesSelectEl.appendChild(opt);
        }
    }

    loadNews(selectedSourceId, pageSize, page) {
        this.lockForm();
        return this.newsService.getNewsProm(selectedSourceId, pageSize, page)
            .then(news => this.updateNews(news))
            .catch(e => alert(`${e}\nTry again.`))
            .finally(() => this.unlockForm());
    }

    loadNextNews(selectedSourceId, pageSize, page) {
        const nextPage = page + 1;
        this.loadNews(selectedSourceId, pageSize, nextPage)
            .then(() => {
                this.page = nextPage;
                window.scrollTo(0, 0);
            });
    }

    updateNews(news) {
        this.newsEl.innerHTML = '';

        for (const n of news) {
            const li = document.createElement('li');

            li.classList.add('list-group-item');
            li.innerHTML = n.content;

            this.newsEl.appendChild(li);
        }
    }

    lockForm() {
        this.toggleLoadNewsBtn(false);
        this.toggleLoadNextPageBtn(false);
    }

    unlockForm() {
        this.toggleLoadNewsBtn(true);
        this.toggleLoadNextPageBtn(true);
    }

    toggleLoadNewsBtn(value) {
        this.loadNewsBtnEl.disabled = !value;
    }

    toggleLoadNextPageBtn(value) {
        this.loadNextPageBtnEl.disabled = !value;
    }
}