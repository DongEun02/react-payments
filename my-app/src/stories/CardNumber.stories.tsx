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
    errorMode: 'normal',
    handleCardNumbers: () => fn(),
  },
};

export const Filled: Story = {
  args: {
    cardNumbers: ['1234', '5678', '9012', '3456'],
    errorMode: 'normal',
    handleCardNumbers: () => fn(),
  },
};

export const Error: Story = {
  args: {
    cardNumbers: ['123a', '', '', ''],
    errorMode: 'notNumber',
    handleCardNumbers: () => fn(),
  },
};

export const Interactive: Story = {
  args: {
    cardNumbers: ['', '', '', ''],
    errorMode: 'normal',
    handleCardNumbers: () => fn(),
  },
  render: () => {
    const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
    const [errorMode, setErrorMode] = useState<errorModeInfoType | 'normal'>('normal');

    const handleCardNumbers = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = [...cardNumbers];
      next[index] = e.target.value;

      if (Number.isNaN(Number(e.target.value))) {
        setErrorMode('notNumber');
      } else {
        setErrorMode('normal');
      }

      setCardNumbers(next);
    };

    return (
      <div>
        <CardNumber
          cardNumbers={cardNumbers}
          errorMode={errorMode}
          handleCardNumbers={handleCardNumbers}
        />

        <div style={{ marginTop: '16px' }}>입력값: {cardNumbers.join(' - ')}</div>
      </div>
    );
  },
};
