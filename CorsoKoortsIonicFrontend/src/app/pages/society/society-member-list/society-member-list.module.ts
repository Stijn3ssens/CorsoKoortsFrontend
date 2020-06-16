import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocietyMemberListPageRoutingModule } from './society-member-list-routing.module';

import { SocietyMemberListPage } from './society-member-list.page';
import { MenuComponent } from '../../../components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocietyMemberListPageRoutingModule
  ],
  declarations: [SocietyMemberListPage, MenuComponent]
})
export class SocietyMemberListPageModule {}
