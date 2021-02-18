import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentInviocesAdComponent } from './recent-invioces-ad.component';

describe('RecentInviocesAdComponent', () => {
  let component: RecentInviocesAdComponent;
  let fixture: ComponentFixture<RecentInviocesAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentInviocesAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentInviocesAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
