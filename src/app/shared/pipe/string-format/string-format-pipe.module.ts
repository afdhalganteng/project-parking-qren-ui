import { NgModule } from '@angular/core';

import { FullNameInitialPipe } from './full-name-initial.pipe';
import { AbbreviateMiddleNamePipe } from './abbreviate-middle-name.pipe';
import { RemoveSpacesPipe } from './remove-spaces.pipe';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
    declarations: [
        FullNameInitialPipe,
        AbbreviateMiddleNamePipe,
        RemoveSpacesPipe,
        TruncatePipe,
    ],
    exports: [
        FullNameInitialPipe,
        AbbreviateMiddleNamePipe,
        RemoveSpacesPipe,
        TruncatePipe,
    ],
})
export class StringFormatPipeModule {}
