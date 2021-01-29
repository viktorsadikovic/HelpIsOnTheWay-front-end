import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicsTypeComponent } from './clinics-type.component';

describe('ClinicsTypeComponent', () => {
  let component: ClinicsTypeComponent;
  let fixture: ComponentFixture<ClinicsTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicsTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
