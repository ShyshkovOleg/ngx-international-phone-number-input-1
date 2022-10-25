import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[phone]'
})

/**
 * A directive that forces the cursor to the next available position in the input to avoid problem
 * where user could click in middle of input and leave spaces
 * https://github.com/text-mask/text-mask/issues/733
 */
export class PhoneMaskCursorProcessorDirective {

    @HostListener('click', ['$event', '$event.target'])
    keypress(event: MouseEvent, target: HTMLInputElement) {
        target.focus();

        if (target.selectionEnd! <= 2) {
            target.setSelectionRange(2, 2);
        } else {
            const valueSelected = target.value.substring(0, target.selectionEnd!);
            const match = valueSelected.match(/\d/gi);
            let lastDigitIndexInSelection = valueSelected.lastIndexOf(match![match!.length - 1]) + 1;
            if (target.value.substring(lastDigitIndexInSelection, lastDigitIndexInSelection + 1).match(/[-\s]/)) {
                lastDigitIndexInSelection++;
            }
            target.setSelectionRange(lastDigitIndexInSelection, lastDigitIndexInSelection);
        }
    }
}
