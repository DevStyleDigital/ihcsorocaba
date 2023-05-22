import Image from 'next/image';
import { HrCSS } from '@stylesComponents/Hr';
import { ContainerCSS } from './styles';

export const TopContent = () => {
  const kidsMapImageAlt =
    'Crianças sorrindo. Imagem contém um recorte no formato do estado de Sorocaba.';

  return (
    <ContainerCSS>
      <div className="content">
        <HrCSS className="mob-visible" bigger />
        <div>
          <section style={{ marginTop: '4.7rem' }}>
            <h2 style={{ fontSize: '1rem' }}>
              O IHC - Instituto Humberto de Campos é uma entidade sem fins
              lucrativos com propósito beneficente ao atendimento de crianças e
              adolescentes de 06 a 15 anos em situação de vulnerabilidade social
              na cidade de Sorocaba.
            </h2>
          </section>
          <span className="kids-map mob-visible">
            <Image
              src="/img/kids-map.png"
              alt={kidsMapImageAlt}
              layout="fixed"
              width={220}
              height={220}
            />
          </span>
        </div>
        <HrCSS className="tab-visible" />
        <section>
          <p>
            Atualmente nossa Instituição assiste 160 crianças/adolescentes, num
            projeto em parceria com a Prefeitura Municipal de Sorocaba, onde
            fazem suas refeições, praticam esportes, dança, etc., tudo
            supervisionado por profissionais competentes e do mais alto
            gabarito, funcionários do IHC ou de nossos parceiros nos projetos
            por nós realizados.
          </p>
        </section>
      </div>
      <span className="kids-map tab-visible">
        <span>
          <Image
            src="/img/kids-map.png"
            alt={kidsMapImageAlt}
            layout="fixed"
            width={420}
            height={420}
          />
        </span>
      </span>
    </ContainerCSS>
  );
};
