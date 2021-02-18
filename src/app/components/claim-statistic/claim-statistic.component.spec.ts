import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimStatisticComponent } from './claim-statistic.component';

describe('ClaimStatisticComponent', () => {
  let component: ClaimStatisticComponent;
  let fixture: ComponentFixture<ClaimStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
