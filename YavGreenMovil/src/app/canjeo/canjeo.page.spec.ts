import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CanjeoPage } from './canjeo.page';

describe('CanjeoPage', () => {
  let component: CanjeoPage;
  let fixture: ComponentFixture<CanjeoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanjeoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CanjeoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
