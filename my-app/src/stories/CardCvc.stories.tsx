import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';

import CardCvc from '../components/CardCvc';
import type { CvcError } from '../types/types';

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
    cardCvc: '',
    cardCvcErrorMode: 'normal',
    handleCardCvc: () => fn(),
    handleCvcBlur: () => fn(),
  },
};

export const Filled: Story = {
  args: {
    cardCvc: '123',
    cardCvcErrorMode: 'normal',
    handleCardCvc: () => fn(),
    handleCvcBlur: () => fn(),
  },
};

export const NotNumberError: Story = {
  args: {
    cardCvc: '1a',
    cardCvcErrorMode: 'notNumber',
    handleCardCvc: () => fn(),
    handleCvcBlur: () => fn(),
  },
};

export const CvcCountError: Story = {
  args: {
    cardCvc: '12',
    cardCvcErrorMode: 'cvcCount',
    handleCardCvc: () => fn(),
    handleCvcBlur: () => fn(),
  },
};

export const Interactive: Story = {
  args: {
    cardCvc: '',
    cardCvcErrorMode: 'normal',
    handleCardCvc: () => fn(),
    handleCvcBlur: () => fn(),
  },
  render: () => {
    const [cardCvc, setCardCvc] = useState<string>('');
    const [cardCvcErrorMode, setCardCvcErrorMode] = useState<CvcError | 'normal'>('normal');

    const handleCardCvc = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (isNaN(Number(e.target.value))) {
        setCardCvcErrorMode('notNumber');
        return;
      }
      setCardCvcErrorMode('normal');
      setCardCvc(e.target.value);
    };

    const handleCvcBlur = () => {
      if (cardCvc.length < 3) {
        setCardCvcErrorMode('cvcCount');
        return;
      }
      setCardCvcErrorMode('normal');
    };

    return (
      <div>
        <CardCvc
          cardCvc={cardCvc}
          cardCvcErrorMode={cardCvcErrorMode}
          handleCardCvc={handleCardCvc}
          handleCvcBlur={handleCvcBlur}
        />

        <div style={{ marginTop: '16px' }}>입력값: {cardCvc}</div>
      </div>
    );
  },
};
