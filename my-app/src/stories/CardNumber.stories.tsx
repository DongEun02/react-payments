import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';

import CardNumber from '../components/CardNumber';

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
    handleCardNumbers: () => fn(),
  },
};

export const Interactive: Story = {
  args: {
    handleCardNumbers: () => fn(),
  },
  render: () => {
    const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);

    const handleCardNumbers = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = [...cardNumbers];
      next[index] = e.target.value;
      setCardNumbers(next);
    };

    return (
      <div>
        <CardNumber handleCardNumbers={handleCardNumbers} />

        <div style={{ marginTop: '16px' }}>입력값: {cardNumbers.join(' - ')}</div>
      </div>
    );
  },
};
