import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumgraphComponent } from './premiumgraph.component';

describe('PremiumgraphComponent', () => {
  let component: PremiumgraphComponent;
  let fixture: ComponentFixture<PremiumgraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiumgraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PremiumgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
