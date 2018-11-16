export class NewsService {
    constructor(apiKey) {
        this.baseUrl = new URL('https://newsapi.org/v2/');
        this.apiKey = apiKey;
    }

    getSourcesProm() {
        const sourceUrl = this.getUrl('sources');

        return fetch(sourceUrl)
            .then(request => request.json())
            .then(result => {
                this.checkForError(result);
                return result.sources;
            });
    }

    getNewsProm(sourceId, pageSize, page) {
        const newsUrl = this.getUrl('everything');

        newsUrl.searchParams.set('sources', sourceId);
        newsUrl.searchParams.set('pageSize', pageSize);
        newsUrl.searchParams.set('page', page);

        return fetch(newsUrl)
            .then(request => request.json())
            .then(result => {
                this.checkForError(result);
                return result.articles;
            });
    }

    getUrl(section) {
        const url = new URL(section, this.baseUrl);
        url.searchParams.set('apiKey', this.apiKey);
        return url;
    }

    checkForError({ status, message }) {
        if (status === 'error') {
            throw new Error(message || 'Unexpected error');
        }
    }
}