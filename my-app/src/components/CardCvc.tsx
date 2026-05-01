import { CVC_ERROR_MESSAGE } from '../constants/messages.ts';
import type { CvcError } from '../types/errorTypes.ts';

type CardCvcProps = {
  cardCvc: string;
  cardCvcErrorMode: CvcError | 'normal';
  handleCardCvc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCvcBlur: () => void;
};

export default function CardCvc({
  cardCvc,
  cardCvcErrorMode,
  handleCardCvc,
  handleCvcBlur,
}: CardCvcProps) {
  return (
    <div css={{ display: 'flex', flexDirection: 'column' }}>
      <h1
        css={(theme) => ({
          ...theme.typography.title,
          color: theme.colors.black,
        })}
      >
        <div>CVC 번호를 입력해 주세요</div>
      </h1>
      <div>
        <label
          css={(theme) => ({
            ...theme.typography.label,
            color: theme.colors.label,
          })}
        >
          CVC
        </label>
        <div>
          <input
            type="text"
            placeholder="123"
            value={cardCvc}
            onChange={handleCardCvc}
            maxLength={3}
            onBlur={handleCvcBlur}
            inputMode="numeric"
            css={(theme) => ({
              width: '315px',
              height: '32px',
              borderRadius: '2px',
              border: `1.01px solid ${theme.colors.inactiveBorder}`,
              borderColor: `${
                cardCvcErrorMode !== 'normal' ? theme.colors.error : theme.colors.inactiveBorder
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
          {cardCvcErrorMode !== 'normal' ? CVC_ERROR_MESSAGE[cardCvcErrorMode] : ' '}
        </p>
      </div>
    </div>
  );
}
