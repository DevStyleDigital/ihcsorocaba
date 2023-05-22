import Image, { type ImageProps } from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useLayoutContext } from '@contexts/Layout/useLayoutContext';
import { CarouselContent } from './CarouselContent';

import { texts } from './utils/texts';

import { ContainerCSS, breakLayoutWidth } from './styles';

export const HeroCarousel = () => {
  const { currWidth } = useLayoutContext();

  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay(
      {
        delay: 10 * 1000, // in milliseconds: 1000 = 1 seconds
        stopOnInteraction: false,
      },
      (emblaRoot) => emblaRoot.parentElement,
    ),
  ]);

  const imageLayout: ImageProps = {
    ...(currWidth > breakLayoutWidth
      ? { layout: 'responsive', src: 'replace', width: 4488, height: 1348 }
      : { layout: 'fill', objectFit: 'cover', src: 'replace' }),
  };

  return (
    <section id="hero" data-internal-link>
      <ContainerCSS>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <CarouselContent texts={texts.SorocabaBanner} />
              <Image
                {...imageLayout}
                src="/img/sorocaba-hero-banner.png"
                alt="Cidade de Sorocaba, vista de cima, com diversos prédios e moradias."
                priority
              />
            </div>
            <div className="embla__slide">
              <CarouselContent texts={texts.KidsBanner} />
              <Image
                {...imageLayout}
                src="/img/kids-hero-banner.png"
                alt="Crianças Sorrindo, olhando para a tela."
                priority
              />
            </div>
          </div>
        </div>
      </ContainerCSS>
    </section>
  );
};
