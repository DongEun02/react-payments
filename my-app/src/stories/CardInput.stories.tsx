import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';

import CardInput from '../components/CardInput';

const meta = {
  title: 'Components/CardInput',
  component: CardInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    handleCardNumbers: () => fn(),
    handleCardValidityPeriod: () => fn(),
    handleCardCvc: fn(),
  },
};

export const Interactive: Story = {
  args: {
    handleCardNumbers: () => fn(),
    handleCardValidityPeriod: () => fn(),
    handleCardCvc: fn(),
  },
  render: () => {
    const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
    const [validityPeriod, setValidityPeriod] = useState(['', '']);
    const [cvc, setCvc] = useState('');

    const handleCardNumbers = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = [...cardNumbers];
      next[index] = e.target.value;
      setCardNumbers(next);
    };

    const handleCardValidityPeriod =
      (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const next = [...validityPeriod];
        next[index] = e.target.value;
        setValidityPeriod(next);
      };

    const handleCardCvc = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCvc(e.target.value);
    };

    return (
      <div>
        <CardInput
          handleCardNumbers={handleCardNumbers}
          handleCardValidityPeriod={handleCardValidityPeriod}
          handleCardCvc={handleCardCvc}
        />

        <div style={{ marginTop: '16px' }}>
          입력값: {cardNumbers.join(' - ')} / {validityPeriod.join('/')} / {cvc}
        </div>
      </div>
    );
  },
};
