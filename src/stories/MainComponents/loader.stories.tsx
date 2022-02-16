import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Loader from '../../components/loader'
import '../../styles/index.css'

export default {
    title: 'Components/Loader',
    component: Loader,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = args => <Loader {...args} />

export const Principal = Template.bind({})