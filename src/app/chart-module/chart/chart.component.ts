import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Currencies} from '../../shared/models/currencies';
import {Result} from '../../shared/models/result';
import {map} from 'rxjs/operators';
import {Chunk} from '../../shared/models/chunk';
import {ChartData} from '../../shared/models/chartData';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  currencies: Currencies;
  chartData: Observable<ChartData>;

  constructor(private apiService: ApiService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currencies = {...this.route.snapshot.data} as Currencies;
    this.chartData = this.apiService.getHistoricalData$(this.currencies).pipe(
      map((result: Result) => {
        const values = result.series.map((chunk: Chunk) => chunk.value);
        return {
          results: [result],
          min: Math.min(...values),
          max: Math.max(...values),
        };
      })
    );
  }
}
