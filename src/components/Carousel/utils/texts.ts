import { CarouselContentProps } from '../CarouselContent';

export const texts: {
  [key in 'SorocabaBanner' | 'KidsBanner']: CarouselContentProps['texts'];
} = {
  SorocabaBanner: [
    {
      id: 1,
      textColor: 'primary',
      backgroundColor: 'white',
      fontFamily: 'secondary',
      fontSize: '1.25rem',
      text: 'Contribuir para',
    },
    {
      id: 2,
      textColor: 'primary',
      backgroundColor: 'white',
      fontFamily: 'secondary',
      fontSize: '1.25rem',
      text: 'uma Sorocaba',
    },
    {
      id: 3,
      textColor: 'secondary',
      backgroundColor: 'primary',
      fontFamily: 'primary',
      fontSize: '1rem',
      text: 'mais justa',
    },
  ],
  KidsBanner: [
    {
      id: 1,
      textColor: 'primary',
      backgroundColor: 'white',
      fontFamily: 'secondary',
      fontSize: '1.25rem',
      text: 'Cuidar e criar',
    },
    {
      id: 2,
      textColor: 'primary',
      backgroundColor: 'white',
      fontFamily: 'secondary',
      fontSize: '1.25rem',
      text: 'oportunidades para',
    },
    {
      id: 3,
      textColor: 'secondary',
      backgroundColor: 'transparent',
      fontFamily: 'primary',
      fontSize: '1rem',
      text: 'um Brasil melhor',
    },
  ],
};
