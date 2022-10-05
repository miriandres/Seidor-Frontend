import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeidorApiService {

  url : string = 'https://run.mocky.io/v3/5fd5b0a0-7cec-4ccf-bdec-b9c99c78e29f'

  constructor(
    private _http: HttpClient
  ) { }

  getData() {
    return this._http.get(`${this.url}`)
  }
}
