import { BottomContent } from './Contents/Bottom';
import { TopContent } from './Contents/Top';
import { ContainerCSS } from './styles';

export const AboutSection = () => {
  return (
    <ContainerCSS className="mx-w" id="about" data-internal-link>
      <TopContent />
      <BottomContent />
    </ContainerCSS>
  );
};
