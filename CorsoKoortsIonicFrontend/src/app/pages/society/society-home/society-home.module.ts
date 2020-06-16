import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocietyHomePageRoutingModule } from './society-home-routing.module';

import { SocietyHomePage } from './society-home.page';
import { MenuComponent } from '../../../components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocietyHomePageRoutingModule
  ],
  declarations: [SocietyHomePage, MenuComponent]
})
export class SocietyHomePageModule {}
