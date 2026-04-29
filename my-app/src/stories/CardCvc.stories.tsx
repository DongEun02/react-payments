import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';

import CardCvc from '../components/CardCvc';

const meta = {
  title: 'Components/CardCvc',
  component: CardCvc,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardCvc>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    handleCardCvc: fn(),
  },
};

export const Interactive: Story = {
  args: {
    handleCardCvc: fn(),
  },
  render: () => {
    const [cvc, setCvc] = useState('');

    const handleCardCvc = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCvc(e.target.value);
    };

    return (
      <div>
        <CardCvc handleCardCvc={handleCardCvc} />

        <div style={{ marginTop: '16px' }}>입력값: {cvc}</div>
      </div>
    );
  },
};
