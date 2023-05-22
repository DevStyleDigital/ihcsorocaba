import { SidelineTextCSS } from '@stylesComponents/SidelineText';
import { InfoDialog } from './InfoDialog';
import { ContainerCSS } from './styles';

export const BottomContent = () => {
  return (
    <ContainerCSS className="more-info" style={{ marginTop: '2rem' }}>
      <InfoDialog />

      <h3 style={{ fontSize: '1.25rem', margin: '2rem 0 1rem' }}>
        <SidelineTextCSS style={{ textTransform: 'uppercase' }}>
          MANTENEDORA
        </SidelineTextCSS>
      </h3>

      <p>
        A Loja Maçônica XXVI DE MAIO é a mantenedora do Instituto Humberto de
        Campos, onde a responsabilidade está sobre os cuidados e principalmente
        na transformação de pessoas valores esses que estão compartilhados junto
        aos poderes Executivo, Legislativo e Federal.
      </p>
    </ContainerCSS>
  );
};
