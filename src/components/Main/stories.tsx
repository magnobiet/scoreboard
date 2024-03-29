import { Meta, Story } from '@storybook/react/types-6-0';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
} as Meta;

export const Default: Story = (args) => <Main {...args} />;

Default.parameters = {
  layout: 'fullscreen',
  viewport: { defaultViewport: 'mobile2' },
};
