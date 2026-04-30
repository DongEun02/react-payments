import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';
import CardNumber from '../components/CardNumber';
import type { errorModeInfoType } from '../constants/mode';

const meta = {
  title: 'Components/CardNumber',
  component: CardNumber,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumbers: ['', '', '', ''],
    cardNumberErrorMode: 'normal',
    handleCardNumbers: () => fn(),
    handleLastCardNumber: () => fn(),
  },
};

export const Filled: Story = {
  args: {
    cardNumbers: ['1234', '5678', '9012', '3456'],
    cardNumberErrorMode: 'normal',
    handleCardNumbers: () => fn(),
    handleLastCardNumber: () => fn(),
  },
};

export const Error: Story = {
  args: {
    cardNumbers: ['123a', '', '', ''],
    cardNumberErrorMode: 'notNumber',
    handleCardNumbers: () => fn(),
    handleLastCardNumber: () => fn(),
  },
};

export const Interactive: Story = {
  args: {
    cardNumbers: ['', '', '', ''],
    cardNumberErrorMode: 'normal',
    handleCardNumbers: () => fn(),
    handleLastCardNumber: () => fn(),
  },
  render: () => {
    const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
    const [cardNumberErrorMode, setCardNumberErrorMode] = useState<errorModeInfoType | 'normal'>(
      'normal',
    );

    const handleCardNumbers = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = [...cardNumbers];
      next[index] = e.target.value;
      if (isNaN(Number(e.target.value))) {
        setCardNumberErrorMode('notNumber');
        return;
      }
      if (next[0].length === 1) {
        if (next[0].slice(0, 1) !== '4' && next[0].slice(0, 1) !== '5') {
          setCardNumberErrorMode('notExistBrand');
          return;
        }
      }
      if (next[0].length === 2 && next[0].slice(0, 1) !== '4') {
        if (Number(next[0].slice(0, 2)) < 51 || Number(next[0].slice(0, 2)) > 55) {
          setCardNumberErrorMode('notExistBrand');
          return;
        }
      }
      setCardNumberErrorMode('normal');
      setCardNumbers(next);
    };

    const handleLastCardNumber = () => {
      if (cardNumbers.join('').length !== 16) {
        setCardNumberErrorMode('cardNumberCount');
        return;
      }
      setCardNumberErrorMode('normal');
    };

    return (
      <div>
        <CardNumber
          cardNumbers={cardNumbers}
          cardNumberErrorMode={cardNumberErrorMode}
          handleCardNumbers={handleCardNumbers}
          handleLastCardNumber={handleLastCardNumber}
        />

        <div style={{ marginTop: '16px' }}>입력값: {cardNumbers.join(' - ')}</div>
      </div>
    );
  },
};
