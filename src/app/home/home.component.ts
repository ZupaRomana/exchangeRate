import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ExchangeRate} from '../models/exchangeRate';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  rate$: Observable<ExchangeRate>;
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.rate$ = this.apiService.getExchangeRate$({base: 'EUR', to: 'PLN'});
  }
}
