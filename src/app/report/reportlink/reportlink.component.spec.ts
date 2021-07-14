import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportlinkComponent } from './reportlink.component';

describe('ReportlinkComponent', () => {
  let component: ReportlinkComponent;
  let fixture: ComponentFixture<ReportlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportlinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
