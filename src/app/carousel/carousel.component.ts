import { Component } from '@angular/core';
import { CAROUSEL_SLIDES, CarouselSlide } from '../configs/carousel-config';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  standalone: false // <-- Garanta que está 'false' ou remova a linha
})
export class CarouselComponent {
  public slides: CarouselSlide[] = CAROUSEL_SLIDES;
  constructor() { }
}