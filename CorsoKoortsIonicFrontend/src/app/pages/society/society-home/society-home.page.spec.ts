import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule, RouterLinkDelegate } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, Observable, } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { CacheModule } from 'ionic-cache';

import { SocietyHomePage } from './society-home.page';

describe('SocietyHomePage', () => {
  let component: SocietyHomePage;
  let fixture: ComponentFixture<SocietyHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [SocietyHomePage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule,  CacheModule.forRoot()], 
    });
  }));

  it('should create component', inject([SocietyHomePage], (component : SocietyHomePage) => {
    expect(component).toBeTruthy();
  }));
});
