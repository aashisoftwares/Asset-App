import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSparetypesAssetSettingsComponent } from './model-sparetypes-asset-settings.component';

describe('ModelSparetypesAssetSettingsComponent', () => {
  let component: ModelSparetypesAssetSettingsComponent;
  let fixture: ComponentFixture<ModelSparetypesAssetSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelSparetypesAssetSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelSparetypesAssetSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
