import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule, RouterLinkDelegate } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, Observable, } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { CacheModule } from 'ionic-cache';

import { BuurtschappenPage } from './buurtschappen.page';
import { BuurtschapService } from '../../../services/buurtschap.service';
import { Buurtschap } from 'src/app/models/buurtschap';

describe('buurtschappenPage', () => {
  const fakeObject : Buurtschap = 
    { id: 5, name: 'Freek', corso: false, accountId: 1};
  const fakeObjects : Buurtschap[] = [
    fakeObject,
    { id: 3, name: 'Hans', corso: false, accountId: 2}
  ];
  let fixture : ComponentFixture<BuurtschappenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [BuurtschapService, BuurtschappenPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule,  CacheModule.forRoot()], 
    });
  }));

  it('should create component', inject([BuurtschappenPage], (component : BuurtschappenPage) => {
    expect(component).toBeTruthy();
  }));

  it('should create service', inject([BuurtschapService], (service : BuurtschapService) => {
    expect(service).toBeTruthy();
  }));

  it('should get buurtschappen', inject([BuurtschapService, BuurtschappenPage], (service : BuurtschapService, component : BuurtschappenPage) => {
    this.fixture = TestBed.createComponent(BuurtschappenPage);
    spyOn(service, 'getBuurtschappen').and.returnValue(of(fakeObjects));
    component.ngOnInit();

    expect(component.societies[0].name).toBe(fakeObject[0].name);
  }));
});