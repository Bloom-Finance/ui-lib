import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Alert from '../../components/alert'
import '../../styles/index.css'

export default {
    title: 'Components/Alert',
    component: Alert,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = args => <Alert {...args} />

export const Principal = Template.bind({})
