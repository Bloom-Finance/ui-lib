import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Timer from '../../components/timer'
import '../../styles/index.css'

export default {
    title: 'Components/Timer',
    component: Timer,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof Timer>

const Template: ComponentStory<typeof Timer> = args => <Timer {...args} />

export const Principal = Template.bind({})