import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuruParkingComponent } from './juru-parking.component';

describe('JuruParkingComponent', () => {
  let component: JuruParkingComponent;
  let fixture: ComponentFixture<JuruParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuruParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuruParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
