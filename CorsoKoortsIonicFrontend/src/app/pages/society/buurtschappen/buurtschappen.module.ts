import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuurtschappenPageRoutingModule } from './buurtschappen-routing.module';

import { BuurtschappenPage } from './buurtschappen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuurtschappenPageRoutingModule
  ],
  declarations: [BuurtschappenPage]
})
export class BuurtschappenPageModule {}
