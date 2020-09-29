import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnershipTypesComponent } from './ownership-types.component';

describe('OwnershipTypesComponent', () => {
  let component: OwnershipTypesComponent;
  let fixture: ComponentFixture<OwnershipTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnershipTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnershipTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
