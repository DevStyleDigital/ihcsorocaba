import type { iDocument } from 'types/iDocument';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Dialog } from '@components/Dialog';

import { ContainerCSS } from './styles';
import DocumentVetor from '../../assets/svg/document.svg';

interface DocumentProps {
  document: iDocument;
}

export const Document = ({ document }: DocumentProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ContainerCSS onClick={() => setIsOpen(true)}>
        <Image
          src={DocumentVetor}
          alt="Papel ícone vetorizado."
          width={50}
          height={60}
        />
        <span className="name">{document.type}</span>
      </ContainerCSS>
      <Dialog isOpen={isOpen} setIsOpen={setIsOpen} title={`${document.type}:`}>
        <ul>
          {document.links.map((link) => {
            return (
              <li key={link.id} style={{ marginTop: '0.5rem' }}>
                <Link href={link.url} passHref>
                  <a
                    href="replace"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: 'var(--color-text)',
                    }}
                  >
                    {link.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </Dialog>
    </>
  );
};
