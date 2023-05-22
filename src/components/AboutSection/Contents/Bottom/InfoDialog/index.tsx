import { useState } from 'react';
import { Dialog, DialogContentText } from '@components/Dialog';

import { TitleRectangleCSS } from '@stylesComponents/TitleRectangle';
import { ContainerCSS } from './styles';

export const InfoDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ContainerCSS>
      <button type="button" onClick={() => setIsOpen(true)}>
        <TitleRectangleCSS>Saiba Mais</TitleRectangleCSS>
      </button>

      <Dialog isOpen={isOpen} setIsOpen={setIsOpen} title="Saiba Mais:">
        <DialogContentText>
          O Instituto na verdade constituído em 17 de maio de l941, às 15h00min
          horas na Rua três de Dezembro, 48, 6º andar sala 11, na cidade de São
          Paulo, por uma comissão formada por membros da Loja Maçonica Capital,
          Comércio e Ciências, integrada pelos Senhores: Abrahão Figali, Itaiuty
          Carneiro Magalhães, Mario Câmara, João de Toledo Salles e Capitão
          Andrade Serpa Sobrinho. A idéia inicial era fundar um orfanato
          destinado a amparar e educar os órfãos necessitados, notadamente os
          filhos dos ferroviários. Nessa mesma reunião, foi proposto e aprovado
          por unanimidade que o Orfanato receberia o nome de HUMBERTO DE CAMPOS.
          O porquê dessa denominação: não tão somente pelo venerável nome,
          popular em todas as camadas do Brasil, que representava uma bandeira
          vitoriosa, portanto indicio de grandes possibilidades para a campanha,
          como ainda porque consagração maior não poderia almejar, do que servir
          seu nome como patrono de um orfanato. De fato, ele que fora o contista
          dos humildes, o escritor dos desesperados, dos carentes de corpo e de
          espírito de toda ordem, sempre teve como impulso gerador de suas obras
          literárias um grande e intenso carinho humano pelos sofredores.
          Consumado o ato, os fundadores efetuaram vários tipos de campanhas,
          para angariar recursos, contando com ajuda dos ferroviários do estado,
          nas cidades que recebia os serviços da Ferrovia.
          <br />
          <br />
          O Presidente da Ferrovia, sensibilizado aprovou a proposta da
          constituição do orfanato, bem como várias empresas se dispuseram a
          ofertar terrenos para que a sede fosse edificada. A divulgação da
          empreitada foi feita pela então Rádio Piratininga e pelo jornal Folha
          Acadêmica de São Paulo, que anunciaram a venda dos bilhetes da
          tômbola, cujo prêmio era um automóvel Ford, modelo 1941. O sorteio foi
          realizado no dia 7 de dezembro, no saguão da ferrovia em São Paulo. Em
          01/02/1942, na Estação de Mailasky da Estrada de Ferro Sorocabana,
          município de São Roque, foi lançada a pedra fundamental da construção
          do orfanato, pelo então presidente da Ferrovia. Em 28 de novembro de
          1948, a diretoria do Orfanato, propõe a Estrada de Ferro Sorocabana,
          que ao invés de São Roque, fosse edificado em Sorocaba o que foi feito
          e em conseqüência, cedeu um terreno de 99.694 m2, no distrito de Nossa
          Senhora da Ponte, onde hoje está a sede do Instituto. Desnecessário
          registrar que a participação da ferrovia na construção e manutenção da
          edificação, foi decisiva, bem como foi autorizado o desconto em folha
          de pagamento dos funcionários, para aqueles que quiseram construir com
          o Orfanato. Finalmente, em 01 de maio de 1952, foram inaugurados dois
          pavilhões dormitórios, que foram denominados: Adhemar de Barros e Dr.
          Lucas Nogueira Garcez, com capacidade para abrigar 50 órfãos por
          pavilhão. Em 07 de junho de 1952, iniciaram-se os trabalhos do
          ORFANATO HUMBERTO DE CAMPOS, Na ocasião discursaram os Srs. Mario
          Câmara, presidente do Orfanato, que convidou o então governado Dr.
          Lucas Garcez a descerrar ao Pavilhão Nacional. Estiveram na solenidade
          de inauguração, várias personalidades, destacamos a presença do
          Presidente da Estrada de Ferro Sorocabana, Dr. Durval Muylaert, o
          Prefeito Municipal de Sorocaba, além de Ministros e Secretários de
          Governo do Estado. Na manchete do Jornal CRUZEIRO DO SUL, foi
          estampando:
          <br />
          “DAR-SE HOJE A INAUGURAÇÃO DO MAGNÍFICO ORFANATO HUMBERTO DE CAMPOS”.
          Em 04/12/1952, para atender a Lei Estadual nº 1943, do Governo do
          Estado, o Orfanato passou a chamar-se INSTITUTO HUMBERTO DE CAMPOS. No
          Principio o Instituto tinha como proposta atender 80% de filhos de
          empregados da Estrada de Ferro e da Caixa de Aposentadoria e Pensões
          dos Ferroviários e 20% a critério da diretoria, isso para que a
          entidade pudesse ter direito a subvenção extraordinária do governo
          federal. O Instituto atendia como internos cerca de 500 crianças e
          adolescentes, de ambos os sexos, bem como funcionava o Grupo Escolar
          Rural Humberto de Campos, onde existia o jardim de infância para as
          crianças de 4 a 6 anos e o curso primário para os de 7 a 10 anos,
          sendo seu primeiro diretor o Professor Genésio Flores. Em 1972, o
          Instituto passou a internar apenas órfãos do sexo masculino. A partir
          de 13/07/ 1990, com a aprovação da Lei nº 8.069, que dispõe sobre o
          Estatuto da Criança e do Menor Adolescente, deixa de internar as
          crianças e firma convênio com a Prefeitura Municipal, passando a
          atender em regime de externato. Hoje o Instituto, atende cerca de 160
          crianças e adolescentes, todos carentes, compreendidos na faixa etária
          de 05 a 17 anos, complementando os estudos fundamental e médio e com
          atividades culturais/recreativas, como teatro, balé, sala de
          filmoteca, brinquedoteca, ginástica artística, coral, informática,
          futebol de salão etc. HUMBERTO DE CAMPOS Município de Sorocaba, SP
          Linha-tronca – km 97,717 (1931) SP-0291 Inauguração: 03.1925 Uso
          atual: demolida / com trilhos Data de construção do prédio atual: 1926
          (já demolido)
          <br />
          HISTORICO DA LINHA: A E. F. Sorocabana foi fundada em 1872, e o
          primeiro trecho da linha foi aberto em 1875, até Sorocaba. A
          linha-tronco se expandiu até 1922, quando atingiu Presidente Epitácio,
          nas margens do rio Paraná. Antes, porém, a EFS construiu vários
          ramais, e passou por trocas de donos e fusões: em 1892, foi fundida
          pelo Governo com a Ytuana, na época à beira da falência. Em 1903, o
          Governo Federal assumiu a ferrovia, vendida para o Governo paulista em
          1905. Este a arrendou em 1907 para o grupo de Percival Farquhar,
          desaparecendo a Ytuana de vez, com suas linhas incorporadas pela EFS.
          Em 1919, o Governo paulista voltou a ser o dono, por causa da situação
          precária do grupo detentor. Assim foi até 1971, quando a EFS foi uma
          das ferrovias que formaram a estatal FEPASA. O seu trecho inicial,
          primeiro até Mairinque, depois somente até Amador Bueno, desde os anos
          20 passaram a atender principalmente os trens de subúrbio. Com o
          surgimento da CPTM, em 1994, esse trecho passou a ser administrado por
          ela. Trens de passageiros de longo percurso trafegaram pela
          linha-tronco até 16/1/1999, quando foram suprimidos pela
          concessionária Ferroban, sucessora da Fepasa. A linha está ativa até
          hoje, para trens de carga. A ESTAÇÃO: A estação foi inaugurada em 1925
          como posto km 101. O prédio, entretanto, somente foi entregue em 1926.
          Em 1927 passou a ser o posto km 98, com a redução de quilometragem
          provocado pela retificação e duplicação da linha. Em 1932, passou a se
          chamar Iporanga, e mais tarde Humberto de Campos. Mais tarde, a
          Sorocabana envolveu-se no projeto de um orfanato patrocinado por uma
          loja maçônica de Sorocaba, tendo doado em 1944 uma área de 99.000 m2
          de seu patrimônio, mas do outro lado da cidade em relação à estação,
          segundo conta Elias Vieira. Com as plantas das edificações elaboradas
          por seus engenheiros A Sorocabana cedeu pessoal, plantas do projeto e
          material para as obras e também um desvio da linha para carga e
          descarga. Inaugurado em 1952, o Orfanato, depois Instituto Humberto de
          Campos tinha 80% de seus lugares destinado a órfãos de ferroviários da
          ativa e da Caixa de Pensões, cujas contribuições começaram com
          desconto em folha a partir de 1945. Representantes da Sorocabana
          também participavam do Conselho Fiscal. Curiosamente, existem
          listagens de estações emitidas pela própria Sorocabana que mostram uma
          parada Humberto de Campos após a estação de Sorocaba, antes de Lopes
          de Oliveira, na época em que existia o instituto. Também há evidências
          de uma parada ali perto, junto à fábrica da Seagrams, que teria o nome
          de “Parada Seagrams” ou algo parecido. Enfim, uma bela confusão. A
          estação foi desativada antes dos anos 70 e posteriormente demolida.
          Segundo Antonio Carreão, atualmente (2006) ainda existem restos das
          suas fundações escondidos pelo mato. Ferroviários mais antigos afirmam
          que existia um prédio ali, realmente, mas que nele o trem raramente
          parava. Já Alberto G. Neto fala que não havia prédio algum e que era
          uma parada simples com uma plataforma feita de trilhos e dormentes e
          que ficava depois de Sorocaba e não antes. Enfim: muito confuso.
          Parece ter existido duas paradas com o mesmo nome em posições
          diferentes em relação à estação central de Sorocaba: uma antes e outra
          depois, em épocas diferentes. (Fontes: Coaraci Camargo; Carlos R.
          Almeida; Antonio)
        </DialogContentText>
      </Dialog>
    </ContainerCSS>
  );
};
