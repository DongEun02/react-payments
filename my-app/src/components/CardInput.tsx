import CardCvc from './CardCvc';
import CardNumber from './CardNumber';
import CardValidityPeriod from './CardValidityPeriod';
import type { errorModeInfoType } from '../constants/mode';

type CardInputProps = {
  cardNumbers: string[];
  cardValidityPeriod: string[];
  cardCvc: string;
  cardNumberErrorMode: errorModeInfoType | 'normal';
  cardValidityErrorMode: errorModeInfoType | 'normal';
  cardCvcErrorMode: errorModeInfoType | 'normal';
  handleCardNumbers: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardValidityPeriod: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardCvc: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CardInput({
  cardNumbers,
  cardValidityPeriod,
  cardCvc,
  cardNumberErrorMode,
  cardValidityErrorMode,
  cardCvcErrorMode,
  handleCardNumbers,
  handleCardValidityPeriod,
  handleCardCvc,
}: CardInputProps) {
  return (
    <form>
      <CardNumber
        cardNumbers={cardNumbers}
        cardNumberErrorMode={cardNumberErrorMode}
        handleCardNumbers={handleCardNumbers}
      />
      <CardValidityPeriod
        cardValidityPeriod={cardValidityPeriod}
        cardValidityErrorMode={cardValidityErrorMode}
        handleCardValidityPeriod={handleCardValidityPeriod}
      />
      <CardCvc
        cardCvc={cardCvc}
        cardCvcErrorMode={cardCvcErrorMode}
        handleCardCvc={handleCardCvc}
      />
    </form>
  );
}
