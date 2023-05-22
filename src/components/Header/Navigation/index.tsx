import Link from 'next/link';
import { useEffect, useState } from 'react';

import { focusTrapOnKeyboardEvent } from '@utils/focusTrapOnKeyboardEvent';
import { useLayoutContext } from '@contexts/Layout/useLayoutContext';

import { BREAKPOINTS } from '@globalStyles/theme/shared';
import { TriggerSidebar } from './Trigger';
import { InternalLink } from './InternalLink';
import { ContainerCSS } from './styles';

export const Navigation = () => {
  const { isSpecialPage, isUserAdmin } = useLayoutContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState('#hero');

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const target = document.querySelectorAll('[data-internal-link]');
      if (target) {
        target.forEach((element) => {
          if (window.pageYOffset >= (element as HTMLElement).offsetTop - 315) {
            setActiveLink(`#${element.id}`);
          }
        });
      }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth >= BREAKPOINTS.$MAX_TABLET) {
        setIsSidebarOpen(false);
      }
    });

    return () => {
      document.removeEventListener('scroll', () => false);
      window.removeEventListener('resize', () => false);
    };
  }, []);
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : 'unset';
    if (!isSidebarOpen) {
      const firstTrigger = document.getElementById('sidebar-trigger');
      firstTrigger?.focus();
    }
  }, [isSidebarOpen]);

  const linkProps = { activeLink, onClick: () => setIsSidebarOpen(false) };

  return (
    <>
      <TriggerSidebar
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        id="sidebar-trigger"
        aria-controls="navigation"
        aria-expanded={isSidebarOpen}
      />
      <ContainerCSS
        id="navigation"
        isOpen={isSidebarOpen}
        style={{ display: isSpecialPage ? 'none' : undefined }}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Escape') setIsSidebarOpen(false);
          return isSidebarOpen && focusTrapOnKeyboardEvent(e);
        }}
      >
        <ul>
          <InternalLink href="#hero" {...linkProps}>
            início
          </InternalLink>
          <InternalLink href="#about" {...linkProps}>
            história
          </InternalLink>
          <InternalLink href="#team" {...linkProps}>
            equipe
          </InternalLink>
          <InternalLink href="#project" {...linkProps}>
            projeto
          </InternalLink>
          <InternalLink href="#transparent-documents" {...linkProps}>
            transparência
          </InternalLink>
          {/* <InternalLink href="#ev" {...linkProps}>
            eventos
          </InternalLink> */}
          <InternalLink href="#contact" {...linkProps}>
            contato
          </InternalLink>
          {isUserAdmin && (
            <li>
              <Link href="/admin/dashboard">dashboard</Link>
            </li>
          )}
        </ul>
      </ContainerCSS>
      {isSidebarOpen && (
        <div
          id="sidebar-overlay"
          tabIndex={-1}
          aria-hidden
          onClick={() => setIsSidebarOpen(false)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setIsSidebarOpen(false);
          }}
          style={{
            display: isSpecialPage ? 'none' : undefined,
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(var(--color-shadow), 0.5)',
            zIndex: 8,
          }}
        />
      )}
    </>
  );
};
