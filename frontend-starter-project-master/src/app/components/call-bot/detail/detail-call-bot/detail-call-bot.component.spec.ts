import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCallBotComponent } from './detail-call-bot.component';

describe('DetailCallBotComponent', () => {
  let component: DetailCallBotComponent;
  let fixture: ComponentFixture<DetailCallBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCallBotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCallBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
