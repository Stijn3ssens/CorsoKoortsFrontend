import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorsosPageRoutingModule } from './corsos-routing.module';

import { CorsosPage } from './corsos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorsosPageRoutingModule
  ],
  declarations: [CorsosPage]
})
export class CorsosPageModule {}
