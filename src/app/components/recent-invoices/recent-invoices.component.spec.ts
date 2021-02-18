import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentInvoicesComponent } from './recent-invoices.component';

describe('RecentInvoicesComponent', () => {
  let component: RecentInvoicesComponent;
  let fixture: ComponentFixture<RecentInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
