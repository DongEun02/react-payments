import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';
import type { errorModeInfoType } from '../constants/mode';
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
    cardExpiryDate: ['', ''],
    cardExpiryDateErrorMode: 'normal',
    handleCardExpiryDate: () => fn(),
    handleYearBlur: () => fn(),
    handleMonthBlur: () => fn(),
  },
};

export const Filled: Story = {
  args: {
    cardExpiryDate: ['12', '11'],
    cardExpiryDateErrorMode: 'normal',
    handleCardExpiryDate: () => fn(),
    handleYearBlur: () => fn(),
    handleMonthBlur: () => fn(),
  },
};

export const EmptyBothError: Story = {
  args: {
    cardExpiryDate: ['', ''],
    cardExpiryDateErrorMode: 'emptyBoth',
    handleCardExpiryDate: () => fn(),
    handleYearBlur: () => fn(),
    handleMonthBlur: () => fn(),
  },
};

export const EmptyMonthError: Story = {
  args: {
    cardExpiryDate: ['', '11'],
    cardExpiryDateErrorMode: 'emptyMonth',
    handleCardExpiryDate: () => fn(),
    handleYearBlur: () => fn(),
    handleMonthBlur: () => fn(),
  },
};

export const yearCountError: Story = {
  args: {
    cardExpiryDate: ['13', '11'],
    cardExpiryDateErrorMode: 'notMonthRange',
    handleCardExpiryDate: () => fn(),
    handleYearBlur: () => fn(),
    handleMonthBlur: () => fn(),
  },
};

export const Interactive: Story = {
  args: {
    cardExpiryDate: ['12', '11'],
    cardExpiryDateErrorMode: 'normal',
    handleCardExpiryDate: () => fn(),
    handleYearBlur: () => fn(),
    handleMonthBlur: () => fn(),
  },
  render: () => {
    const [cardExpiryDate, setCardExpiryDate] = useState<string[]>(['', '']);
    const [cardExpiryDateErrorMode, setCardExpiryDateErrorMode] = useState<
      errorModeInfoType | 'normal'
    >('normal');

    const handleCardExpiryDate = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = [...cardExpiryDate];
      next[index] = e.target.value;
      if (isNaN(Number(e.target.value))) {
        setCardExpiryDateErrorMode('notNumber');
        return;
      }

      if (index === 0) {
        if (Number(next[index]) > 12) {
          setCardExpiryDateErrorMode('notMonthRange');
          return;
        }
      }

      setCardExpiryDateErrorMode('normal');
      setCardExpiryDate(next);
    };

    const handleYearBlur = () => {
      if (cardExpiryDate.join('').length === 0) {
        setCardExpiryDateErrorMode('emptyBoth');
        return;
      }
      if (cardExpiryDate[1].length < 2) {
        setCardExpiryDateErrorMode('yearCount');
        return;
      }
      if (cardExpiryDate[0].length === 0) {
        setCardExpiryDateErrorMode('emptyMonth');
        return;
      }
      setCardExpiryDateErrorMode('normal');
    };

    const handleMonthBlur = () => {
      if (cardExpiryDate[0].length === 0) {
        setCardExpiryDateErrorMode('emptyMonth');
        return;
      }

      setCardExpiryDateErrorMode('normal');
    };

    return (
      <div>
        <CardExpiryDate
          cardExpiryDate={cardExpiryDate}
          cardExpiryDateErrorMode={cardExpiryDateErrorMode}
          handleCardExpiryDate={handleCardExpiryDate}
          handleYearBlur={handleYearBlur}
          handleMonthBlur={handleMonthBlur}
        />

        <div style={{ marginTop: '16px' }}>입력값: {cardExpiryDate.join('/')}</div>
      </div>
    );
  },
};
