import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPermissionsGroupCreateComponent } from './users-permissions-group-create.component';

describe('UsersPermissionsGroupCreateComponent', () => {
  let component: UsersPermissionsGroupCreateComponent;
  let fixture: ComponentFixture<UsersPermissionsGroupCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersPermissionsGroupCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPermissionsGroupCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
