import { h } from 'jsx-dom';

export default {
  title: 'Components/My Component',
  component: 'my-component',
};

// default template of story as string
const Template = args => `<my-component first=${args.first} middle=${args.middle} last=${args.last} />`;

// default template of story as jsx
const TemplateAsJsx = args => <my-component first={args.first} middle={args.middle} last={args.last} />;

const defaultArgs = {
  first: 'Lorem',
  middle: 'Ipsum',
  last: 'Dolar',
};

// default story with default args
export const Default = Template.bind({});
Default.args = { ...defaultArgs };

// default as jsx with default args
export const DefaultAsJsx = TemplateAsJsx.bind({});
DefaultAsJsx.args = { ...defaultArgs };
