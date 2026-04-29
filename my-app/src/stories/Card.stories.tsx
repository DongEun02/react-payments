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
    cardNumbers: ['1234', '5678', '9012', '3456'],
    cardValidityPeriod: ['12', '30'],
  },
};

export const Empty: Story = {
  args: {
    cardNumbers: ['', '', '', ''],
    cardValidityPeriod: ['', ''],
  },
};

export const WithoutValidityPeriod: Story = {
  args: {
    cardNumbers: ['1234', '5678', '9012', '3456'],
    cardValidityPeriod: ['', ''],
  },
};
