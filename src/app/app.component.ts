import {Component, OnInit} from '@angular/core';
import {ExchangeRateService} from './services/exchange-rate.service';
import {Observable} from 'rxjs';
import {ExchangeRate} from './models/exchangeRate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  rate: Observable<ExchangeRate>;
  constructor(private exchangeRateService: ExchangeRateService) {
  }

  ngOnInit(): void {
    this.rate = this.exchangeRateService.getExchangeRate({base: 'EUR', to: 'PLN'});
  }
}
