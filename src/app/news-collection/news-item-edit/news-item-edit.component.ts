import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { NewsItem } from "@app-models";
import { CustomNewsService } from "@app-services";
import { map, switchMap } from "rxjs/operators";

@Component({
  selector: "app-news-item-edit",
  templateUrl: "./news-item-edit.component.html",
  styleUrls: ["./news-item-edit.component.scss"]
})
export class NewsItemEditComponent implements OnInit {
  public newsItem: NewsItem;

  constructor(
    private readonly customNewsService: CustomNewsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  public ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((params: ParamMap) => params.get("id")),
        switchMap((id: string) => this.customNewsService.getNewsItemById(id))
      )
      .subscribe((newsItem: NewsItem) => {
        this.newsItem = newsItem;
      });
  }

  public onNewsItemSubmit(newsItem: NewsItem): void {
    this.customNewsService
      .updateNewsItem(newsItem)
      .subscribe((newNewsItem: NewsItem) => {
        this.router.navigate(["/news"]);
      });
  }
}
