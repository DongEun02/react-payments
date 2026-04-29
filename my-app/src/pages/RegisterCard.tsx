import Card from '../components/Card';
import CardInput from '../components/CardInput';
import { useState } from 'react';
import type { errorModeInfoType } from '../constants/mode';

export default function RegisterCard() {
  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const [cardValidityPeriod, setCardValidityPeriod] = useState<string[]>(['', '']);
  const [cardCvc, setCardCvc] = useState<string>('');
  const [errorMode, setErrorMode] = useState<errorModeInfoType | 'normal'>('normal');

  const handleCardNumbers = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = [...cardNumbers];
    next[index] = e.target.value;
    if (isNaN(Number(e.target.value))) {
      setErrorMode('notNumber');
      return;
    }
    setErrorMode('normal');
    setCardNumbers(next);
  };

  const handleCardValidityPeriod = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = [...cardValidityPeriod];
    next[index] = e.target.value;
    setCardValidityPeriod(next);
  };

  const handleCardCvc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardCvc(e.target.value);
  };

  return (
    <>
      <Card cardNumbers={cardNumbers} cardValidityPeriod={cardValidityPeriod} />
      <CardInput
        cardNumbers={cardNumbers}
        cardValidityPeriod={cardValidityPeriod}
        cardCvc={cardCvc}
        errorMode={errorMode}
        handleCardNumbers={handleCardNumbers}
        handleCardValidityPeriod={handleCardValidityPeriod}
        handleCardCvc={handleCardCvc}
      />
    </>
  );
}
