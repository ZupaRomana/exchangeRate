import {Injectable, OnDestroy} from '@angular/core';
import {ExchangeRate} from '../models/exchangeRate';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {currencies} from '../../config/config';
import {ApiService} from '../services/api.service';
import {takeUntil, tap} from 'rxjs/operators';
import {CarouselItem} from './carouselItem';

@Injectable({
  providedIn: 'root'
})
export class CarouselService implements OnDestroy {

  private index = 0;
  carouselItem = new BehaviorSubject<CarouselItem>(null);
  unsubscribe = new Subject<void>();

  constructor(private apiService: ApiService) {
    this.apiService.getExchangeRate(currencies[this.index++]).pipe(
      takeUntil(this.unsubscribe),
      tap((exchangeRate: ExchangeRate) => this.carouselItem.next({
          ...exchangeRate,
          backgroundUrl: `https://placekitten.com/200/300`
        })
      )
    ).subscribe();
  }

  getCarouselItem(): Observable<CarouselItem> {
    return this.carouselItem.asObservable();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
