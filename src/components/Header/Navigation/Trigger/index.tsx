import { HamburgerMenuIcon } from '@stylesComponents/icons/HamburgerMenuIcon';
import { useRouter } from 'next/router';
import { ContainerCSS } from './styles';

interface TriggerSidebarProps {
  onClick: () => void;
  id: string;
  'aria-controls': string;
  'aria-expanded': boolean;
}

export const TriggerSidebar = (props: TriggerSidebarProps) => {
  const { pathname } = useRouter();
  const isSpecialPage =
    pathname.includes('/admin') || pathname.includes('_error');

  return (
    <ContainerCSS
      type="button"
      aria-label="Menu lateral"
      style={{ display: isSpecialPage ? 'none' : undefined }}
      {...props}
    >
      <HamburgerMenuIcon />
    </ContainerCSS>
  );
};
