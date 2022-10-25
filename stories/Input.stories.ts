// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CountryService } from 'projects/ngx-international-phone-number-input/src/lib/country.service';
import { NgxInternationalPhoneNumberInputComponent } from 'projects/ngx-international-phone-number-input/src/lib/ngx-international-phone-number-input.component';
import { NgxInternationalPhoneNumberInputModule } from 'projects/ngx-international-phone-number-input/src/lib/ngx-international-phone-number-input.module';
import { moduleMetadata } from '@storybook/angular';
import { CountryPipe } from 'projects/ngx-international-phone-number-input/src/lib/country.pipe';

export default {
	title: 'Components/Input',
	component: NgxInternationalPhoneNumberInputComponent,
	decorators: [
		moduleMetadata({
			declarations: [NgxInternationalPhoneNumberInputComponent, CountryPipe],
      // imports: [NgxInternationalPhoneNumberInputModule],
      providers: [CountryService]
		}),
	],
  // template: ``,
	excludeStories: /.*Data$/,
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<NgxInternationalPhoneNumberInputComponent> = (args: NgxInternationalPhoneNumberInputComponent) => ({
	component: NgxInternationalPhoneNumberInputComponent,
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  defaultCountry:"us",
  autoTouch: true,
  noUSCountryCode: false,
  placeholder: "Some placeholder",
  maxlength: 13,
};
