import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocietyHomePage } from './society-home.page';

const routes: Routes = [
  {
    path: '',
    component: SocietyHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocietyHomePageRoutingModule {}
