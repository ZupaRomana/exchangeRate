import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'chart',
    loadChildren: () => import('./chart-module/charts.module').then(m => m.ChartsModule)
  },
  {path: '**', redirectTo: ''}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
