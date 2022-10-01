import { h } from 'jsx-dom';

export default {
  title: 'Components/My Component',
  component: 'my-component',
};

// default template of story
const Template = args => <my-component first={args.first} middle={args.middle} last={args.last} />;

const defaultArgs = {
  first: 'Lorem',
  middle: 'Ipsum',
  last: 'Dolar',
};

// default story with default args
export const Default = Template.bind({});
Default.args = { ...defaultArgs };
