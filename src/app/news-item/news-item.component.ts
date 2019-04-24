import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { NewsItem } from "@app-models";

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent {
  @Input()
  public newsItem: NewsItem;

  @Output()
  public delete: EventEmitter<NewsItem> = new EventEmitter();

  @Output()
  public edit: EventEmitter<NewsItem> = new EventEmitter();

  public onDeleteClick(): void {
    this.delete.emit(this.newsItem);
  }

  public onEditClick(): void {
    this.edit.emit(this.newsItem);
  }
}
