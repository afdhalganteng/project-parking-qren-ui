import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuruAddComponent } from './juru-add.component';

describe('JuruAddComponent', () => {
  let component: JuruAddComponent;
  let fixture: ComponentFixture<JuruAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuruAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuruAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
