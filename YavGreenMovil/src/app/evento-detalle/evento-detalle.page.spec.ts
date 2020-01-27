import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventoDetallePage } from './evento-detalle.page';

describe('EventoDetallePage', () => {
  let component: EventoDetallePage;
  let fixture: ComponentFixture<EventoDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventoDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
