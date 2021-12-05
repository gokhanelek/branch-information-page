import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usage } from '../models/usage';
import { HttpClientService } from './http.service';


@Injectable()
export class UsageService {
    constructor(private httpClient: HttpClientService) { }

    getUsage(): Observable<Usage> {
        const fullPath = 'usage'
        return this.httpClient.get<Usage>(fullPath);
    }
}