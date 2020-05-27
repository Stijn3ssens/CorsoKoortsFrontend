import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocietyTabManagePage } from './society-tab-manage.page';

const routes: Routes = [
  {
    path: '',
    component: SocietyTabManagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocietyTabManagePageRoutingModule {}
