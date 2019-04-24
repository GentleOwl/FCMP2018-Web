import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NewsItem } from "@app-models";
import { CustomNewsService } from "@app-services";

@Component({
  selector: "app-news-item-add",
  templateUrl: "./news-item-add.component.html",
  styleUrls: ["./news-item-add.component.scss"]
})
export class NewsItemAddComponent implements OnInit {
  public newsItem: NewsItem;

  constructor(
    private readonly customNewsService: CustomNewsService,
    private readonly router: Router
  ) {}

  public ngOnInit(): void {
    this.newsItem = new NewsItem();
  }

  public onNewsItemSubmit(newsItem: NewsItem): void {
    this.customNewsService.addNewsItem(newsItem).subscribe((newNewsItem: NewsItem) => {
      this.router.navigate(["/news"]);
    });
  }
}
