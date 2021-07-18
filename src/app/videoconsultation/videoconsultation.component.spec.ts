import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoconsultationComponent } from './videoconsultation.component';

describe('VideoconsultationComponent', () => {
  let component: VideoconsultationComponent;
  let fixture: ComponentFixture<VideoconsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoconsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoconsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
