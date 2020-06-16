import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule, RouterLinkDelegate } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, Observable, } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { CacheModule } from 'ionic-cache';

import { FollowListPage } from './follow-list.page';

describe('FollowListPage', () => {
  let fixture : ComponentFixture<FollowListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [FollowListPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule,  CacheModule.forRoot()], 
    });
  }));

  it('should create component', inject([FollowListPage], (component : FollowListPage) => {
    expect(component).toBeTruthy();
  }));
});
