import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagespectaclesComponent } from './managespectacles.component';

describe('ManagespectaclesComponent', () => {
  let component: ManagespectaclesComponent;
  let fixture: ComponentFixture<ManagespectaclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagespectaclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagespectaclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
