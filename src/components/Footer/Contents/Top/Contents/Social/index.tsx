import Image from 'next/image';
import Link from 'next/link';

import { SOCIAL_ITEMS } from './utils/socialtems';
import { ContainerCSS } from './styles';

export const Social = () => {
  return (
    <ContainerCSS>
      {SOCIAL_ITEMS.map((item) => (
        <div className="item" key={item.id}>
          <Link href={item.url} passHref aria-label={item.label}>
            <a href="replace" className={item.class}>
              <Image src={item.icon} alt={item.label} width={30} height={30} />
            </a>
          </Link>
        </div>
      ))}
    </ContainerCSS>
  );
};
