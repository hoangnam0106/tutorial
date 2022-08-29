import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDepositRequestComponent } from './create-deposit-request.component';

describe('CreateDepositRequestComponent', () => {
  let component: CreateDepositRequestComponent;
  let fixture: ComponentFixture<CreateDepositRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDepositRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDepositRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
