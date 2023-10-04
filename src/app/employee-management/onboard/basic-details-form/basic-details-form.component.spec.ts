import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDetailsFormComponent } from './basic-details-form.component';

describe('BasicDetailsFormComponent', () => {
  let component: BasicDetailsFormComponent;
  let fixture: ComponentFixture<BasicDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
