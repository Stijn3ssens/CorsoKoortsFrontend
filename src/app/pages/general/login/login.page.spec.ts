import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule, RouterLinkDelegate } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, Observable, } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { CacheModule } from 'ionic-cache';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [LoginPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule,  CacheModule.forRoot()], 
    });
  }));

  it('should create component', inject([LoginPage], (component : LoginPage) => {
    expect(component).toBeTruthy();
  }));
});