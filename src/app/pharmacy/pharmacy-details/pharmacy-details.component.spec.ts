import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyDetailsComponent } from './pharmacy-details.component';

describe('PharmacyDetailsComponent', () => {
  let component: PharmacyDetailsComponent;
  let fixture: ComponentFixture<PharmacyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
