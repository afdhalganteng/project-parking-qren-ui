import { Injectable } from '@angular/core';

import { ApiService } from 'app/core/http/api.service';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
    providedIn: 'root',
})
export class JuruService {
    constructor(private api: ApiService, private authService: AuthenticationService) { }

    geJuruList(merchant: any, page: any, limit: any) {

        const param = new HttpParams().set("page", page)
            .set("limit", limit)
            .set("merchant", this.authService.getSession().user.merchantApiKey);
        return this.api.get('JuruParkir', param).pipe(
            map((data) => {
                console.log("data", data);

                return data;
            })
        );
    }

    getByIdJuru(id) {
        return this.api.get("JuruParkir/" + id);
    }

    update(body) {
        return this.api.put("JuruParkir/" + body.idJuru, body);

    }

    delete(id) {
        return this.api.delete("JuruParkir/" + id);
    }

    post(body) {
        return this.api.post("JuruParkir", body);
    }
}