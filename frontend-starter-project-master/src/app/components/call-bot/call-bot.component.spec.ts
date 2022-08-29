import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallBotComponent } from './call-bot.component';

describe('CallBotComponent', () => {
  let component: CallBotComponent;
  let fixture: ComponentFixture<CallBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallBotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
