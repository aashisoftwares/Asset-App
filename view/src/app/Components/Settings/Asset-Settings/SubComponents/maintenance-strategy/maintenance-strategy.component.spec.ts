import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceStrategyComponent } from './maintenance-strategy.component';

describe('MaintenanceStrategyComponent', () => {
  let component: MaintenanceStrategyComponent;
  let fixture: ComponentFixture<MaintenanceStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
