import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule, RouterLinkDelegate } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, Observable, } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { CacheModule } from 'ionic-cache';

import { SocietyTabManagePage } from './society-tab-manage.page';

describe('SocietyTabManagePage', () => {
  let component: SocietyTabManagePage;
  let fixture: ComponentFixture<SocietyTabManagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [SocietyTabManagePage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule,  CacheModule.forRoot()], 
    });
  }));

  it('should create component', inject([SocietyTabManagePage], (component : SocietyTabManagePage) => {
    expect(component).toBeTruthy();
  }));
});
