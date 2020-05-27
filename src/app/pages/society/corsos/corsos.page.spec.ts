import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule, RouterLinkDelegate } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, Observable, } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { CacheModule } from 'ionic-cache';

import { CorsosPage } from './corsos.page';
import { CorsoService } from '../../../services/corso.service';
import { Corso } from '../../../models/corso';

describe('CorsosPage', () => {
  const fakeObject : Corso = 
    { id: 5, name: 'Freek', corso: true, accountId: 1, member: null};
  const fakeObjects : Corso[] = [
    fakeObject,
    { id: 3, name: 'Hans', corso: true, accountId: 2, member: null}
  ];
  let fixture : ComponentFixture<CorsosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [CorsoService, CorsosPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule,  CacheModule.forRoot()], 
    });
  }));

  it('should create component', inject([CorsosPage], (component : CorsosPage) => {
    expect(component).toBeTruthy();
  }));

  it('should create service', inject([CorsoService], (service : CorsoService) => {
    expect(service).toBeTruthy();
  }));

  it('should get corsos', inject([CorsoService, CorsosPage], (service : CorsoService, component : CorsosPage) => {
    this.fixture = TestBed.createComponent(CorsosPage);
    spyOn(service, 'getCorsos').and.returnValue(of(fakeObjects));
    component.ngOnInit();

    expect(component.societies[0].name).toBe(fakeObjects[0].name);
  }));
});
