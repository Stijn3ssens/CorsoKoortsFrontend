import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocietyArticleManagePage } from './society-article-manage.page';

const routes: Routes = [
  {
    path: '',
    component: SocietyArticleManagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocietyArticleManagePageRoutingModule {}
