import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'parseDateToValue',
})
export class ParseDateToValue implements PipeTransform {
    transform(value: Date, key?: string): string {
        let result: any;

        // TODO: toIso, toString, clean
        if (key === 'new') {
            result = new Date(value);
        }

        return result;
    }
}
