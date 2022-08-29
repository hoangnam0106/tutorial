import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallCenterMasterComponent } from './call-center-master.component';

describe('CallCenterMasterComponent', () => {
  let component: CallCenterMasterComponent;
  let fixture: ComponentFixture<CallCenterMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallCenterMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallCenterMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
