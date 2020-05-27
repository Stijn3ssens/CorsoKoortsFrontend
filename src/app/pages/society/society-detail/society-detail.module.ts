import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocietyDetailPageRoutingModule } from './society-detail-routing.module';

import { SocietyDetailPage } from './society-detail.page';
import { MenuComponent } from '../../../components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocietyDetailPageRoutingModule
  ],
  declarations: [SocietyDetailPage, MenuComponent]
})
export class SocietyDetailPageModule {}
