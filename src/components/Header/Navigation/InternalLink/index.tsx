import Link from 'next/link';

import { ContainerCSS } from './styles';

interface InternalLinkProps {
  children: React.ReactNode;
  href: string;
  activeLink: string;
  onClick?: () => void;
}
export const InternalLink = ({
  children,
  href,
  activeLink,
  onClick,
}: InternalLinkProps) => {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const targetLocation = (document.querySelector(href) as HTMLElement | null)
      ?.offsetTop;

    if (targetLocation !== undefined) {
      window.scrollTo({
        top: targetLocation - 100,
        left: 0,
      });
    }
  }

  return (
    <ContainerCSS isActive={activeLink === href} onClick={onClick}>
      <Link
        href={href}
        aria-describedby={href.split('#')[1]}
        scroll={false}
        passHref
      >
        <a href="replace" onClick={(e) => handleClick(e)}>
          {children}
        </a>
      </Link>
    </ContainerCSS>
  );
};
