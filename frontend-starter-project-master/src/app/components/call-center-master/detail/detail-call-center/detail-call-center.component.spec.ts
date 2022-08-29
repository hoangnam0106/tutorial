import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCallCenterComponent } from './detail-call-center.component';

describe('DetailCallCenterComponent', () => {
  let component: DetailCallCenterComponent;
  let fixture: ComponentFixture<DetailCallCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCallCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCallCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
