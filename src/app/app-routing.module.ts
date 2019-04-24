import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsCollectionComponent } from './news-collection/news-collection.component';

const routes: Routes = [
  { path: 'news', component: NewsCollectionComponent },
  { path: '', redirectTo: '/news', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
