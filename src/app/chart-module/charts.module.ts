import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ChartComponent} from './chart/chart.component';
import {LineChartModule} from '@swimlane/ngx-charts';
import {chartData} from '../../config/config';

const routes: Routes = [
  { path: '', redirectTo: ''},
  { path: chartData.name, component: ChartComponent, data: { base: chartData.currencies.base, to: chartData.currencies.to }}
];

@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LineChartModule
  ]
})
export class ChartsModule { }
