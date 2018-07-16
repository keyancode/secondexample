import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpDonarsComponent } from './corp-donars.component';

describe('CorpDonarsComponent', () => {
  let component: CorpDonarsComponent;
  let fixture: ComponentFixture<CorpDonarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorpDonarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpDonarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
