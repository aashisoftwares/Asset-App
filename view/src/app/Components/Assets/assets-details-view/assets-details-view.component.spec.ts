import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsDetailsViewComponent } from './assets-details-view.component';

describe('AssetsDetailsViewComponent', () => {
  let component: AssetsDetailsViewComponent;
  let fixture: ComponentFixture<AssetsDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
