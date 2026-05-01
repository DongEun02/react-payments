import CardCvc from './CardCvc';
import CardNumber from './CardNumber';
import CardExpiryDate from './CardExpiryDate';
import type { DateError, MonthError, YearError, CvcError } from '../types/errorTypes';
import type { CardHandler, CardStatus } from '../types/cardStausTypes';

type CardInputProps = {
  cardStatus: CardStatus;
  setCardStatus: CardHandler;
  cardExpiryDate: string[];
  cardCvc: string;
  cardExpiryDateErrorMode: DateError | MonthError | YearError | 'normal';
  cardCvcErrorMode: CvcError | 'normal';
  handleCardExpiryDate: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardCvc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleYearBlur: () => void;
  handleMonthBlur: () => void;
  handleCvcBlur: () => void;
};

export default function CardInput({
  cardStatus,
  setCardStatus,
  cardExpiryDate,
  cardCvc,
  cardExpiryDateErrorMode,
  cardCvcErrorMode,
  handleCardExpiryDate,
  handleCardCvc,
  handleYearBlur,
  handleMonthBlur,
  handleCvcBlur,
}: CardInputProps) {
  return (
    <form css={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <CardNumber cardStatus={cardStatus} setCardStatus={setCardStatus} />
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
