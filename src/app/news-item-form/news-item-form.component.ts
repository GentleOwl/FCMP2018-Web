import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NewsItem} from "@app-models";

@Component({
  selector: 'app-news-item-form',
  templateUrl: './news-item-form.component.html',
  styleUrls: ['./news-item-form.component.scss']
})
export class NewsItemFormComponent {
  @Input()
  public newsItem: NewsItem;

  @Output()
  public submitNewsItem: EventEmitter<NewsItem> = new EventEmitter<NewsItem>();

  public onSubmitClick(): void {
    this.submitNewsItem.emit(this.newsItem);
  }
}
