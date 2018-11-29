export class NewsService {
    constructor(apiKey) {
        this.baseUrl = new URL('https://newsapi.org/v2/');
        this.apiKey = apiKey;
    }

    async getSourcesAsync() {
        const sourceUrl = this.getUrl('sources');

        const response = await fetch(sourceUrl);
        const result = await response.json();

        this.checkForError(result);
        
        return result.sources;
    }

    async getNewsAsync(sourceId, pageSize, page) {
        const newsUrl = this.getUrl('everything');

        newsUrl.searchParams.set('sources', sourceId);
        newsUrl.searchParams.set('pageSize', pageSize);
        newsUrl.searchParams.set('page', page);

        const response = await fetch(newsUrl);
        const result = await response.json();

        this.checkForError(result);
        
        return result.articles;
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