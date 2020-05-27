import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule, RouterLinkDelegate } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, Observable, } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { CacheModule } from 'ionic-cache';

import { AccountPage } from './account.page';
import { AccountService } from '../../../services/account.service';
import { Account } from '../../../models/account';

describe('AccountPage', () => {
  const fakeObject : Account = 
    { id: 5, name: 'Freek', username: 'Freeky', password: 'FreeksPassword', email: 'freek@gmail.com'};
  const fakeObjects : Account[] = [
    fakeObject,
    { id: 3, name: 'Hans', username: 'Hansy', password: 'HansPassword', email: 'hans@gmail.com'}
  ];
  let fixture : ComponentFixture<AccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [AccountService, AccountPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule,  CacheModule.forRoot()], 
    });
  }));

  it('should create component', inject([AccountPage], (component : AccountPage) => {
    expect(component).toBeTruthy();
  }));

  it('should create service', inject([AccountService], (service : AccountService) => {
    expect(service).toBeTruthy();
  }));

  it('should get account', inject([AccountService, AccountPage], (service : AccountService, component : AccountPage) => {
    this.fixture = TestBed.createComponent(AccountPage);
    spyOn(service, 'getAccount').and.returnValue(of(fakeObject));
    component.ngOnInit();

    expect(component.account.name).toBe(fakeObject.name);
  }));
});
