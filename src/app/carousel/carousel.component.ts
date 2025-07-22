import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { CAROUSEL_SLIDES, CarouselSlide } from '../configs/carousel-config'

// Instala os módulos do Swiper
Swiper.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit {

  public slides: CarouselSlide[] = CAROUSEL_SLIDES;

  constructor() { }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper-container', {
      // Configurações opcionais
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      // Paginação (as bolinhas)
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      // Botões de navegação (as setas)
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}