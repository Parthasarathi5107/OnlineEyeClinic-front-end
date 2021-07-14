import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestlinkComponent } from './testlink.component';

describe('TestlinkComponent', () => {
  let component: TestlinkComponent;
  let fixture: ComponentFixture<TestlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestlinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
