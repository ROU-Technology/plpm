import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSermonsComponent } from './our-sermons.component';

describe('OurSermonsComponent', () => {
  let component: OurSermonsComponent;
  let fixture: ComponentFixture<OurSermonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurSermonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurSermonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
