import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule, RouterLinkDelegate } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, Observable, } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { CacheModule } from 'ionic-cache';

import { SocietyDetailPage } from './society-detail.page';

describe('SocietyDetailPage', () => {
  let component: SocietyDetailPage;
  let fixture: ComponentFixture<SocietyDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [SocietyDetailPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule,  CacheModule.forRoot()], 
    });
  }));

  it('should create component', inject([SocietyDetailPage], (component : SocietyDetailPage) => {
    expect(component).toBeTruthy();
  }));
});
