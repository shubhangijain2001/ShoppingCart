import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulateDetailsComponent } from './manipulate-details.component';

describe('ManipulateDetailsComponent', () => {
  let component: ManipulateDetailsComponent;
  let fixture: ComponentFixture<ManipulateDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManipulateDetailsComponent]
    });
    fixture = TestBed.createComponent(ManipulateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
