import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchRelevantComponent } from './church-relevant.component';

describe('ChurchRelevantComponent', () => {
  let component: ChurchRelevantComponent;
  let fixture: ComponentFixture<ChurchRelevantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChurchRelevantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChurchRelevantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
