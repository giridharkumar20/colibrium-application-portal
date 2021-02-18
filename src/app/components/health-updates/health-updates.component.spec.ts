import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthUpdatesComponent } from './health-updates.component';

describe('HealthUpdatesComponent', () => {
  let component: HealthUpdatesComponent;
  let fixture: ComponentFixture<HealthUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
