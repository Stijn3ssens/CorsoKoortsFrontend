import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocietyAccountDetailPageRoutingModule } from './society-account-detail-routing.module';

import { SocietyAccountDetailPage } from './society-account-detail.page';
import { MenuComponent } from '../../../components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocietyAccountDetailPageRoutingModule
  ],
  declarations: [SocietyAccountDetailPage, MenuComponent]
})
export class SocietyAccountDetailPageModule {}
