import CardCvc from './CardCvc';
import CardNumber from './CardNumber';
import CardExpiryDate from './CardExpiryDate';
import type { CardError, DateError, MonthError, YearError, CvcError } from '../types/types';

type CardInputProps = {
  cardNumbers: string[];
  cardExpiryDate: string[];
  cardCvc: string;
  cardNumberErrorMode: CardError | 'normal';
  cardExpiryDateErrorMode: DateError | MonthError | YearError | 'normal';
  cardCvcErrorMode: CvcError | 'normal';
  handleCardNumbers: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardExpiryDate: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardCvc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLastCardNumber: () => void;
  handleYearBlur: () => void;
  handleMonthBlur: () => void;
  handleCvcBlur: () => void;
};

export default function CardInput({
  cardNumbers,
  cardExpiryDate,
  cardCvc,
  cardNumberErrorMode,
  cardExpiryDateErrorMode,
  cardCvcErrorMode,
  handleCardNumbers,
  handleCardExpiryDate,
  handleCardCvc,
  handleLastCardNumber,
  handleYearBlur,
  handleMonthBlur,
  handleCvcBlur,
}: CardInputProps) {
  return (
    <form css={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <CardNumber
        cardNumbers={cardNumbers}
        cardNumberErrorMode={cardNumberErrorMode}
        handleCardNumbers={handleCardNumbers}
        handleLastCardNumber={handleLastCardNumber}
      />
      <CardExpiryDate
        cardExpiryDate={cardExpiryDate}
        cardExpiryDateErrorMode={cardExpiryDateErrorMode}
        handleCardExpiryDate={handleCardExpiryDate}
        handleYearBlur={handleYearBlur}
        handleMonthBlur={handleMonthBlur}
      />
      <CardCvc
        cardCvc={cardCvc}
        cardCvcErrorMode={cardCvcErrorMode}
        handleCardCvc={handleCardCvc}
        handleCvcBlur={handleCvcBlur}
      />
    </form>
  );
}
