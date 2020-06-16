import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocietyMemberListPage } from './society-member-list.page';

const routes: Routes = [
  {
    path: '',
    component: SocietyMemberListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocietyMemberListPageRoutingModule {}
