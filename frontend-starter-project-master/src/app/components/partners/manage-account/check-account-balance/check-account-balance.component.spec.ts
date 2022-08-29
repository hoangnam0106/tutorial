import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAccountBalanceComponent } from './check-account-balance.component';

describe('CheckAccountBalanceComponent', () => {
  let component: CheckAccountBalanceComponent;
  let fixture: ComponentFixture<CheckAccountBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckAccountBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckAccountBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
