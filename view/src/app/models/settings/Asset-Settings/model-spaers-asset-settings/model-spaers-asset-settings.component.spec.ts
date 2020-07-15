import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSpaersAssetSettingsComponent } from './model-spaers-asset-settings.component';

describe('ModelSpaersAssetSettingsComponent', () => {
  let component: ModelSpaersAssetSettingsComponent;
  let fixture: ComponentFixture<ModelSpaersAssetSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelSpaersAssetSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelSpaersAssetSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
