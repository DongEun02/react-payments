import Card from '../components/Card';
import CardInput from '../components/CardInput';
import React, { useState } from 'react';
import type { errorModeInfoType } from '../constants/mode';

export default function RegisterCard() {
  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const [cardExpiryDate, setCardExpiryDate] = useState<string[]>(['', '']);
  const [cardCvc, setCardCvc] = useState<string>('');
  const [cardNumberErrorMode, setCardNumberErrorMode] = useState<errorModeInfoType | 'normal'>(
    'normal',
  );
  const [cardExpiryDateErrorMode, setCardExpiryDateErrorMode] = useState<
    errorModeInfoType | 'normal'
  >('normal');
  const [cardCvcErrorMode, setCardCvcErrorMode] = useState<errorModeInfoType | 'normal'>('normal');
  const [cardBrand, setCardBrand] = useState<string>('');

  const handleCardNumbers = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = [...cardNumbers];
    next[index] = e.target.value;
    if (isNaN(Number(e.target.value))) {
      setCardNumberErrorMode('notNumber');
      return;
    }
    if (next[0] === '') {
      setCardBrand('');
    }
    if (next[0].length === 1) {
      if (next[0].slice(0, 1) !== '4' && next[0].slice(0, 1) !== '5') {
        setCardNumberErrorMode('notExistBrand');
        return;
      }
      if (next[0].slice(0, 1) == '4') {
        setCardBrand('visa');
      }
    }
    if (next[0].length === 2 && next[0].slice(0, 1) !== '4') {
      if (Number(next[0].slice(0, 2)) < 51 || Number(next[0].slice(0, 2)) > 55) {
        setCardNumberErrorMode('notExistBrand');
        return;
      }
      setCardBrand('master');
    }
    setCardNumberErrorMode('normal');
    setCardNumbers(next);
  };

  const handleCardExpiryDate = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = [...cardExpiryDate];
    next[index] = e.target.value;
    if (isNaN(Number(e.target.value))) {
      setCardExpiryDateErrorMode('notNumber');
      return;
    }

    if (index === 0) {
      if (Number(next[index]) > 12) {
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

  const handleLastCardNumber = () => {
    if (cardNumbers.join('').length !== 16) {
      setCardNumberErrorMode('cardNumberCount');
      return;
    }
    setCardNumberErrorMode('normal');
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
    <>
      <Card cardNumbers={cardNumbers} cardExpiryDate={cardExpiryDate} cardBrand={cardBrand} />
      <CardInput
        cardNumbers={cardNumbers}
        cardExpiryDate={cardExpiryDate}
        cardCvc={cardCvc}
        cardNumberErrorMode={cardNumberErrorMode}
        cardExpiryDateErrorMode={cardExpiryDateErrorMode}
        cardCvcErrorMode={cardCvcErrorMode}
        handleCardNumbers={handleCardNumbers}
        handleCardExpiryDate={handleCardExpiryDate}
        handleCardCvc={handleCardCvc}
        handleLastCardNumber={handleLastCardNumber}
        handleYearBlur={handleYearBlur}
        handleMonthBlur={handleMonthBlur}
        handleCvcBlur={handleCvcBlur}
      />
    </>
  );
}
