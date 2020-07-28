import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  constructor(private http: HttpClient) { }

  getExchangeRate(): Observable<string> {
    return this.http.get<string>('https://api.exchangeratesapi.io/latest');
  }
}
