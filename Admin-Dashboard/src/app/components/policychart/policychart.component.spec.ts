import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicychartComponent } from './policychart.component';

describe('PolicychartComponent', () => {
  let component: PolicychartComponent;
  let fixture: ComponentFixture<PolicychartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicychartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolicychartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
