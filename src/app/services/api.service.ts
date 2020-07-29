import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Currencies} from '../models/currencies';
import {map} from 'rxjs/operators';
import {ExchangeRate} from '../models/exchangeRate';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getExchangeRate$(currencies: Currencies): Observable<ExchangeRate> {
    return this.http.get(`${environment.apiUrl}/latest?base=${currencies.base}&symbols=${currencies.to}`)
      .pipe(
        map((data: { rates }) => {
          return {
            ...currencies,
            rate: data.rates[currencies.to]
          };
        })
      );
  }
}
