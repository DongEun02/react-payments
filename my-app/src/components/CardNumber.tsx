import type { errorModeInfoType } from '../constants/mode.ts';
import { ERROR_MODE } from '../constants/mode.ts';

type CardNumbersProps = {
  cardNumbers: string[];
  cardNumberErrorMode: errorModeInfoType | 'normal';
  handleCardNumbers: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLastCardNumber: () => void;
};

export default function CardNumber({
  cardNumbers,
  cardNumberErrorMode,
  handleCardNumbers,
  handleLastCardNumber,
}: CardNumbersProps) {
  return (
    <div>
      <div>
        <div>결제한 카드 번호를 입력해주세요</div>
        <div>본인 명의의 카드만 결제 가능합니다.</div>
      </div>
      <div>
        <label>카드 번호</label>
        <div>
          <input
            type="text"
            placeholder="1234"
            maxLength={4}
            onChange={handleCardNumbers(0)}
            value={cardNumbers[0]}
            inputMode="numeric"
          ></input>
          <input
            type="text"
            placeholder="1234"
            maxLength={4}
            onChange={handleCardNumbers(1)}
            value={cardNumbers[1]}
            inputMode="numeric"
          ></input>
          <input
            type="text"
            placeholder="1234"
            maxLength={4}
            onChange={handleCardNumbers(2)}
            value={cardNumbers[2]}
            inputMode="numeric"
          ></input>
          <input
            type="text"
            placeholder="1234"
            maxLength={4}
            onChange={handleCardNumbers(3)}
            value={cardNumbers[3]}
            onBlur={handleLastCardNumber}
            inputMode="numeric"
          ></input>
        </div>
        {cardNumberErrorMode !== 'normal' && <span>{ERROR_MODE[cardNumberErrorMode]}</span>}
      </div>
    </div>
  );
}
