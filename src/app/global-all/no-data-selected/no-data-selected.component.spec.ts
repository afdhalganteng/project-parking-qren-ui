import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDataSelectedComponent } from './no-data-selected.component';

describe('NoDataSelectedComponent', () => {
  let component: NoDataSelectedComponent;
  let fixture: ComponentFixture<NoDataSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoDataSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoDataSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
