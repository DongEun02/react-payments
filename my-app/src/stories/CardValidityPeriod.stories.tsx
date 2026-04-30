import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';

import CardExpiryDate from '../components/CardExpiryDate';

const meta = {
  title: 'Components/CardExpiryDate',
  component: CardExpiryDate,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardExpiryDate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    handleCardExpiryDate: () => fn(),
  },
};

export const Interactive: Story = {
  args: {
    handleCardExpiryDate: () => fn(),
  },
  render: () => {
    const [expiryDate, setExpiryDate] = useState(['', '']);

    const handleCardExpiryDate = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = [...expiryDate];
      next[index] = e.target.value;
      setExpiryDate(next);
    };

    return (
      <div>
        <CardExpiryDate handleCardExpiryDate={handleCardExpiryDate} />

        <div style={{ marginTop: '16px' }}>입력값: {expiryDate.join('/')}</div>
      </div>
    );
  },
};
