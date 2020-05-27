import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorsosPage } from './corsos.page';

const routes: Routes = [
  {
    path: '',
    component: CorsosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorsosPageRoutingModule {}
