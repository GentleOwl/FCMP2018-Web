import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NewsItem } from "@app-models";
import { environment } from "@environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CustomNewsService {
  private readonly baseUrl: string;

  constructor(private readonly httpClient: HttpClient) {
    this.baseUrl = environment.webApiUrl;
  }

  public getNewsItems(pageSize: number, page: number): Observable<NewsItem[]> {
    return this.httpClient.get<NewsItem[]>(`${this.baseUrl}/news`);
  }

  public getNewsItemById(id: string): Observable<NewsItem> {
    return this.httpClient.get<NewsItem>(`${this.baseUrl}/news/${id}`);
  }

  public addNewsItem(newsItem: NewsItem): Observable<NewsItem> {
    return this.httpClient.put<NewsItem>(`${this.baseUrl}/news`, newsItem);
  }

  public updateNewsItem(newsItem: NewsItem): Observable<NewsItem> {
    return this.httpClient.post<NewsItem>(
      `${this.baseUrl}/news/${newsItem._id}`,
      newsItem
    );
  }

  public deleteNewsItem(id: string): Observable<void> {
    return this.httpClient
      .delete(`${this.baseUrl}/news/${id}`)
      .pipe(map(() => {}));
  }
}
