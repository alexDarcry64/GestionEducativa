import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarSeccionPage } from './agregar-seccion.page';

describe('AgregarSeccionPage', () => {
  let component: AgregarSeccionPage;
  let fixture: ComponentFixture<AgregarSeccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarSeccionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarSeccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
