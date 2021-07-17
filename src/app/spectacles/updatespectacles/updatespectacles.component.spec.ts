import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatespectaclesComponent } from './updatespectacles.component';

describe('UpdatespectaclesComponent', () => {
  let component: UpdatespectaclesComponent;
  let fixture: ComponentFixture<UpdatespectaclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatespectaclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatespectaclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
