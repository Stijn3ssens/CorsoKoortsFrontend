import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocietyTabDetailPageRoutingModule } from './society-tab-detail-routing.module';

import { SocietyTabDetailPage } from './society-tab-detail.page';
import { MenuComponent } from '../../../components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocietyTabDetailPageRoutingModule
  ],
  declarations: [SocietyTabDetailPage, MenuComponent]
})
export class SocietyTabDetailPageModule {}
