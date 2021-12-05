import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class HttpClientService {
    protected BASE_API_URL = environment.api_url;
    constructor(private http: HttpClient) { }

    createAuthorizationHeader(headers: HttpHeaders): HttpHeaders {
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('version', '2');

        return headers;
    }

    public get<T>(url: string, isDocument?: boolean, isText?: boolean): Observable<any> {
        let headers = new HttpHeaders();
        headers = this.createAuthorizationHeader(headers);

        if (isDocument) {
            return this.http
                .get(this.BASE_API_URL + url, { headers: headers, responseType: 'blob' })
                .pipe(catchError(this.handleError));
        }

        if (isText) {
            headers = headers.append('Content-Type', 'text/plain; charset=utf-8');
            return this.http
                .get(this.BASE_API_URL + url, { headers: headers, responseType: 'text' })
                .pipe(catchError(this.handleError));
        }

        return this.http
            .get<T>(this.BASE_API_URL + url, { headers: headers })
            .pipe(catchError(this.handleError));
    }

    public post<T>(url: string, data: string = '', isEncoded: boolean = false): Observable<any> {
        let headers = new HttpHeaders();
        headers = this.createAuthorizationHeader(headers);

        if (isEncoded) {
            headers = headers.append('Accept-Encoding', 'gzip, deflate, br');
        }
        return this.http
            .post<T>(this.BASE_API_URL + url, data, { headers: headers })
            .pipe(catchError(this.handleError));
    }

    public handleError(response: any) {
        const errorBody = response.error;
        if (response.status === 401) {
            console.log('You are not authorized');
        } else if (response.status === 403) {
            console.log(errorBody.message);
        }
        return observableThrowError(errorBody);
    }

}

