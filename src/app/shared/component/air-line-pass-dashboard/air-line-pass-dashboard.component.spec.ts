import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirLinePassDashboardComponent } from './air-line-pass-dashboard.component';

describe('AirLinePassDashboardComponent', () => {
  let component: AirLinePassDashboardComponent;
  let fixture: ComponentFixture<AirLinePassDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirLinePassDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirLinePassDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
