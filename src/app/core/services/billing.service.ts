import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Billing } from '../models/billing';
import { HttpClientService } from './http.service';


@Injectable()
export class BillingService {
    constructor(private httpClient: HttpClientService) { }

    getBillings(): Observable<Billing[]> {
        const fullPath = 'billing'
        return this.httpClient.get<Billing[]>(fullPath);
    }
}