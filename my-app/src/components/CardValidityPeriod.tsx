import type { errorModeInfoType } from '../constants/mode';
import { ERROR_MODE } from '../constants/mode.ts';

type CardValidityPeriodProps = {
  cardValidityPeriod: string[];
  cardValidityErrorMode: errorModeInfoType | 'normal';
  handleCardValidityPeriod: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CardValidityPeriod({
  cardValidityPeriod,
  cardValidityErrorMode,
  handleCardValidityPeriod,
}: CardValidityPeriodProps) {
  return (
    <div>
      <div>
        <div>카드 유효기간을 입력해 주세요</div>
        <div>월/년도(MMYY)를 순서대로 입력해 주세요.</div>
      </div>
      <div>
        <label>유효기간</label>
        <div>
          <input
            type="text"
            placeholder="MM"
            value={cardValidityPeriod[0]}
            onChange={handleCardValidityPeriod(0)}
            maxLength={2}
          ></input>
          <input
            type="text"
            placeholder="YY"
            value={cardValidityPeriod[1]}
            onChange={handleCardValidityPeriod(1)}
            maxLength={2}
          ></input>
        </div>
        {cardValidityErrorMode !== 'normal' && <span>{ERROR_MODE[cardValidityErrorMode]}</span>}
      </div>
    </div>
  );
}
