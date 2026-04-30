import type { CardError } from '../types/types';
import { CARD_ERROR_MESSAGE } from '../constants/messages.ts';

type CardNumbersProps = {
  cardNumbers: string[];
  cardNumberErrorMode: CardError | 'normal';
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
    <div css={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <h1
          css={(theme) => ({
            ...theme.typography.title,
            color: theme.colors.black,
          })}
        >
          결제한 카드 번호를 입력해주세요
        </h1>
        <p
          css={(theme) => ({
            ...theme.typography.caption,
            color: theme.colors.description,
          })}
        >
          본인 명의의 카드만 결제 가능합니다.
        </p>
      </div>
      <div>
        <label
          css={(theme) => ({
            ...theme.typography.label,
            color: theme.colors.label,
          })}
        >
          카드 번호
        </label>
        <div
          css={{
            display: 'flex',
            gap: '10px',
          }}
        >
          {cardNumbers.map((cardNumber, index) => {
            return (
              <input
                type="text"
                placeholder="1234"
                maxLength={4}
                onChange={handleCardNumbers(index)}
                value={cardNumber}
                onBlur={handleLastCardNumber}
                inputMode="numeric"
                css={(theme) => ({
                  width: '71.25px',
                  height: '32px',
                  borderRadius: '2px',
                  border: `1.01px solid ${theme.colors.inactiveBorder}`,
                  borderColor:
                    cardNumber.length < 4 && cardNumberErrorMode !== 'normal'
                      ? theme.colors.error
                      : theme.colors.inactiveBorder,
                  padding: '8px',
                })}
              ></input>
            );
          })}
        </div>
        {cardNumberErrorMode !== 'normal' && (
          <span
            css={(theme) => ({
              ...theme.typography.caption,
              color: theme.colors.error,
            })}
          >
            {CARD_ERROR_MESSAGE[cardNumberErrorMode]}
          </span>
        )}
      </div>
    </div>
  );
}
