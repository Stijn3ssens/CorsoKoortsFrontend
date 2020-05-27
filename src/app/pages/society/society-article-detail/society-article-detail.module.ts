import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocietyArticleDetailPageRoutingModule } from './society-article-detail-routing.module';

import { SocietyArticleDetailPage } from './society-article-detail.page';
import { MenuComponent } from '../../../components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocietyArticleDetailPageRoutingModule
  ],
  declarations: [SocietyArticleDetailPage, MenuComponent]
})
export class SocietyArticleDetailPageModule {}
