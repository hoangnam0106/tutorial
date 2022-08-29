import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCallbotComponent } from './create-callbot.component';

describe('CreateCallbotComponent', () => {
  let component: CreateCallbotComponent;
  let fixture: ComponentFixture<CreateCallbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCallbotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCallbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
