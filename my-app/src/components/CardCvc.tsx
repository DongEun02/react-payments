import type { errorModeInfoType } from '../constants/mode';
import { ERROR_MODE } from '../constants/mode.ts';

type CardCvcProps = {
  cardCvc: string;
  cardCvcErrorMode: errorModeInfoType | 'normal';
  handleCardCvc: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CardCvc({ cardCvc, cardCvcErrorMode, handleCardCvc }: CardCvcProps) {
  return (
    <div>
      <div>
        <div>CVC 번호를 입력해 주세요</div>
      </div>
      <div>
        <label>CVC</label>
        <div>
          <input
            type="text"
            placeholder="123"
            value={cardCvc}
            onChange={handleCardCvc}
            maxLength={3}
          ></input>
        </div>
        {cardCvcErrorMode !== 'normal' && <span>{ERROR_MODE[cardCvcErrorMode]}</span>}
      </div>
    </div>
  );
}
