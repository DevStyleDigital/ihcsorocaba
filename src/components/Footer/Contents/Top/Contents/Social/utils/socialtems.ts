import { ImageProps } from 'next/image';

import YoutubeVetor from '../../../../../../../assets/svg/youtube.svg';
// import FacebookVetor from '../../../../../../../assets/svg/facebook.svg';
import InstagramVetor from '../../../../../../../assets/svg/instagram.svg';

export const SOCIAL_ITEMS: {
  id: number;
  class: string;
  label: string;
  url: string;
  icon: ImageProps['src'];
}[] = [
  {
    id: 1,
    class: 'youtube',
    label: 'Youtube.',
    icon: YoutubeVetor,
    url: 'https://www.youtube.com/channel/UC3f6aZXgPXZnSqAMjJa2u3Q',
  },
  // {
  //   id: 2,
  //   class: 'facebook',
  //   label: 'Facebook.',
  //   icon: FacebookVetor,
  //   url: 'https://www.facebook.com/',
  // },
  {
    id: 3,
    class: 'instagram',
    label: 'Instagram.',
    icon: InstagramVetor,
    url: 'https://www.instagram.com/ihcsorocaba/',
  },
];
