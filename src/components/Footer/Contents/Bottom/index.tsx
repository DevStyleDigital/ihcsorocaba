import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import LogoVetor from '../../../../assets/svg/logo.svg';
import { ContainerCSS } from './styles';

export const BottomContent = () => {
  const router = useRouter();
  const imageLabel =
    'IHC, instituto Humberto de Campos - logo vetorizado triangular.';

  return (
    <ContainerCSS>
      <Image
        src={LogoVetor}
        alt={imageLabel}
        title={imageLabel}
        width={90}
        height={90}
        onClick={() => router.push('/')}
        style={{ cursor: 'pointer' }}
      />
      <span className="content-text">
        Intelligence By{' '}
        <Link href="https://coreag.com.br/" passHref>
          <a href="replace" target="_blank">
            Core.Ag
          </a>
        </Link>
      </span>
    </ContainerCSS>
  );
};
