import { Pipe, PipeTransform } from '@angular/core';

import { AuthenticationService } from 'app/core/authentication/authentication.service';

import { AppConstant } from 'app/configs/app.config';

@Pipe({
    name: 'primeDateFormat',
})
export class PrimeDateFormatPipe implements PipeTransform {
    constructor(private authService: AuthenticationService) {}

    transform(value: any, args?: any): any {
        return AppConstant.primeMappingDateFormat['dd MMM yyyy'];
    }
}
