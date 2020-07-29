import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {chartData} from '../../config/config';
import {Currencies} from '../models/currencies';
import {map} from 'rxjs/operators';
import {ExchangeRate} from '../models/exchangeRate';
import {Result} from '../models/result';
import {Chunk} from '../models/chunk';

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

  getHistoricalData$(currencies: Currencies): Observable<Result> {
    return this.http.get(`https://api.exchangeratesapi.io/history?start_at=${chartData.dateFrom}&end_at=${chartData.dateTo}&base=${currencies.base}&symbols=${currencies.to}`).pipe(
      map((data: {rates}) => {
        const result: Result = {
          name: currencies.to,
          series: []
        };

        for (const date in data.rates) {
          if (data.rates.hasOwnProperty(date)) {
            result.series.push({
              name: date,
              value: +parseFloat(data.rates[date][currencies.to]).toFixed(2)
            });
          }
        }

        result.series.sort(((a: Chunk, b: Chunk) => (a.name > b.name) ? 1 : -1));

        return result;
      })
    );
  }
}
