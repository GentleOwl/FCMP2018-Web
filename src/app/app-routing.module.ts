import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewsCollectionComponent } from "./news-collection/news-collection.component";
import { NewsItemEditComponent } from "./news-collection/news-item-edit/news-item-edit.component";
import { NewsItemAddComponent } from "./news-item-add/news-item-add.component";

const routes: Routes = [
  { path: "news", component: NewsCollectionComponent },
  { path: "news/add", component: NewsItemAddComponent },
  { path: "news/:id", component: NewsItemEditComponent },
  { path: "", redirectTo: "/news", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
