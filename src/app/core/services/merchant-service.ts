import { Injectable } from '@angular/core';

import { ApiService } from 'app/core/http/api.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class MerchantApiService {
    constructor(private api: ApiService) { }

    /**
     *  Api get Lov Core
     *  @param  uri Uri for Core Lov
     */
    login(body: any) {
        return this.api.post("login-merchant", body);
    }

    findDaftarTarif(id) {
        return this.api.get("daftarTarif-merchant/" + id);
    }

    getAllDaftarTArif() {
        return this.api.get("tarif");
    }

    putTarif(id, body) {
        return this.api.put("daftarTarif/" + id, body);
    }
}