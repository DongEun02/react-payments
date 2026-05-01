import type { DateError, MonthError, YearError } from '../types/errorTypes.ts';
import {
  DATE_ERROR_MESSAGE,
  MONTH_ERROR_MESSAGE,
  YEAR_ERROR_MESSAGE,
} from '../constants/messages.ts';
import { isMonthError, isYearError } from '../utils/util.ts';

type CardExpiryDateProps = {
  cardExpiryDate: string[];
  cardExpiryDateErrorMode: DateError | MonthError | YearError | 'normal';
  handleCardExpiryDate: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleYearBlur: () => void;
  handleMonthBlur: () => void;
};

export default function CardExpiryDate({
  cardExpiryDate,
  cardExpiryDateErrorMode,
  handleCardExpiryDate,
  handleYearBlur,
  handleMonthBlur,
}: CardExpiryDateProps) {
  const EXPIRY_ERROR_MESSAGE = {
    ...DATE_ERROR_MESSAGE,
    ...MONTH_ERROR_MESSAGE,
    ...YEAR_ERROR_MESSAGE,
  };
  return (
    <div css={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <h1
          css={(theme) => ({
            ...theme.typography.title,
            color: theme.colors.black,
          })}
        >
          카드 유효기간을 입력해 주세요
        </h1>
        <p
          css={(theme) => ({
            ...theme.typography.caption,
            color: theme.colors.description,
          })}
        >
          월/년도(MMYY)를 순서대로 입력해 주세요.
        </p>
      </div>
      <div>
        <label
          css={(theme) => ({
            ...theme.typography.label,
            color: theme.colors.label,
          })}
        >
          유효기간
        </label>
        <div
          css={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <input
            type="text"
            placeholder="MM"
            value={cardExpiryDate[0]}
            onChange={handleCardExpiryDate(0)}
            onBlur={handleMonthBlur}
            maxLength={2}
            inputMode="numeric"
            css={(theme) => ({
              width: '152.5px',
              height: '32px',
              borderRadius: '2px',
              border: `1.01px solid ${theme.colors.inactiveBorder}`,
              borderColor: `${
                isMonthError(cardExpiryDateErrorMode)
                  ? theme.colors.error
                  : theme.colors.inactiveBorder
              }`,
              padding: '8px',
            })}
          ></input>
          <input
            type="text"
            placeholder="YY"
            value={cardExpiryDate[1]}
            onChange={handleCardExpiryDate(1)}
            onBlur={handleYearBlur}
            maxLength={2}
            inputMode="numeric"
            css={(theme) => ({
              width: '152.5px',
              height: '32px',
              borderRadius: '2px',
              border: `1.01px solid ${theme.colors.inactiveBorder}`,
              borderColor: `${
                isYearError(cardExpiryDateErrorMode)
                  ? theme.colors.error
                  : theme.colors.inactiveBorder
              }`,
              padding: '8px',
            })}
          ></input>
        </div>
        <p
          css={(theme) => ({
            ...theme.typography.caption,
            color: theme.colors.error,
            height: '12px',
          })}
        >
          {cardExpiryDateErrorMode !== 'normal'
            ? EXPIRY_ERROR_MESSAGE[cardExpiryDateErrorMode]
            : ' '}
        </p>
      </div>
    </div>
  );
}
