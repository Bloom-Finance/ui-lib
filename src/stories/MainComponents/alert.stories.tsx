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
Principal.args = {
    icon: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    )
}
