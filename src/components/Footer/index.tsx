import Image from 'next/image';
import { BottomContent } from './Contents/Bottom';
import { TopContent } from './Contents/Top';

import FooterBlobVetor from '../../assets/svg/footer-blob.svg';

import { ContainerCSS } from './styles';

export const Footer = () => {
  return (
    <ContainerCSS id="contact" data-internal-link>
      <TopContent />
      <div className="background">
        <div className="content">
          <Image
            src={FooterBlobVetor}
            alt=""
            aria-hidden
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
      <BottomContent />
    </ContainerCSS>
  );
};
