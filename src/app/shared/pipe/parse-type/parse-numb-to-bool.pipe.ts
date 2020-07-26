import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'parseNumbToBool',
})
export class ParseNumbToBoolPipe implements PipeTransform {
    transform(value: number): boolean {
        if (value === 0 || value === 1) {
            return Boolean(value);
        }
    }
}
