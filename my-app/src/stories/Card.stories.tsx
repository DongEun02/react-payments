import type { Meta, StoryObj } from '@storybook/react-vite';

import Card from '../components/Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardBrand: '',
    cardNumbers: ['', '', '', ''],
    cardExpiryDate: ['', ''],
  },
};

export const FilledVisa: Story = {
  args: {
    cardBrand: 'visa',
    cardNumbers: ['4123', '5678', '9875', '1234'],
    cardExpiryDate: ['12', '12'],
  },
};
export const FilledMaster: Story = {
  args: {
    cardBrand: 'master',
    cardNumbers: ['5123', '1234', '1234', '1234'],
    cardExpiryDate: ['12', '12'],
  },
};
