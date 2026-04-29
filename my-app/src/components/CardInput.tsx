import CardCvc from './CardCvc';
import CardNumber from './CardNumber';
import CardValidityPeriod from './CardValidityPeriod';
import type { errorModeInfoType } from '../constants/mode';

type CardInputProps = {
  cardNumbers: string[];
  cardValidityPeriod: string;
  cardCvc: string;
  errorMode: errorModeInfoType | 'normal';
  handleCardNumbers: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardValidityPeriod: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardCvc: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CardInput({
  cardNumbers,
  cardValidityPeriod,
  cardCvc,
  errorMode,
  handleCardNumbers,
  handleCardValidityPeriod,
  handleCardCvc,
}: CardInputProps) {
  return (
    <form>
      <CardNumber
        cardNumbers={cardNumbers}
        errorMode={errorMode}
        handleCardNumbers={handleCardNumbers}
      />
      <CardValidityPeriod
        cardValidityPeriod={cardValidityPeriod}
        errorMode={errorMode}
        handleCardValidityPeriod={handleCardValidityPeriod}
      />
      <CardCvc cardCvc={cardCvc} errorMode={errorMode} handleCardCvc={handleCardCvc} />
    </form>
  );
}
