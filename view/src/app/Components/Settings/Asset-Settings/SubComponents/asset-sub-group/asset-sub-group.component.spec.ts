import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetSubGroupComponent } from './asset-sub-group.component';

describe('AssetSubGroupComponent', () => {
  let component: AssetSubGroupComponent;
  let fixture: ComponentFixture<AssetSubGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetSubGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetSubGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
