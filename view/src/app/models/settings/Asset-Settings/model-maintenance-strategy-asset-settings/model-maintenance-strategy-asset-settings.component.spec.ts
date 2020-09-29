import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelMaintenanceStrategyAssetSettingsComponent } from './model-maintenance-strategy-asset-settings.component';

describe('ModelMaintenanceStrategyAssetSettingsComponent', () => {
  let component: ModelMaintenanceStrategyAssetSettingsComponent;
  let fixture: ComponentFixture<ModelMaintenanceStrategyAssetSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelMaintenanceStrategyAssetSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelMaintenanceStrategyAssetSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
