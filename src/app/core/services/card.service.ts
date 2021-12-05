import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';
import { HttpClientService } from './http.service';


@Injectable()
export class CardService {
    constructor(private httpClient: HttpClientService) { }

    getCards(): Observable<Card> {
        const fullPath = 'cards'
        return this.httpClient.get<Card>(fullPath);
    }
}