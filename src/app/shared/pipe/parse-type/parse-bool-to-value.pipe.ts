import { Pipe, PipeTransform } from '@angular/core';

interface Dictionary {
    t: string;
    f: string;
}

@Pipe({
    name: 'parseBoolToValue',
})
export class ParseBoolToValue implements PipeTransform {
    private dictionaries: Dictionary[];

    prop<T, K extends keyof T>(obj: T, key: K) {
        return obj[key];
    }

    constructor() {
        this.dictionaries = [
            {
                t: 'true',
                f: 'false',
            },
            {
                t: 'yes',
                f: 'no',
            },
            {
                t: 'active',
                f: 'inactive',
            },
        ];
    }

    transform(value: boolean, type = 'true'): string {
        let result: object[];

        result = this.dictionaries.filter(dic => {
            // @ts-ignore
            const val = this.prop(dic, 't');
            const item = val ? val.toString() : '';

            return item.toLowerCase().includes(type.toLowerCase());
        });

        if (result.length === 1) {
            if (value) {
                // @ts-ignore
                return this.prop(result[0], 't');
            } else {
                // @ts-ignore
                return this.prop(result[0], 'f');
            }
        }

        return value ? 'true' : 'false';
    }
}
