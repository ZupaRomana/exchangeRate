import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ChartComponent} from './chart/chart.component';
import {LineChartModule} from '@swimlane/ngx-charts';

const routes: Routes = [
  { path: '', redirectTo: ''},
  { path: 'zloty', component: ChartComponent, data: { base: 'EUR', to: 'PLN' }}
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
