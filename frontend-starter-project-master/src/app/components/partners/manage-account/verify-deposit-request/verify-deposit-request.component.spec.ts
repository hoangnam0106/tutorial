import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyDepositRequestComponent } from './verify-deposit-request.component';

describe('VerifyDepositRequestComponent', () => {
  let component: VerifyDepositRequestComponent;
  let fixture: ComponentFixture<VerifyDepositRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyDepositRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyDepositRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
