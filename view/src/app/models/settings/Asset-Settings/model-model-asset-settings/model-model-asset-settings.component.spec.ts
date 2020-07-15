import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelModelAssetSettingsComponent } from './model-model-asset-settings.component';

describe('ModelModelAssetSettingsComponent', () => {
  let component: ModelModelAssetSettingsComponent;
  let fixture: ComponentFixture<ModelModelAssetSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelModelAssetSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelModelAssetSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
