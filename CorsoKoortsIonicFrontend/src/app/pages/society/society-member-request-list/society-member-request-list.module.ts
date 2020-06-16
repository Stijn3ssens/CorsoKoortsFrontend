import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocietyMemberRequestListPageRoutingModule } from './society-member-request-list-routing.module';

import { SocietyMemberRequestListPage } from './society-member-request-list.page';
import { MenuComponent } from '../../../components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocietyMemberRequestListPageRoutingModule
  ],
  declarations: [SocietyMemberRequestListPage, MenuComponent]
})
export class SocietyMemberRequestListPageModule {}
