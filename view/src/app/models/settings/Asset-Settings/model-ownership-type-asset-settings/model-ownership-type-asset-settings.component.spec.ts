import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelOwnershipTypeAssetSettingsComponent } from './model-ownership-type-asset-settings.component';

describe('ModelOwnershipTypeAssetSettingsComponent', () => {
  let component: ModelOwnershipTypeAssetSettingsComponent;
  let fixture: ComponentFixture<ModelOwnershipTypeAssetSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelOwnershipTypeAssetSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelOwnershipTypeAssetSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
