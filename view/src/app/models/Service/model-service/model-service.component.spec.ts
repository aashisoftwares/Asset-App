import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelServiceComponent } from './model-service.component';

describe('ModelServiceComponent', () => {
  let component: ModelServiceComponent;
  let fixture: ComponentFixture<ModelServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
