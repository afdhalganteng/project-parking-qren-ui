import { MetaReducer } from '@ngrx/store';

import { environment } from 'app/../environments/environment';

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
