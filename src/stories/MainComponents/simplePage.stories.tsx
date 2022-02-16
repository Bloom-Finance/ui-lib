import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SimplePage from '../../components/simplePage'
import '../../styles/index.css'

export default {
    title: 'Components/SimplePage',
    component: SimplePage,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof SimplePage>

const Template: ComponentStory<typeof SimplePage> = args => <SimplePage {...args} />

export const Principal = Template.bind({})