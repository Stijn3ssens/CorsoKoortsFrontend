import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocietyMemberRequestListPage } from './society-member-request-list.page';

const routes: Routes = [
  {
    path: '',
    component: SocietyMemberRequestListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocietyMemberRequestListPageRoutingModule {}
