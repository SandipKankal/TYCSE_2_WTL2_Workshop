import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForHandlingComponent } from './for-handling.component';

describe('ForHandlingComponent', () => {
  let component: ForHandlingComponent;
  let fixture: ComponentFixture<ForHandlingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForHandlingComponent]
    });
    fixture = TestBed.createComponent(ForHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
