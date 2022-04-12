import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import GroupButton from './index'
import Button from '../../atoms/Button'

const meta: Meta = {
    title: 'Molecules/GroupButton',
    component: GroupButton,
  }

export default meta


const Template: Story<any> = (args) => {
    return (
        <GroupButton {...args}>
            <Button>Home</Button>
            <Button>Add Card</Button>
        </GroupButton>
    )
  }

export const GroupButtonTemplate = Template.bind({})

GroupButtonTemplate.args = {
  
  }
  