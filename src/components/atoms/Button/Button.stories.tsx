import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import Button, { ButtonProps } from './index'

const meta: Meta = {
    title: 'Atoms/Button',
    component: Button,
  }

export default meta


const Template: Story<ButtonProps> = (args) => {
    return (
        <Button {...args} />
    )
  }

export const Primary = Template.bind({})

Primary.args = {
    primary: true,
    label: 'Button',
  }
  