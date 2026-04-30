type CardProps = {
  cardBrand: string;
  cardNumbers: string[];
  cardExpiryDate: string[];
};

export default function Card({ cardBrand, cardNumbers, cardExpiryDate }: CardProps) {
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
      {cardExpiryDate[0] !== '' && cardExpiryDate[1] !== '' && (
        <span>
          {cardExpiryDate[0]}/{cardExpiryDate[1]}
        </span>
      )}
    </div>
  );
}
