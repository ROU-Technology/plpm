import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveCompassionComponent } from './love-compassion.component';

describe('LoveCompassionComponent', () => {
  let component: LoveCompassionComponent;
  let fixture: ComponentFixture<LoveCompassionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoveCompassionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoveCompassionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
