import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NewsCollectionComponent } from './news-collection/news-collection.component';
import { NewsItemEditComponent } from './news-collection/news-item-edit/news-item-edit.component';
import { NewsFilterPipe } from './news-collection/pipes/news-filter.pipe';
import { NewsItemAddComponent } from './news-item-add/news-item-add.component';
import { NewsItemFormComponent } from './news-item-form/news-item-form.component';
import { NewsItemComponent } from './news-item/news-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsCollectionComponent,
    NewsItemComponent,
    NewsFilterPipe,
    NewsItemAddComponent,
    NewsItemFormComponent,
    NewsItemEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
