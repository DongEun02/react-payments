type CardCvcProps = {
  handleCardCvc: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CardCvc({ handleCardCvc }: CardCvcProps) {
  return (
    <div>
      <div>
        <div>CVC 번호를 입력해 주세요</div>
      </div>
      <div>
        <label>CVC</label>
        <div>
          <input type="text" placeholder="123" onChange={handleCardCvc}></input>
        </div>
        <span></span>
      </div>
    </div>
  );
}
