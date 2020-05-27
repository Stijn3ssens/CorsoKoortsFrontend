import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuurtschappenPage } from './buurtschappen.page';

const routes: Routes = [
  {
    path: '',
    component: BuurtschappenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuurtschappenPageRoutingModule {}
