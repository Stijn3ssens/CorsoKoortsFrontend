import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocietyAccountDetailPage } from './society-account-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SocietyAccountDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocietyAccountDetailPageRoutingModule {}
