import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule, Routes} from '@angular/router';
import {ChartComponent} from './chart/chart.component';

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
    RouterModule.forChild(routes)
  ]
})
export class ChartsModule { }
