type CardValidityPeriodProps = {
  handleCardValidityPeriod: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CardValidityPeriod({ handleCardValidityPeriod }: CardValidityPeriodProps) {
  return (
    <div>
      <div>
        <div>카드 유효기간을 입력해 주세요</div>
        <div>월/년도(MMYY)를 순서대로 입력해 주세요.</div>
      </div>
      <div>
        <label>유효기간</label>
        <div>
          <input type="text" placeholder="MM" onChange={handleCardValidityPeriod(0)}></input>
          <input type="text" placeholder="YY" onChange={handleCardValidityPeriod(1)}></input>
        </div>
        <span></span>
      </div>
    </div>
  );
}
