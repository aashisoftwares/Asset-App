import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelAssetsubgroupAssetSettingsComponent } from './model-assetsubgroup-asset-settings.component';

describe('ModelAssetsubgroupAssetSettingsComponent', () => {
  let component: ModelAssetsubgroupAssetSettingsComponent;
  let fixture: ComponentFixture<ModelAssetsubgroupAssetSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelAssetsubgroupAssetSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelAssetsubgroupAssetSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
