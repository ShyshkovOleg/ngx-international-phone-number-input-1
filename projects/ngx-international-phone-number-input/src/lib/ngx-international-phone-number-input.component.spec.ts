import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInternationalPhoneNumberInputComponent } from './ngx-international-phone-number-input.component';

describe('NgxInternationalPhoneNumberInputComponent', () => {
  let component: NgxInternationalPhoneNumberInputComponent;
  let fixture: ComponentFixture<NgxInternationalPhoneNumberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxInternationalPhoneNumberInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxInternationalPhoneNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
