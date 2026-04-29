import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';

import CardValidityPeriod from '../components/CardValidityPeriod';

const meta = {
  title: 'Components/CardValidityPeriod',
  component: CardValidityPeriod,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardValidityPeriod>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    handleCardValidityPeriod: () => fn(),
  },
};

export const Interactive: Story = {
  args: {
    handleCardValidityPeriod: () => fn(),
  },
  render: () => {
    const [validityPeriod, setValidityPeriod] = useState(['', '']);

    const handleCardValidityPeriod =
      (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const next = [...validityPeriod];
        next[index] = e.target.value;
        setValidityPeriod(next);
      };

    return (
      <div>
        <CardValidityPeriod handleCardValidityPeriod={handleCardValidityPeriod} />

        <div style={{ marginTop: '16px' }}>입력값: {validityPeriod.join('/')}</div>
      </div>
    );
  },
};
