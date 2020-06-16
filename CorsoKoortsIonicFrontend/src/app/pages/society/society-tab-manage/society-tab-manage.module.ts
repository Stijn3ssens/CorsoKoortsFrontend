import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocietyTabManagePageRoutingModule } from './society-tab-manage-routing.module';

import { SocietyTabManagePage } from './society-tab-manage.page';
import { MenuComponent } from '../../../components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocietyTabManagePageRoutingModule
  ],
  declarations: [SocietyTabManagePage, MenuComponent]
})
export class SocietyTabManagePageModule {}
