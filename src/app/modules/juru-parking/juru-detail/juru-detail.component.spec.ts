import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuruDetailComponent } from './juru-detail.component';

describe('JuruDetailComponent', () => {
  let component: JuruDetailComponent;
  let fixture: ComponentFixture<JuruDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuruDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuruDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
