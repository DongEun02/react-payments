import { useState } from 'react';
import type { DateError, MonthError, YearError } from '../types/errorTypes';
import type { CardExpiry, ExpireHandler } from '../types/cardStausTypes';

export function useExpiryDate(): [CardExpiry, ExpireHandler] {
  const [cardExpiryDate, setCardExpiryDate] = useState<string[]>(['', '']);
  const [cardExpiryDateErrorMode, setCardExpiryDateErrorMode] = useState<
    DateError | MonthError | YearError | 'normal'
  >('normal');

  const handleCardExpiryDate = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = [...cardExpiryDate];
    next[index] = e.target.value;
    if (isNaN(Number(e.target.value))) {
      if (index === 0) {
        setCardExpiryDateErrorMode('notMonthNumber');
        return;
      }
      if (index === 1) {
        setCardExpiryDateErrorMode('notYearNumber');
        return;
      }
    }

    if (index === 0) {
      if (Number(next[index]) > 12 || next[index] === '00') {
        setCardExpiryDateErrorMode('notMonthRange');
        return;
      }
    }

    setCardExpiryDateErrorMode('normal');
    setCardExpiryDate(next);
  };

  const handleYearBlur = () => {
    if (cardExpiryDate.join('').length === 0) {
      setCardExpiryDateErrorMode('emptyBoth');
      return;
    }
    if (cardExpiryDate[1].length < 2) {
      setCardExpiryDateErrorMode('yearCount');
      return;
    }
    if (cardExpiryDate[0].length === 0) {
      setCardExpiryDateErrorMode('emptyMonth');
      return;
    }
    setCardExpiryDateErrorMode('normal');
  };

  const handleMonthBlur = () => {
    if (cardExpiryDate[0].length === 0) {
      setCardExpiryDateErrorMode('emptyMonth');
      return;
    }

    setCardExpiryDateErrorMode('normal');
  };

  return [
    {
      cardExpiryDate: cardExpiryDate,
      cardExpiryDateErrorMode: cardExpiryDateErrorMode,
    },
    {
      handleCardExpiryDate: handleCardExpiryDate,
      handleYearBlur: handleYearBlur,
      handleMonthBlur: handleMonthBlur,
    },
  ];
}
