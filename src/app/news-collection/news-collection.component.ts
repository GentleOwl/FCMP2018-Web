import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NewsItem, Source } from "@app-models";
import { CustomNewsService, NewsService } from "@app-services";
import { Observable } from "rxjs";

@Component({
  selector: "app-news-collection",
  templateUrl: "./news-collection.component.html",
  styleUrls: ["./news-collection.component.scss"]
})
export class NewsCollectionComponent implements OnInit {
  private readonly pageSize: number = 10;
  private page: number = 1;

  public sources: Source[];
  public newsItems: NewsItem[];

  public selectedSource: Source;
  public searchText: string;

  constructor(
    private readonly newsService: NewsService,
    private readonly customNewsService: CustomNewsService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.newsService.getSources().subscribe((sources: Source[]) => {
      this.sources = sources;
    });
  }

  public onSourceChange(): void {
    const apiCall: Observable<NewsItem[]> = this.selectedSource.custom
      ? this.customNewsService.getNewsItems(this.pageSize, this.page)
      : this.newsService.getNewsItems(
          this.selectedSource.id,
          this.pageSize,
          this.page
        );

    apiCall.subscribe((newsItems: NewsItem[]) => {
      this.newsItems = newsItems;
    });
  }

  public onLoadMoreClick(): void {
    this.page += 1;

    this.newsService
      .getNewsItems(this.selectedSource.id, this.pageSize, this.page)
      .subscribe((newsItems: NewsItem[]) => {
        this.newsItems.push(...newsItems);
      });
  }

  public onSearch(text: string): void {
    this.searchText = text;
  }

  public onDeleteClick(newsItem: NewsItem): void {
    this.customNewsService.deleteNewsItem(newsItem._id).subscribe(() => {
      const index: number = this.newsItems.findIndex(
        (n: NewsItem) => n._id === newsItem._id
      );
      this.newsItems.splice(index, 1);
    });
  }

  public onEditClick(newsItem: NewsItem): void {
    this.router.navigate(["/news", newsItem._id]);
  }
}
