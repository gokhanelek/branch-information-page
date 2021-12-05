import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrator } from '../models/administrators';
import { HttpClientService } from './http.service';


@Injectable()
export class AdministratorsService {
    constructor(private httpClient: HttpClientService) { }

    getAdministrators(): Observable<Administrator[]> {
        const fullPath = 'administrators'
        return this.httpClient.get<Administrator[]>(fullPath);
    }
}