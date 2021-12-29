import { Meta, Story } from '@storybook/react/types-6-0';
import Score, { Side } from '.';

export default {
  title: 'Score',
  component: Score,
} as Meta;

export const Default: Story = () => <Score side={Side.Home} score={99} />;
export const Guest: Story = () => <Score side={Side.Guest} score={99} />;
