import { createLink, createlink } from './Links';

export default {
  title: 'Component/Link',

  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    }, 
    icon: {
      control: { type: 'select' },
      options: ['default','right', 'left', 'icon'],
    }, 
  },
};

const Template = ({ label, ...args }) => {
    return createLink({ label, ...args });
  };

export const Primary = Template.bind({});
Primary.args = {
  label: 'Link',
};


