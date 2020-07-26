import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'abbreviateMiddleName',
})
export class AbbreviateMiddleNamePipe implements PipeTransform {
    transform(value: string): string {
        const splitName = value.split(' ');
        if (splitName.length >= 3) {
            for (let i = 1; i < splitName.length - 1; i++) {
                splitName[i] = splitName[i].charAt(0) + '.';
            }
        }
        return splitName.join(' ');
    }
}
