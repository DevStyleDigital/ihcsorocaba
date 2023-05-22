import { Contact } from './Contents/Contact';
import { Social } from './Contents/Social';

import { ContainerCSS } from './styles';

export const TopContent = () => {
  return (
    <ContainerCSS className="mx-w">
      <div className="content">
        <h2 style={{ marginTop: '4rem', textTransform: 'uppercase' }}>
          contato
        </h2>
        <Contact />
        <Social />
      </div>
    </ContainerCSS>
  );
};
