import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleHasSubComponentComponent } from './role-has-sub-component.component';

describe('RoleHasSubComponentComponent', () => {
  let component: RoleHasSubComponentComponent;
  let fixture: ComponentFixture<RoleHasSubComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleHasSubComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleHasSubComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
