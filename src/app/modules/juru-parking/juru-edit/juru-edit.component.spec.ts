import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuruEditComponent } from './juru-edit.component';

describe('JuruEditComponent', () => {
  let component: JuruEditComponent;
  let fixture: ComponentFixture<JuruEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuruEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuruEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
