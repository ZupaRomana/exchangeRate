import {Component, OnInit} from '@angular/core';
import {ApiService} from './services/api.service';
import {Observable} from 'rxjs';
import {ExchangeRate} from './models/exchangeRate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  rate$: Observable<ExchangeRate>;
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.rate$ = this.apiService.getExchangeRate$({base: 'EUR', to: 'PLN'});
  }
}
