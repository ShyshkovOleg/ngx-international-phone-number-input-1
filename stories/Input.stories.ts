// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CountryService } from 'projects/ngx-international-phone-number-input/src/lib/country.service';
import { NgxInternationalPhoneNumberInputComponent } from 'projects/ngx-international-phone-number-input/src/lib/ngx-international-phone-number-input.component';
import { NgxInternationalPhoneNumberInputModule } from 'projects/ngx-international-phone-number-input/src/lib/ngx-international-phone-number-input.module';
import { moduleMetadata } from '@storybook/angular';
import { CountryPipe } from 'projects/ngx-international-phone-number-input/src/lib/country.pipe';
import { action } from '@storybook/addon-actions';

const formGroup = new FormGroup({
  phone: new FormControl(''),
});

export default {
	title: 'Components/Input',
	component: NgxInternationalPhoneNumberInputComponent,
	decorators: [
		moduleMetadata({
			declarations: [NgxInternationalPhoneNumberInputComponent, CountryPipe],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [CountryService]
		}),
	],
  template: `
  <form [formGroup]="form">
    <international-phone-number-input
      [defaultCountry]="'+1'"
      [countryCodeSpace]="false"
      id="internationalPhone"
      [autoTouch]="true"
      [noUSCountryCode]="false"
      class="u-int-phone-number"
      [placeholder]="'type'"
      [maxlength]="15"
      name="phone"
      formControlName="phone"
      ngDefaultControl
    >
    </international-phone-number-input>
  </form>
  `,
	excludeStories: /.*Data$/,
} as Meta;

// export const actionsData = {
// 	onCountryCodeChanged: action('onCountryCodeChanged'),
// };

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<NgxInternationalPhoneNumberInputComponent> = (args: NgxInternationalPhoneNumberInputComponent) => ({
	component: NgxInternationalPhoneNumberInputComponent,
    props: args,
    form: formGroup
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  // defaultCountry:"us",
  // autoTouch: true,
  // noUSCountryCode: false,
  // placeholder: "Some placeholder",
  // maxlength: 13,
  // onCountryCodeChanged: actionsData.onCountryCodeChanged,
};
