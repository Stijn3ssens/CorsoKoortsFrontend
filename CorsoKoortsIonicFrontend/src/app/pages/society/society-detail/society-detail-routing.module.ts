import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocietyDetailPage } from './society-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SocietyDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocietyDetailPageRoutingModule {}
