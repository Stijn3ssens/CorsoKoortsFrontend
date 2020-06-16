import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocietyArticleManagePageRoutingModule } from './society-article-manage-routing.module';

import { SocietyArticleManagePage } from './society-article-manage.page';
import { MenuComponent } from '../../../components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocietyArticleManagePageRoutingModule
  ],
  declarations: [SocietyArticleManagePage, MenuComponent]
})
export class SocietyArticleManagePageModule {}
