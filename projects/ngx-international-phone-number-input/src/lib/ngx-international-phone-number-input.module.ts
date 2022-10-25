import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountryPipe } from './country.pipe';
import { CountryService } from './country.service';
import { NgxInternationalPhoneNumberInputComponent } from './ngx-international-phone-number-input.component';
import { PhoneMaskCursorProcessorDirective } from './phone.directive';

@NgModule({
  declarations: [
    NgxInternationalPhoneNumberInputComponent,
    CountryPipe,
    PhoneMaskCursorProcessorDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NgxInternationalPhoneNumberInputComponent,
    CountryPipe
  ],
  providers: [CountryService]
})
export class NgxInternationalPhoneNumberInputModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: NgxInternationalPhoneNumberInputModule,
      providers: [CountryService]
    };
  }
}
