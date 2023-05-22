import Image from 'next/image';
import { ContainerCSS } from './styles';

export const KidsBanner = () => {
  return (
    <ContainerCSS id="project" data-internal-link>
      <p>
        Cuidando de <br /> crianças e adolescentes <br /> para um futuro
        brilhante.
      </p>

      <div className="image-container">
        <Image
          src="/img/kids-banner.png"
          alt="Crianças deitadas na grama sorrindo, com as mão nos olhos e olhando para o céu."
          width={2000}
          height={1200}
          layout="responsive"
        />
      </div>
    </ContainerCSS>
  );
};
