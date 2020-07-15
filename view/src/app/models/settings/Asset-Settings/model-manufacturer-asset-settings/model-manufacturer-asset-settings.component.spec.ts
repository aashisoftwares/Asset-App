import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelManufacturerAssetSettingsComponent } from './model-manufacturer-asset-settings.component';

describe('ModelManufacturerAssetSettingsComponent', () => {
  let component: ModelManufacturerAssetSettingsComponent;
  let fixture: ComponentFixture<ModelManufacturerAssetSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelManufacturerAssetSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelManufacturerAssetSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
