import { createTags } from "./Tags";
export default {
    title:'Controls/Special Tags',
    argTypes: {
        backgroundColor: { control: 'color' },
        label: { control: 'text' },
        onClick: { action: 'onClick' },
        variant: { 
          control: {type:'select'},
          options: ['Default','UserTag','SystemTag','PlayersTag']  },
      }, 

}
const Template = ({ label, ...args }) => {
    return createTags({ label, ...args });
  };
  export const Primary = Template.bind({});
Primary.args = {
  primary:'true',
  label: 'Label',
};
