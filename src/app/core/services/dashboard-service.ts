import { Injectable } from '@angular/core';

import { ApiService } from 'app/core/http/api.service';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../authentication/authentication.service';
import { onConstructPieChart, onConstructBarChart } from './construct-chart';
import { stat } from 'fs';

@Injectable({
    providedIn: 'root',
})
export class DashboardService {
    constructor(private api: ApiService, private authService: AuthenticationService) { }



    geJuruListStatus(merchant?: any) {

        const param = merchant ? new HttpParams()
            .set("merchant", this.authService.getSession().user.merchantApiKey).set("status", merchant) :
            new HttpParams()
                .set("merchant", this.authService.getSession().user.merchantApiKey)

        const uri = merchant ? "transaksi-report-status" : "transaksi-report-merchant"


        return this.api.get(uri, param).pipe(
            map((data) => {
                console.log("data", data);

                return data;
            })
        );
    }

    getJuruAll() {
        const param = new HttpParams()
            .set("merchant", this.authService.getSession().user.merchantApiKey);
        return this.api.get('transaksi-report-merchant', param);
    }

    getJuruAllStatus(status) {
        const param = new HttpParams()
            .set("merchant", this.authService.getSession().user.merchantApiKey)
            .set("status", status);
        return this.api.get('transaksi-report-merchant', param);
    }

    geJuruListDate(merchant: any) {

        const param = new HttpParams()
            .set("start", merchant.start)
            .set("end", merchant.end)
            .set("merchant", this.authService.getSession().user.merchantApiKey);
        return this.api.get('transaksi-report', param).pipe(
            map((data) => {
                console.log("data", data);

                return data;
            })
        );
    }


    getCount() {

        return this.api.get('transaksi-count/' + this.authService.getSession().user.merchantApiKey).pipe(
            map((data) => {
                console.log("data", data);
                const labels: string[] = [];
                const datum: any[] = [];
                let datas: any[] = Object.keys(data)

                datas.forEach(item => {
                    labels.push(item);
                    datum.push(data[item]);
                });

                return onConstructBarChart(labels, datum, "Kendaraan");

            })
        );

    }


}