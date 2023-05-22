import Image from 'next/image';
import { useRouter } from 'next/router';
import { useLayoutContext } from '@contexts/Layout/useLayoutContext';

import { Navigation } from './Navigation';
import { ContainerCSS } from './styles';

import LogoWhiteVetor from '../../assets/svg/logo-white.svg';

export const Header = () => {
  const { isSpecialPage } = useLayoutContext();
  const router = useRouter();
  const imageLabel =
    'IHC, instituto Humberto de Campos - logo vetorizado triangular.';

  return (
    <ContainerCSS>
      <div className="content mx-w">
        <div
          className="logo"
          style={{ width: isSpecialPage ? '100%' : undefined }}
        >
          <Image
            src={LogoWhiteVetor}
            alt={imageLabel}
            title={imageLabel}
            width={90}
            height={90}
            tabIndex={0}
            onClick={() => router.push('/')}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <Navigation />
      </div>
    </ContainerCSS>
  );
};
