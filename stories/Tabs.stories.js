import { createTabs } from "./Tabs";
export default {
    title:'Controls/tabs',
    argTypes: {
      backgroundColor: { control: 'color' },
      label: { control: 'text' },
      onClick: { action: 'onClick' },
    },

}
const Template = ({ label, ...args }) => {
    return createTabs({ label, ...args });
  };
  export const Primary = Template.bind({});
Primary.args = {
  primary:'true',
  label: 'Tab Label',
};
export const Secondary = Template.bind({});
Secondary.args = {
  secondary:'true',
  label: 'Tab Label',
};