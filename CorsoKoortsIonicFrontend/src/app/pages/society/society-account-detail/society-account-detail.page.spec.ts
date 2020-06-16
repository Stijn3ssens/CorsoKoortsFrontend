import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule, RouterLinkDelegate } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, Observable, } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { CacheModule } from 'ionic-cache';

import { SocietyAccountDetailPage } from './society-account-detail.page';

describe('SocietyAccountDetailPage', () => {
  let component: SocietyAccountDetailPage;
  let fixture: ComponentFixture<SocietyAccountDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietyAccountDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SocietyAccountDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create component', inject([SocietyAccountDetailPage], (component : SocietyAccountDetailPage) => {
    expect(component).toBeTruthy();
  }));
});