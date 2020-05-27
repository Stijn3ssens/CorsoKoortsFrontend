import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocietyTabPage } from './society-tab.page';

const routes: Routes = [
  {
    path: '',
    component: SocietyTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocietyTabPageRoutingModule {}
