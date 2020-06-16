import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule, RouterLinkDelegate } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, Observable, } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { CacheModule } from 'ionic-cache';

import { SocietyTabDetailPage } from './society-tab-detail.page';

describe('SocietyTabDetailPage', () => {
  let component: SocietyTabDetailPage;
  let fixture: ComponentFixture<SocietyTabDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [SocietyTabDetailPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule,  CacheModule.forRoot()], 
    });
  }));

  it('should create component', inject([SocietyTabDetailPage], (component : SocietyTabDetailPage) => {
    expect(component).toBeTruthy();
  }));
});
