import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocietyArticleDetailPage } from './society-article-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SocietyArticleDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocietyArticleDetailPageRoutingModule {}
