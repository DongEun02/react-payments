import CardCvc from './CardCvc';
import CardNumber from './CardNumber';
import CardValidityPeriod from './CardValidityPeriod';

type CardInputProps = {
  handleCardNumbers: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardValidityPeriod: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardCvc: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CardInput({
  handleCardNumbers,
  handleCardValidityPeriod,
  handleCardCvc,
}: CardInputProps) {
  return (
    <form>
      <CardNumber handleCardNumbers={handleCardNumbers} />
      <CardValidityPeriod handleCardValidityPeriod={handleCardValidityPeriod} />
      <CardCvc handleCardCvc={handleCardCvc} />
    </form>
  );
}
