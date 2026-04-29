import Card from '../components/Card';
import CardInput from '../components/CardInput';
import { useState } from 'react';
import type { errorModeInfoType } from '../constants/mode';

export default function RegisterCard() {
  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const [cardValidityPeriod, setCardValidityPeriod] = useState<string[]>(['', '']);
  const [cardCvc, setCardCvc] = useState<string>('');
  const [cardNumberErrorMode, setCardNumberErrorMode] = useState<errorModeInfoType | 'normal'>(
    'normal',
  );
  const [cardValidityErrorMode, setCardValidityErrorMode] = useState<errorModeInfoType | 'normal'>(
    'normal',
  );
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
      setCardBrand('materCard');
    }
    setCardNumberErrorMode('normal');
    setCardNumbers(next);
  };

  const handleCardValidityPeriod = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = [...cardValidityPeriod];
    next[index] = e.target.value;
    if (isNaN(Number(e.target.value))) {
      setCardValidityErrorMode('notNumber');
      return;
    }
    setCardValidityErrorMode('normal');
    setCardValidityPeriod(next);
  };

  const handleCardCvc = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) {
      setCardCvcErrorMode('notNumber');
      return;
    }
    setCardCvcErrorMode('normal');
    setCardCvc(e.target.value);
  };

  return (
    <>
      <Card
        cardNumbers={cardNumbers}
        cardValidityPeriod={cardValidityPeriod}
        cardBrand={cardBrand}
      />
      <CardInput
        cardNumbers={cardNumbers}
        cardValidityPeriod={cardValidityPeriod}
        cardCvc={cardCvc}
        cardNumberErrorMode={cardNumberErrorMode}
        cardValidityErrorMode={cardValidityErrorMode}
        cardCvcErrorMode={cardCvcErrorMode}
        handleCardNumbers={handleCardNumbers}
        handleCardValidityPeriod={handleCardValidityPeriod}
        handleCardCvc={handleCardCvc}
      />
    </>
  );
}
