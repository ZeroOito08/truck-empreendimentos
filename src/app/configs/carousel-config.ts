// Local: src/app/configs/carousel-config.ts

// A palavra 'export' aqui é essencial.
export interface CarouselSlide {
  src: string;
  alt: string;
  text: string;
}

// A palavra 'export' aqui também é essencial.
export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    src: 'assets/images/carousel/caminhao-estrada.jpg',
    alt: 'Caminhão em uma estrada ao pôr do sol',
    text: 'TRUCK EMPREENDIMENTOS'
  },
  {
    src: 'assets/images/carousel/paineis-solares.jpg',
    alt: 'Campo com painéis solares refletindo o céu',
    text: 'Inovação e Sustentabilidade'
  },
  {
    src: 'assets/images/carousel/imovel-moderno.jpg',
    alt: 'Interior de um imóvel moderno e bem iluminado',
    text: 'Construindo o Futuro'
  }
];