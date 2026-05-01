import type { CardError } from './errorTypes';

export interface CardStatus {
  cardNumbers: string[];
  cardNumberErrorMode: CardError | 'normal';
  cardBrand: string;
}

export interface CardHandler {
  handleCardNumbers: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardNumbersBlur: () => void;
}
