import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuruListComponent } from './juru-list.component';

describe('JuruListComponent', () => {
  let component: JuruListComponent;
  let fixture: ComponentFixture<JuruListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuruListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuruListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
