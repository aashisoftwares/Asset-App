import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelVendorsAssetSettingsComponent } from './model-vendors-asset-settings.component';

describe('ModelVendorsAssetSettingsComponent', () => {
  let component: ModelVendorsAssetSettingsComponent;
  let fixture: ComponentFixture<ModelVendorsAssetSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelVendorsAssetSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelVendorsAssetSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
