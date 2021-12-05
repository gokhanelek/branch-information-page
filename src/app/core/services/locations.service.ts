import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationResponse } from '../models/locations'
import { HttpClientService } from './http.service';


@Injectable()
export class LocationsService {
    constructor(private httpClient: HttpClientService) { }

    getLocations(): Observable<LocationResponse[]> {
        const fullPath = 'locations'
        return this.httpClient.get<LocationResponse[]>(fullPath);
    }
}