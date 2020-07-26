import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
    HttpResponse,
} from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { name, company, date, random } from 'faker';
import { format, getMonth, getYear } from 'date-fns';
import { id } from 'date-fns/locale';

import { IConfig } from '../../shared/models/config.interface';

import { environment } from 'app/../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class FakeApiService {
    public selectedId: string;
    public datum: any[] = [];
    public data: any;

    protected header = new HttpHeaders('Content-Type:application/json');

    constructor(private httpClient: HttpClient) {
        // this.genListOfDummy(25);
        // this.genSubListOfDummy(25);
    }

    /**
     *  Get HTTP Header
     *  @returns HttpHeaders
     */
    getHeaders(): HttpHeaders {
        return this.header;
    }

    handleError(err: HttpErrorResponse): Observable<any> {
        return throwError(err.error);
    }

    mapToAppResponse(response: HttpResponse<any>): any {
        return response.body;
    }

    // TODO: when insert model, you can generate all data based on datatype
    // TODO: using type check (typeof)

    /**
     * 	Generate Dummy data from Model
     * 	@param  length  Data length
     */
    genListOfDummy(length: number) {
        const range = ['2000-01-01', '2019-12-31'];

        // for (let i = 0; i <= length; i++) {
        // this.allPrepayment.push({
        //     id: random.uuid(),
        //     processingTime: new Date(
        //         date.between(range[0], range[1])
        //     ).toISOString(),
        //     year: getYear(new Date(date.between(range[0], range[1]))),
        //     period: format(
        //         new Date(date.between(range[0], range[1])),
        //         'MMMM',
        //         { locale: id }
        //     ),
        //     payrollGroup: company.companyName(),
        // });
        // }
    }

    /**
     *  Generate Dummy data from Sub Model
     * 	@param  length  Data length
     */
    genSubListOfDummy(length: number) {
        // for (let i = 0; i <= length; i++) {
        // this.listOfEmployee.push({
        //     id: random.uuid(),
        //     employeeId: 'PRMT-' + random.number(),
        //     name: name.firstName() + ' ' + name.lastName(),
        //     unit: name.jobArea(),
        //     job: name.jobType(),
        //     position: name.jobDescriptor(),
        //     takeHomePay: random.number(),
        // });
        // }
    }

    /**
     *  Get all fake data from Generator
     *
     *  @param   uri Uniform Resource Identifier
     *  @returns AppResponse
     */
    getAll(uri: string): Observable<any> {
        return from([this.datum]);
    }

    /**
     *  Get one fake data from Generator
     *
     *  @param   uri Uniform Resource Identifier
     *  @param   uuid Id
     *  @returns AppResponse
     */
    getOne(uri: string, uuid: string): Observable<any> {
        return from([this.datum.find(data => data.id === uuid)]);
    }

    /**
     *  Post data to API
     *
     *  @param   uri Uniform Resource Identifier
     *  @param   body Post Content
     *  @returns AppResponse
     */
    post(uri: string, body: object): Observable<any> {
        return this.httpClient
            .post(environment.apiUrl + uri, body, {
                headers: this.getHeaders(),
                observe: 'response',
            })
            .pipe(
                map(response => this.mapToAppResponse(response)),
                catchError(this.handleError)
            );
    }

    /**
     *  Put data to API
     *
     *  @param   uri Uniform Resource Identifier
     *  @param   body Put Content
     *  @returns AppResponse
     */
    put(uri: string, body: object): Observable<any> {
        return this.httpClient
            .put(environment.apiUrl + uri, body, {
                headers: this.getHeaders(),
                observe: 'response',
            })
            .pipe(
                map(response => this.mapToAppResponse(response)),
                catchError(this.handleError)
            );
    }

    /**
     *  Delete data from API
     *
     *  @param   uri Uniform Resource Identifier
     *  @returns AppResponse
     */
    delete(uri: string): Observable<any> {
        return this.httpClient
            .delete(environment.apiUrl + uri, {
                headers: this.getHeaders(),
                observe: 'response',
            })
            .pipe(
                map(response => this.mapToAppResponse(response)),
                catchError(this.handleError)
            );
    }

    /**
     *  Get fake session data
     *
     *  @returns AppResponse
     */
    getConfig(): Observable<IConfig> {
        const config: IConfig = {
            adminName: 'Administrator',
            permissions: ['admin'],
        };

        return from([config]);
    }
}
