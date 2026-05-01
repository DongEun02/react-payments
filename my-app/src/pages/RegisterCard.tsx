import Card from '../components/Card';
import CardInput from '../components/CardInput';
import React, { useState } from 'react';
import type { DateError, MonthError, YearError, CvcError } from '../types/errorTypes';
import { useCardNumber } from '../hooks/useCardNumber';

export default function RegisterCard() {
  const [cardStatus, setCardStatus] = useCardNumber();
  const [cardExpiryDate, setCardExpiryDate] = useState<string[]>(['', '']);
  const [cardCvc, setCardCvc] = useState<string>('');
  const [cardExpiryDateErrorMode, setCardExpiryDateErrorMode] = useState<
    DateError | MonthError | YearError | 'normal'
  >('normal');
  const [cardCvcErrorMode, setCardCvcErrorMode] = useState<CvcError | 'normal'>('normal');

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

  const handleCardCvc = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) {
      setCardCvcErrorMode('notNumber');
      return;
    }
    setCardCvcErrorMode('normal');
    setCardCvc(e.target.value);
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

  const handleCvcBlur = () => {
    if (cardCvc.length < 3) {
      setCardCvcErrorMode('cvcCount');
      return;
    }
    setCardCvcErrorMode('normal');
  };

  return (
    <div
      css={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '45px',
        backgroundColor: theme.colors.white,
        width: '376px',
        height: '100vh',
        margin: '0 auto',
      })}
    >
      <Card
        cardNumbers={cardStatus.cardNumbers}
        cardExpiryDate={cardExpiryDate}
        cardBrand={cardStatus.cardBrand}
      />
      <CardInput
        cardStatus={cardStatus}
        setCardStatus={setCardStatus}
        cardExpiryDate={cardExpiryDate}
        cardCvc={cardCvc}
        cardExpiryDateErrorMode={cardExpiryDateErrorMode}
        cardCvcErrorMode={cardCvcErrorMode}
        handleCardExpiryDate={handleCardExpiryDate}
        handleCardCvc={handleCardCvc}
        handleYearBlur={handleYearBlur}
        handleMonthBlur={handleMonthBlur}
        handleCvcBlur={handleCvcBlur}
      />
    </div>
  );
}
