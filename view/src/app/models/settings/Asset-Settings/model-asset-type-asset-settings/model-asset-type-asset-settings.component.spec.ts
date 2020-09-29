import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelAssetTypeAssetSettingsComponent } from './model-asset-type-asset-settings.component';

describe('ModelAssetTypeAssetSettingsComponent', () => {
  let component: ModelAssetTypeAssetSettingsComponent;
  let fixture: ComponentFixture<ModelAssetTypeAssetSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelAssetTypeAssetSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelAssetTypeAssetSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
