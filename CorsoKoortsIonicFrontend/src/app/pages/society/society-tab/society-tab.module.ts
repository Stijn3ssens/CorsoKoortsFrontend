import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocietyTabPageRoutingModule } from './society-tab-routing.module';

import { SocietyTabPage } from './society-tab.page';
import { MenuComponent } from '../../../components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocietyTabPageRoutingModule
  ],
  declarations: [SocietyTabPage, MenuComponent]
})
export class SocietyTabPageModule {}
