import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCostComponent } from './book-cost.component';

describe('BookCostComponent', () => {
  let component: BookCostComponent;
  let fixture: ComponentFixture<BookCostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookCostComponent]
    });
    fixture = TestBed.createComponent(BookCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
