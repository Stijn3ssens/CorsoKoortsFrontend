import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule, RouterLinkDelegate } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, Observable, } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { CacheModule } from 'ionic-cache';

import { SocietyMemberRequestListPage } from './society-member-request-list.page';

describe('SocietyMemberRequestListPage', () => {
  let component: SocietyMemberRequestListPage;
  let fixture: ComponentFixture<SocietyMemberRequestListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [SocietyMemberRequestListPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule,  CacheModule.forRoot()], 
    });
  }));

  it('should create component', inject([SocietyMemberRequestListPage], (component : SocietyMemberRequestListPage) => {
    expect(component).toBeTruthy();
  }));
});
