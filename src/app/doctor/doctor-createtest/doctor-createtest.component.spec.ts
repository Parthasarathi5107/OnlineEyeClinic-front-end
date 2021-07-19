import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorCreatetestComponent } from './doctor-createtest.component';

describe('DoctorCreatetestComponent', () => {
  let component: DoctorCreatetestComponent;
  let fixture: ComponentFixture<DoctorCreatetestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorCreatetestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorCreatetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
