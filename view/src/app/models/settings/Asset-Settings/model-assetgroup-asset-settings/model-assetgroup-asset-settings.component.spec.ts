import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelAssetgroupAssetSettingsComponent } from './model-assetgroup-asset-settings.component';

describe('ModelAssetgroupAssetSettingsComponent', () => {
  let component: ModelAssetgroupAssetSettingsComponent;
  let fixture: ComponentFixture<ModelAssetgroupAssetSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelAssetgroupAssetSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelAssetgroupAssetSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
