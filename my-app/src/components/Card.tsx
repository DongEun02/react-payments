type CardProps = {
  cardBrand: string;
  cardNumbers: string[];
  cardValidityPeriod: string[];
};

export default function Card({ cardBrand, cardNumbers, cardValidityPeriod }: CardProps) {
  return (
    <div>
      <div>
        <div></div>
        <div>{cardBrand}</div>
      </div>
      <div>
        <span>{cardNumbers[0]}</span>
        <span>{cardNumbers[1]}</span>
        <span>{cardNumbers[2]}</span>
        <span>{cardNumbers[3]}</span>
      </div>
      {cardValidityPeriod[0] !== '' && cardValidityPeriod[1] !== '' && (
        <span>
          {cardValidityPeriod[0]}/{cardValidityPeriod[1]}
        </span>
      )}
    </div>
  );
}
