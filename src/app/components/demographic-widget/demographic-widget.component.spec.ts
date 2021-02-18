import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemographicWidgetComponent } from './demographic-widget.component';

describe('DemographicWidgetComponent', () => {
  let component: DemographicWidgetComponent;
  let fixture: ComponentFixture<DemographicWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemographicWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemographicWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
