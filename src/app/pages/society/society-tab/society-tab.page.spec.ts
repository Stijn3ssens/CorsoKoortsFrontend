import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule, RouterLinkDelegate } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, Observable, } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { CacheModule } from 'ionic-cache';

import { SocietyTabPage } from './society-tab.page';

describe('SocietyTabPage', () => {
  let component: SocietyTabPage;
  let fixture: ComponentFixture<SocietyTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [SocietyTabPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule,  CacheModule.forRoot()], 
    });
  }));

  it('should create component', inject([SocietyTabPage], (component : SocietyTabPage) => {
    expect(component).toBeTruthy();
  }));
});
