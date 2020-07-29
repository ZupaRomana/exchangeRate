import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Currencies} from '../../models/currencies';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  data: Observable<string>;

  constructor(private apiService: ApiService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const currencies = {...this.route.snapshot.data} as Currencies;
    this.data = this.apiService.getHistoricalData$(currencies);
  }

}
