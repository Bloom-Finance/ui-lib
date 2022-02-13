import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from '../../components/button'
import '../../styles/index.css'

export default {
    title: 'Components/Button',
    component: Button,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Principal = Template.bind({})
