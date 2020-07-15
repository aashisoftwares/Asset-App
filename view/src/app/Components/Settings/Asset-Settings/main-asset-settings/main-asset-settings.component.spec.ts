import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAssetSettingsComponent } from './main-asset-settings.component';

describe('MainAssetSettingsComponent', () => {
  let component: MainAssetSettingsComponent;
  let fixture: ComponentFixture<MainAssetSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAssetSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAssetSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
