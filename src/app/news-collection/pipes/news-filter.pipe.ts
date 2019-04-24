import { Pipe, PipeTransform } from '@angular/core';
import { NewsItem } from "@app-models";

@Pipe({
  name: 'newsFilter'
})
export class NewsFilterPipe implements PipeTransform {

  transform(newsItems: NewsItem[], text: string): NewsItem[] {
    if (!text || !newsItems) {
      return newsItems;
    }

    return newsItems.filter((item: NewsItem) => (item.description || '').includes(text));
  }
}
