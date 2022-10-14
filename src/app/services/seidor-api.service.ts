import { Info } from './../interfaces/info';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeidorApiService {

  url : string = 'https://run.mocky.io/v3/5fd5b0a0-7cec-4ccf-bdec-b9c99c78e29f'

  constructor(
    private _http: HttpClient
  ) { }

  getData() {
    return this._http.get<Info>(`${this.url}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
