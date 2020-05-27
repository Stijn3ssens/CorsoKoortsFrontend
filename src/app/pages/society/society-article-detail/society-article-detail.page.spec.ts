import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule, RouterLinkDelegate } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, Observable, } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { CacheModule } from 'ionic-cache';

import { SocietyArticleDetailPage } from './society-article-detail.page';

describe('SocietyArticleDetailPage', () => {
  let component: SocietyArticleDetailPage;
  let fixture: ComponentFixture<SocietyArticleDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [SocietyArticleDetailPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule,  CacheModule.forRoot()], 
    });
  }));

  it('should create component', inject([SocietyArticleDetailPage], (component : SocietyArticleDetailPage) => {
    expect(component).toBeTruthy();
  }));
});
