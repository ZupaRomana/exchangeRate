import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CarouselService} from './carousel.service';
import {CarouselItem} from './carouselItem';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  carouselItem: Observable<CarouselItem>;

  constructor(private carouselService: CarouselService) { }

  ngOnInit(): void {
    this.carouselItem = this.carouselService.getCarouselItem();
  }

  setItem(order: 'next' | 'previous'): void {
    this.carouselService.emitItem(order);
  }
}
