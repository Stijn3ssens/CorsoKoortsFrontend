import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule, RouterLinkDelegate } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, Observable, } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { CacheModule } from 'ionic-cache';

import { SocietyMemberListPage } from './society-member-list.page';

describe('SocietyMemberListPage', () => {
  let component: SocietyMemberListPage;
  let fixture: ComponentFixture<SocietyMemberListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [SocietyMemberListPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule,  CacheModule.forRoot()], 
    });
  }));

  it('should create component', inject([SocietyMemberListPage], (component : SocietyMemberListPage) => {
    expect(component).toBeTruthy();
  }));
});
