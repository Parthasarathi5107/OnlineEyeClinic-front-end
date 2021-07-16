import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorActivityComponent } from './doctor-activity.component';

describe('DoctorActivityComponent', () => {
  let component: DoctorActivityComponent;
  let fixture: ComponentFixture<DoctorActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
