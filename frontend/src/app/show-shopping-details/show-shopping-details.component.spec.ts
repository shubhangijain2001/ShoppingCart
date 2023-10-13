import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowShoppingDetailsComponent } from './show-shopping-details.component';

describe('ShowShoppingDetailsComponent', () => {
  let component: ShowShoppingDetailsComponent;
  let fixture: ComponentFixture<ShowShoppingDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowShoppingDetailsComponent]
    });
    fixture = TestBed.createComponent(ShowShoppingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
