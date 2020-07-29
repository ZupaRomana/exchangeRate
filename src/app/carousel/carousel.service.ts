import {Injectable, OnDestroy} from '@angular/core';
import {ExchangeRate} from '../models/exchangeRate';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {currenciesCarouselItems} from '../../config/config';
import {ApiService} from '../services/api.service';
import {takeUntil, tap} from 'rxjs/operators';
import {CarouselItem} from '../models/carouselItem';
import {getDimensions} from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class CarouselService implements OnDestroy {
  private index = 0;
  private interval;
  carouselItem$ = new BehaviorSubject<CarouselItem>(null);
  unsubscribe$ = new Subject<void>();

  constructor(private apiService: ApiService) {
    this.emitItem('next');
  }

  emitItem(order: 'next' | 'previous'): void {
    this.emitSubsequentItem(order);
    this.setupInterval();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getCarouselItem$(): Observable<CarouselItem> {
    return this.carouselItem$.asObservable();
  }

  private emitSubsequentItem(order: 'next' | 'previous'): void {
    const dimensions = getDimensions();
    this.setIndex(order);
    this.apiService.getExchangeRate$(currenciesCarouselItems[this.index]).pipe(
      takeUntil(this.unsubscribe$),
      tap((exchangeRate: ExchangeRate) => this.carouselItem$.next({
          ...exchangeRate,
          backgroundUrl: `https://placekitten.com/${dimensions.width}/${dimensions.height}`
        })
      )
    ).subscribe();
  }

  private setIndex(order: 'next' | 'previous'): void {
    if (order === 'next') {
      this.index + 1 === currenciesCarouselItems.length ? this.index = 0 : this.index++;
    } else {
      this.index === 0 ? this.index = currenciesCarouselItems.length - 1 : this.index--;
    }
  }

  private setupInterval(): void {
    clearInterval(this.interval);
    this.interval = setInterval(() => this.emitSubsequentItem('next'), 2000);
  }
}
