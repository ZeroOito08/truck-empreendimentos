// Definindo a interface CarouselSlide
export interface CarouselSlide {
  src: string;
  alt: string;
  text: string;
}

// Exportando a constante com os dados dos slides
export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    src: 'assets/images/carousel/ciclo_pneu_truck.jpg',
    alt: 'Truck PNEUS - Ciclo do PNEU',
    text: 'Ciclo do PNEU - Soluções de Alta Performance'
  },
  {
    src: 'assets/images/carousel/banner_truck_energia_1.jpg',
    alt: 'Truck Energia',
    text: 'Energia Sustentável para o Futuro'
  },
  {
    src: 'assets/images/carousel/banner_truck_imoveis_1.jpg',
    alt: 'Truck Imoveis',
    text: 'Imóveis de Alta Qualidade para Você'
  }
];
