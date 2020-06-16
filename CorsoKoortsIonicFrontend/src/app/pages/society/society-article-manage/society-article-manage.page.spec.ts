import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule, RouterLinkDelegate } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, Observable, } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { CacheModule } from 'ionic-cache';

import { SocietyArticleManagePage } from './society-article-manage.page';

describe('SocietyArticleManagePage', () => {
  let component: SocietyArticleManagePage;
  let fixture: ComponentFixture<SocietyArticleManagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [SocietyArticleManagePage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule,  CacheModule.forRoot()], 
    });
  }));

  it('should create component', inject([SocietyArticleManagePage], (component : SocietyArticleManagePage) => {
    expect(component).toBeTruthy();
  }));
});
