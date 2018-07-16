import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodDonarsComponent } from './blood-donars.component';

describe('BloodDonarsComponent', () => {
  let component: BloodDonarsComponent;
  let fixture: ComponentFixture<BloodDonarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodDonarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodDonarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
