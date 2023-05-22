import { VerticalToHorizontalHrCSS } from '@stylesComponents/Hr';
import { ContainerCSS } from './styles';

export const Contact = () => {
  return (
    <ContainerCSS>
      <section className="address" style={{ maxWidth: 'calc(30%)' }}>
        <p>
          R. Rosa Maria de Oliveira, 333 - Jardim Zulmira, Sorocaba - SP,
          18061-030
        </p>
      </section>
      <VerticalToHorizontalHrCSS />
      <section className="number" style={{ whiteSpace: 'nowrap' }}>
        <p>
          (15) 3222-2011
          <br />
          (15) 3202-8710
        </p>
      </section>
      <VerticalToHorizontalHrCSS />
      <section className="attendance">
        <p>
          Segunda a sexta 08h até 17h
          <br />
          ihc.sorocaba@uol.com.br
        </p>
      </section>
    </ContainerCSS>
  );
};
