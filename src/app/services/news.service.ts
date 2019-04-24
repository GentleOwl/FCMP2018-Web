import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }
/*
  constructor(apiKey) {
    this.baseUrl = new URL('https://newsapi.org/v2/');
    this.apiKey = apiKey;
    this.httpClientService = new HttpClientService();
}

async getSourcesAsync() {
    const sourceUrl = new URL('sources', this.baseUrl);
    const params = {
        apiKey: this.apiKey
    };

    const response = await this.httpClientService.getAsync(sourceUrl, params);
    const result = await response.json();

    this.checkForError(result);
    
    return result.sources;
}

async getNewsAsync(sourceId, pageSize, page) {
    const newsUrl = new URL('everything', this.baseUrl);
    const params = {
        apiKey: this.apiKey,
        sources: sourceId,
        pageSize: pageSize,
        page: page
    };

    const response = await this.httpClientService.getAsync(newsUrl, params);
    const result = await response.json();

    this.checkForError(result);
    
    return result.articles;
}

checkForError(error) {
    if (error.status === 'error') {
        throw error;
    }
}

*/

}
