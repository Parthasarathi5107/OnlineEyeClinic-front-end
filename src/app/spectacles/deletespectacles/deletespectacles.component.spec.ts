import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletespectaclesComponent } from './deletespectacles.component';

describe('DeletespectaclesComponent', () => {
  let component: DeletespectaclesComponent;
  let fixture: ComponentFixture<DeletespectaclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletespectaclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletespectaclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
