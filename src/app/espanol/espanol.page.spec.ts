import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EspanolPage } from './espanol.page';

describe('EspanolPage', () => {
  let component: EspanolPage;
  let fixture: ComponentFixture<EspanolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspanolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EspanolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
