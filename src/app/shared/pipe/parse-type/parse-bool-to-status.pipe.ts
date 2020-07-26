import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'parseBoolToStatus',
})
export class ParseBoolToStatusPipe implements PipeTransform {
    transform(value: boolean, key?: string): string {
        return value ? 'active' : 'inactive';
    }
}
