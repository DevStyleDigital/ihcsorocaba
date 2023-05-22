import { ContainerCSS } from './styles';

export interface CarouselContentProps {
  texts: {
    id: number;
    text: string;
    fontSize: string;
    textColor: string | 'primary' | 'secondary';
    fontFamily: string | 'primary' | 'secondary';
    backgroundColor: string | 'transparent' | 'white' | 'primary';
  }[];
}

export const CarouselContent = ({ texts }: CarouselContentProps) => {
  return (
    <ContainerCSS className="mx-w">
      <div className="content">
        {texts.map(
          ({ id, textColor, backgroundColor, fontFamily, fontSize, text }) => {
            const textAssertColors =
              (textColor === 'primary' && 'var(--color-primary)') ||
              (textColor === 'secondary' && 'var(--color-secondary)') ||
              textColor;

            const backgroundAssertColors =
              (backgroundColor === 'primary' && 'var(--color-primary)') ||
              backgroundColor;

            const fontAssertFamily =
              (fontFamily === 'primary' && 'var(--font-primary)') ||
              (fontFamily === 'secondary' && 'var(--font-secondary)') ||
              fontFamily;

            return (
              <div
                key={id}
                className="text"
                style={{
                  fontFamily: fontAssertFamily,
                  fontSize,
                  color: textAssertColors,
                  backgroundColor: backgroundAssertColors,
                }}
              >
                <span>{text}</span>
              </div>
            );
          },
        )}
      </div>
    </ContainerCSS>
  );
};
