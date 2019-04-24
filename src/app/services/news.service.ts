import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NewsItem, Source } from "@app-models";
import { environment } from "@environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  apiKey: string;
  baseUrl: URL;

  constructor(private readonly httpClient: HttpClient) {
    this.apiKey = environment.apiKey;
    this.baseUrl = new URL("https://newsapi.org/v2/");
  }

  public getSources(): Observable<Source[]> {
    const sourceUrl: URL = new URL("sources", this.baseUrl);
    const params: any = {
      apiKey: this.apiKey
    };

    return this.httpClient.get(sourceUrl.toString(), { params }).pipe(
      map((result: any) => {
        this.checkForError(result);

        const customSource: Source = {
          id: "front_camp_2018",
          name: "front camp 2018",
          custom: true
        };

        return [customSource, ...result.sources];
      })
    );
  }

  public getNewsItems(sourceId: string, pageSize: number, page: number): Observable<NewsItem[]> {
    const newsUrl: URL = new URL("everything", this.baseUrl);
    const params: any = {
      apiKey: this.apiKey,
      sources: sourceId,
      pageSize: pageSize,
      page: page
    };

    return this.httpClient.get(newsUrl.toString(), { params }).pipe(
      map((result: any) => {
        this.checkForError(result);

        return result.articles;
      })
    );
  }

  private checkForError(error: any): void {
    if (error.status === "error") {
      throw error;
    }
  }
}
