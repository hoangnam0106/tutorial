import { TestBed } from '@angular/core/testing';

import { CallBotService } from './call-bot.service';

describe('CallBotService', () => {
  let service: CallBotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallBotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
