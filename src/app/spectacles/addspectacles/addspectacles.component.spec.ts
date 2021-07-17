import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddspectaclesComponent } from './addspectacles.component';

describe('AddspectaclesComponent', () => {
  let component: AddspectaclesComponent;
  let fixture: ComponentFixture<AddspectaclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddspectaclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddspectaclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
