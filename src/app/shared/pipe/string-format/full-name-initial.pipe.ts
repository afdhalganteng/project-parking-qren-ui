import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fullNameInitial',
})
export class FullNameInitialPipe implements PipeTransform {
    transform(value: string): string {
        const fullName = value;
        let initialName = '';
        const arr = fullName.split(' ');

        for (const i in arr) {
            initialName += arr[i].charAt(0).toUpperCase();
        }

        return initialName;
    }
}
