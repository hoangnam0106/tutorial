import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseBalanceReportComponent } from './close-balance-report.component';

describe('CloseBalanceReportComponent', () => {
  let component: CloseBalanceReportComponent;
  let fixture: ComponentFixture<CloseBalanceReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseBalanceReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseBalanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
